{-# LANGUAGE OverloadedStrings #-}
module Templates where

import Text.Pandoc qualified as P
import System.Directory (doesFileExist)
import Data.Text (Text)
import Data.Text qualified as T
import Data.Text.IO qualified as T
import Text.Ginger
import Control.Monad.Writer 

type Context a = ToGVal (Run SourcePos (Writer Text) Text) a

loadFile :: SourceName -> IO (Maybe Source)
loadFile source = do 
  sourceExists <- doesFileExist source
  if sourceExists 
      then Just <$> readFile source
      else Just <$> readFile templateSource
  where
    -- TODO: Gotta be a more efficient way to do this
    templateSource = T.unpack . T.replace "pages" "templates" $ T.pack source


parsePage :: FilePath -> IO (Either ParserError (Template SourcePos))
parsePage = parseGingerFile loadFile 

parsePost :: FilePath -> IO (Either ParserError (Template SourcePos))
parsePost sourceFile = do
  parseMarkdown sourceFile >>= parseGinger loadFile Nothing . embedPost

-- Given a file path and a context, either return an error message or text
-- obtained by rendering the template at taht file path with the provided
-- context.
renderPage :: Context a => FilePath -> a -> IO (Either String Text)
renderPage sourceFile ctx = do
  parseGingerFile loadFile sourceFile >>= handleError sourceFile ctx

renderPost :: Context a => FilePath -> a -> IO (Either String Text)
renderPost sourceFile ctx = do
  parsePost sourceFile >>= handleError sourceFile ctx

parseMarkdown :: FilePath -> IO Text
parseMarkdown path = do
  text <- T.readFile path
  result <- P.runIO do
    doc <- P.readCommonMark P.def text
    P.writeHtml5String P.def doc
  P.handleError result


embedPost :: Text -> String
embedPost body = mconcat
  [ "{% extends 'site/templates/default.html' %}" 
  , "{% block body %}"
  , T.unpack body 
  , "{% endblock %}"
  ]

-- handleError :: (ToGVal (Run p (Writer Text) Text) v,
handleError 
  :: (Context v, Context SourcePos) 
  => SourceName 
  -> v 
  -> Either ParserError (Template SourcePos)
  -> IO (Either String Text)
handleError sourceFile ctx templateR =
  case templateR of
    Left parserError -> do 
      source <- loadFile sourceFile
      pure $ Left (formatParserError source parserError)
    Right template -> do
      let result :: Text = easyRender ctx template
      pure $ Right result

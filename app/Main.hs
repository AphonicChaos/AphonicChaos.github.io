{-# LANGUAGE OverloadedStrings #-}
module Main where

import Data.Text
-- import Text.Megaparsec
import Text.Mustache
import Data.Text.IO qualified as T

data PostContext = PostContext 
  { postTitle :: Text
  , teaser :: Text
  , date :: Text
  , url :: Text
  }
  deriving (Eq, Show)

instance ToMustache PostContext where
  toMustache ctx =
    object [ "title" ~> postTitle ctx 
           , "teaser" ~> teaser ctx 
           , "date" ~> date ctx
           , "url" ~> url ctx
           ]

data PageContext = PageContext
  { pageTitle :: Text
  , onHome :: Bool
  , onPortfolio :: Bool
  , onArchive :: Bool
  , posts :: [PostContext]
  } 
  deriving (Eq, Show)

instance ToMustache PageContext where
  toMustache ctx = 
   object  [ "title" ~> pageTitle ctx
           , "onHome" ~> onHome ctx
           , "onPortfolio " ~> onPortfolio ctx
           , "onArchive" ~> onArchive ctx
           ]

main :: IO ()
main = do
  let ctx = PageContext { pageTitle = "Aphonic"
                        , onHome = False
                        , onPortfolio = True
                        , onArchive = False
                        , posts = []
                        }
  indexE <- automaticCompile ["site/templates"] "index.mustache"
  case indexE of 
    Left err -> print err
    Right indexT -> do 
      print indexT
      T.putStr $ substitute indexT ctx

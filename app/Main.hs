{-# LANGUAGE OverloadedStrings #-}
module Main where

import Data.Aeson
import Data.Text
import Text.Megaparsec
import Text.Mustache
import Data.Text.Lazy.IO qualified as TL

main :: IO ()
main = do
  let res = compileMustacheText "foo"
              """
              Hi, {{name}}! You have:
              {{#things}}
              * {{.}}
              {{/things}}
              """
  case res of
    Left bundle -> putStrLn $ errorBundlePretty bundle
    Right template -> TL.putStr . renderMustache template $
      object [ "name" .= ("John" :: Text)
             , "things" .= ["pen" :: Text, "chandle", "egg"]
             ]



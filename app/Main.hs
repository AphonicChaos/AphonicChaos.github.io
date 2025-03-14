{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveAnyClass #-}
module Main where

-- render ginger (jinja2) templates to HTML
import Templates
import Data.Text.IO qualified as T
import Context as Index (Index(..))
import Context as Post (Post(..))

index :: Index
index = Index { title = "Aphonic"
              , onHome = False
              , onPortfolio = True
              , onArchive = False
              , posts = [ post ]
              }

post :: Post
post = Post { title = "First Post"
            , teaser = "I did a thing" 
            , date = "March 4, 2025"
            , url = "/posts/first.html"
            }


-- example of rendering a single template
example :: IO ()
example = do
  result <- renderPage "site/pages/index.html" index
  either putStrLn T.putStrLn result

main :: IO ()
main = do
  result <- renderPost "site/posts/2025-03-12-site-plans.md" post
  either putStrLn T.putStrLn result


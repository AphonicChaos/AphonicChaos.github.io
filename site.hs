--------------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}

import Data.Monoid (mappend)
import Hakyll
import Hakyll.Images
import Hakyll.Images.Resize
import Hakyll.Typescript.JS

--------------------------------------------------------------------------------
main :: IO ()
main = hakyll $ do
  match "images/**" $ do
    route idRoute
    compile copyFileCompiler
  -- compile $ loadImage >>= ensureFitCompiler 540 340

  match "css/*" $ do
    route idRoute
    compile compressCssCompiler

  match "js/*" $ do
    route idRoute
    compile compressJsCompiler

  matchMetadata "posts/*" (not . isDraft) $ do
    route $ setExtension "html"
    compile $
      pandocCompiler
        >>= saveSnapshot "content"
        >>= loadAndApplyTemplate "templates/post.html" postCtx
        >>= loadAndApplyTemplate "templates/default.html" postCtx
        >>= relativizeUrls

  match "index.html" $ do
    route idRoute
    compile $ do
      posts <- recentFirst =<< loadAll "posts/*"
      let indexCtx =
            listField "posts" (teaserField "teaser" "content" <> postCtx) (return (take 3 posts))
              <> constField "is-home" ""
              <> defaultContext

      getResourceBody
        >>= applyAsTemplate indexCtx
        >>= loadAndApplyTemplate "templates/default.html" indexCtx
        >>= relativizeUrls

  match (fromList ["portfolio.html"]) $ do
    route $ idRoute
    compile $ do
      let portfolioCtx =
            constField "is-portfolio" ""
              <> defaultContext

      getResourceBody
        >>= loadAndApplyTemplate "templates/default.html" portfolioCtx
        >>= relativizeUrls

  match (fromList ["resume.html"]) $ do
    route $ idRoute
    compile copyFileCompiler

  create ["archive.html"] $ do
    route idRoute
    compile $ do
      posts <- recentFirst =<< loadAll "posts/*"
      let archiveCtx =
            listField "posts" (teaserField "teaser" "content" <> postCtx) (return posts)
              <> constField "title" "All Posts"
              <> constField "is-archive" ""
              <> defaultContext

      makeItem ""
        >>= loadAndApplyTemplate "templates/archive.html" archiveCtx
        >>= loadAndApplyTemplate "templates/default.html" archiveCtx
        >>= relativizeUrls

  match "templates/*" $ compile templateBodyCompiler

--------------------------------------------------------------------------------
postCtx :: Context String
postCtx =
  dateField "date" "%B %e, %Y"
    `mappend` defaultContext

isDraft :: Metadata -> Bool
isDraft = maybe False (== "true") . lookupString "draft"

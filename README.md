# Aphonic.org

This is the source code for my website, [aphonic.org](https://aphonic.org).

## Project layout
    .
    ├── aphonic-org.cabal
    ├── app
    │   └── Main.hs
    ├── CHANGELOG.md
    └── site
        └── templates
        └── posts

### app
This directory holds the source code for the static site generator used to build
this site. It can be installed with `cabal install`, and help can be displayed
with `aphonic -h`.

### site
This directory holds the content for the website itself. The templates directory
holds templates used to construct pages and posts, while posts holds markdown
files that are used to generate posts in the blog.

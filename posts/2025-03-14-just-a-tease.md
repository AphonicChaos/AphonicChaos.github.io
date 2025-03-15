---
title: Just a Tease
---

I just wanted to add teasers to the [home page](/). After many attempts, and
many failures, I resolved to look for another static site generator; one that
felt less magical; one that I could wrap my head around.

<!--more-->

The [Hakyll tutorial](https://jaspervdj.be/hakyll/tutorials/using-teasers-in-hakyll.html) covers adding the feature beautifully. Chris Reichert even goes into some more elaborate detail in [this blog post](http://reichertbrothers.com/blog/posts/2014-04-08-hakyll-teasers.html). Despite that, I still couldn't get the feature to work, and so set off looking for another static site generator. 

## In search of greener pastures
Before this version of the site, I had played with
[Gatsby](https://www.gatsbyjs.com/), and years before, I had experimented with
[Hugo](https://gohugo.io/), [jekyll](https://jekyllrb.com/), and countless
others. While each one worked, more or less, I didn't *enjoy* using them.

I next tried [slick](https://github.com/ChrisPenner/slick#readme), and also
looked into both [rib](https://rib.srid.ca/) and [Ema](https://ema.srid.ca/).
For one reason or another, I didn't like these either, and so set about writing
my own static site generator yesterday...

## Cache me slipping

...and then realized why the feature wasn't working this morning. You see,
there are two types are changes you can make to a Hakyll site:

- Changes to how the site is *built*
- changes to *content*.

Changes to how the site are built necessitate recompiling the program, while
changes to content do not. While I was dutifully recompiling when I needed to, I
wasn't using the new executable. That is, my work flow had consisted of doing
this:

```bash  {.not-numbered}
ls site.hs | entr -cr sh -c "cabal build && site watch"
```
This command watches the `site.hs` file for changes, and recompiles the program
when necessary, then restarts the executable in watch mode, which gives me
access to a preview server that watches for changes in *content*. The problem is
that the `cabal build` command generates an executable, but **does not** place
it in my path, so the `site` executable I was running was from an **old**
version.

The solution is to either use `cabal install` instead of `cabal build` *or* use
`cabal run site -- watch` instead of `site watch`. I chose to delete the
executable from my `PATH` and use the latter.

Despite having a solution, I think I'm going to keep working on my own static
site generator.

---

## Room for improvement, if UX me

Despite having a solution to the problem of showing teasers, I still think it's
worth continuing work on my own static site generator. In addition to the fact
that building something new is just fun, I think I can more easily add features
I'm missing if I'm closer to metal. I also want to improve the UX of Hakyll,
especially with regards to having extra subcommands for things like generating
scaffolds for new posts and pages, allowing the browser to refresh on change
instead of having to hard-refresh the page to see changes, and using a more
capable templating language. 

The other benefit of making my own program, is that it'll be yet another thing i
can add to my portfolio. While I can currently point to the bit of styling work
I did on this current iteration, in addition to my ability to (hopefully)
communicate effectively, it'll be nice to be able to talk about the project more
holistically. Here are just *some* of the things I'll be able to speak to, which
I can't currently:

- writing custom build systems
- the benefits of inheritance in a templating language
- writing command line interfaces that are a joy to use
- the importance of a tight feedback loop when working

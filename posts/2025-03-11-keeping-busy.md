---
title: Keeping Busy
---

I've been trying to keep busy after losing my job last week. Aside from
submitting about ten applications a day, I've been doing a *lot* of exploring.

<!--more-->

# Losing my nerve
Having been gainfully employed for several years straight, I've realized that
nearly all of the code that I've written has been proprietary, leaving me unable
to share any of it. The few exceptions have been contributions to open source
projects that we relied on at work. As such, I've been perusing over my
bookshelf and cleaning up my GitHub in preparation to populate it with projects
that are actively being worked on.

## The luxury of choice

One benefit of personal projects is that for the most part, I have the luxury of
time. As such, I don't have to make pragmatic choices. That is, I don't have to
choose a stack that's more convenient for my team, choose a library because it's
familiar or popular, choose a programming language that's ubiquitous, or even
stick to the same field that I have been at work. 

This is liberating because it's given me the opportunity to experiment with
different options rapidly. I don't feel guilt about having to throw away some
code if I eventually determine that a given tool isn't right for the job at
hand. In one particular Haskell project of mine, I've been able to iterate
through a number of libraries:

- routing:
    - [scotty](https://hackage.haskell.org/package/scotty)
    - [servant](https://www.servant.dev/)
- html
    - [lucid](https://chrisdone.com/posts/lucid/)
    - [web-view](https://hackage.haskell.org/package/web-view)
- interactivity:
    - [htmx](https://htmx.org/) 
    - [hyperbole](https://hackage.haskell.org/package/hyperbole)
- database
    - [persistent](https://www.yesodweb.com/book/persistent)
    - [beam](https://haskell-beam.github.io/beam/)
    - [hasql](https://hackage.haskell.org/package/hasql-1.7.0.2)
    - [rel8](https://rel8.readthedocs.io/en/latest/)
    - [postgresql-simple](https://hackage.haskell.org/package/postgresql-simple-0.7.0.0/docs/Database-PostgreSQL-Simple.html)
    
I ended up settling on `Hyperbole` with `postgresql-simple`. I'll likely write
about that project in more detail once it's polished.

## Broadening my horizons
Back when I first started contributing to open source, I did a lot of work on
SDKs like [kivy](https://kivy.org/), and dipped my toes into mobile development
-- namely [Maemo](https://maemo.org/) and Android. I even helped contribute to a
couple of open source video games like 
["Ultimate Smash Friends"](https://tshirtman.github.io/ultimate-smash-friends/),
and wrote a few prototypes for a generic system for playing open source [Trading
Card Games](https://wtactics.org/).

For the better part of my professional career, however, I've been focused on web
development and education. Over this last few weeks, I've been able to get back
to some of my neglected interests. Namely, video games and compilers. For the
next several months, regardless of how the job search goes, my plan is to work
on a few projects to keep myself motivated:
    - write a c compiler
    - finish this website
    - write a game engine

I'll write about each of these separately, but the main goal is to scratch some
itches I've had in those fields, and narrow the gap to some of my more lofty
ideas.

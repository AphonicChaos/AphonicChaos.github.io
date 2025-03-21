---
title: Bookworm
---

The first game that I'd like to create with the game engine that I [wrote about
yesterday][/posts/2025-03-19-patina] is a game I'm calling "Bookworm". The plan
is for it to be [Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)), 
but with a twist

<!--more-->

Specifically, the core mechanic is that instead of a snake eating apples, the
player is a worm eating letters to create words. I took a moment last night to
sketch out what the game might look like:

![Bookworm design notes](../images/screenshots/bookworm-design.jpeg "Bookworm
design notes")

## In Summary
The player starts out like in any snake clone, with a head and no tail. Instead
of seeing apples, the player sees letters they  can eat. As they eat those
letters, a few things can happen:

- If the letter contributes to part of an existing word in the English
dictionary, the player's tail increases in size, and they will see the partial
word dangle behind them as the move around the map.
- If the letter eaten *completes* a known word, the player scores points, loses
  their tail and has to find a new word. The size of their head also increases
depending on the length of the word they found.
- If the letter eaten would prevent the player from spelling a known word, they
  not only lose their tail, but their head shrinks by a size of one.
- If ever the player would shrink to a head size less than one, they lose the
game and their score is recorded.

## Questionable Details
Hopefully, the above all makes sense, but there are a few details one might be
curious about.

<dl>
  <dt>How big is the game board?</dt>
  <dd>
    In my research, I've seen claims of boards for snake games being as small
  as 10x10 and as large as 40x40. For the initial version, I'm going to
    experiment with the smaller board size and increase it later. I may even
    make it configurable by the player!
  </dd>

  <dt>What dictionary will you use?</dt>
  <dd>
      For prototyping, I'll just use the word file that comes with most *nix
    based systems which is located at `/usr/share/dict/words`. Eventually
    though, I'll want something more curated and sophisticated. For instance,
    I'd like to eliminate offensive words, and perhaps work with a more
    feature-rich dictionary which includes parts-of-speech and definitions,
    which I can use to design more game modes.
  </dd>
</dl>

## In Excess
I also thought of a few ideas for different modes of play.

### Stem-ulation
The score is based on how many consecutive words you can create with the same 
word stem. Perhaps the head you retain is based on that stem. For example, If
you spell "cat" first, followed by "catholic", your head might then become 3
units long, spelling "cat".

### Worml
You only score 5-letter words.

### Part-y of Speech 
You are prompted with a part of speech (e.g., noun, adjective, verb, etc.) and
must spell a word that can be used as that part of speech.

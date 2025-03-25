---
title: Camera, No Lights or Action
---

I finished chapter 3 today, in which I implemented a camera
for my game engine, so that `Renderable` objects can be positioned conveniently
using a coordinate system that makes more intuitive system for the game being
built, rather than the native to
[WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection).

<!--more-->

## Intuitive Coordinates

That is, instead of having to position items using floating point numbers that
are ±1, I can specify integer coordinates that represent arbitrary units in the
game world. For example, a standard football field is 360 feet long and 160 ft
wide. I could conveniently place the origin of the field at `[0, 0]` and say
that anything from -180 to -1 represents one team's side of the field, and
anything from 1 to 180 represents the other's.

## Properties
One other thing I did this chapter that deviates from the book is to use
properties rather than getter/setter methods. That is, rather than implementing
something like this:

```typescript
class Renderable {
  _position: number[];

  constructor() {
    this._position = [0, 0];
  }

  getPosition(): number[] {
    return this._position
  }

  setPosition([x, y]) {
    this._position = [x, y];
  }
}
```

Which is then used like this:

```typescript
const renderable = new Renderable();
renderable.setPosition([1, 3]);
console.log(renderable.getPosition()); // => [1, 3]
```

I did the following instead:
```typescript
class Renderable {
  private _position: number[];

  constructor() {
    this._position = [0, 0];
  }

  get position(): number[] {
    return this._position;
  }

  set position([x, y]: number[]) {
    this._position = [x, y]
  }
}
```

Which is instead used like this:

```typescript
const renderable = new Renderable();
renderable.position = [1, 3];
console.log(renderable.position); // => [1, 3]
```

Of course, this particular example is contrived:

- The fact that I immediately set the position after instantiation suggests that
  position would make a good constructor argument.
- I'm not doing any extra computation when setting or getting. 

With such a trivial example where I don't need to do extra work or bounds
checks, etc, I might instead write:

```typescript
class Renderable {
  public position: number[];

  constructor(x: number, y: number) {
    this.position = [x, y];
  }
}
```

Which is of course then used like this:

```typescript
const renderable = new Renderable(1, 3);
console.log(renderable.position); // => [1, 3]
```

## Tuples
As an aside, I found myself sorely missing tuples from languages like [Python](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)
and [Haskell](https://en.wikibooks.org/wiki/Haskell/Lists_and_tuples#Tuples).
That is, one problem with the above `Renderable` snippet is that position has
exactly two elements, but nothing about the type (`number[]`) suggests that.
There are a couple of ways around that, such as making position an object:

```typescript
type Position {
  x: number;
  y: number;
}

class Renderable {
  position: Position

  constructor(position: Position) {
    this.position = position;
  }
}

const renderable = new Position({ x: 1, y: 3 });
```

But that's more verbose. I had to create a type alias (or add an inline type
annotation), and then construct an object at instantiation type. On the other
hand, it's more type-safe than the array version, and I can more clearly access
the individual properties of the position without error:

```typescript
print(rednerable.position.x) // => 1

```

The other problem, though, is that `WebGL2` and `glMatrix` do a lot of
operations on arrays, and so I'd need to unpack those objects before using them
in either of the two APIs. Considering that, I've decided to stick to the array
syntax with helper properties for individual elements. For example, I have `x`
and `y` defined similar to the following:

```typescript 
class Renderable() {
  private _position: number[];

  constructor() {
    this._position = [0, 0];
  }

  get x(): number {
    return this._position[0];
  }

  set x(value: number) {
      this._position[0] = value;
  }

  get y(): number {
    return this._position[1];
  }

  set y(value: number) {
      this._position[1] = value;
  }
}

```

Client code now has the convenience of the object syntax, but internal code can
continue to shuttle around simple arrays:

```typescript
renderable.x = 1;
renderable.y = 3;
```

---
If you'd like to see the resulting code after this chapter, check out the [ch3
tag on GitHub](https://github.com/AphonicChaos/patina-game-engine/tree/ch3). If
you'd like to see the changes since the last chapter, you can [check that out on
GitHub as
well](https://github.com/AphonicChaos/patina-game-engine/compare/ch2...ch3).

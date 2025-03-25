---
title: A Little DX with Method Chaining
draft: true
---

Developer Experience (DX or DevEx) is to engineers what User Experience (UX) is
to users, and it's something I'm very passionate about. It's why I spend so much
time iterating on APIs when designing libraries. I did that a bit yesterday and
decided to improve the UX of the `Renderable` class of my game engine yesterday.

<!--more-->

As of yesterday, you could change the translation, rotation, and scale of an
object in a sequential manner:

```typescript
const blueSquare = new Renderalbe()
blueSquare.position = [20, 60];
blueSquare.rotationRad = 0.2;
blueSquare.scale = [5, 5];
```

While I'd eventually like to make things more declarative -- you describe what a
`Renderable` is, rather than what it does -- for the moment, I wanted to at least
improve the ergonomics. I decided to implement method chaining. So in addition
to setters and getters:

```typescript {startFrom=233}
 get scale(): vec2 {
    return this._transform.scale;
  }

  set scale(values: number[]) {
    this._transform.scale = values;
  }

  get width() {
    return this._transform.width;
  }

  set width(value: number) {
    this._transform.width = value;
  }

  get height() {
    return this._transform.height;
  }

  set height(value: number) {
    this._transform.height = value;
  }

```

I added a chainable method for resizing:

```typescript {startFrom=257}
 resize(width: number, height: number): Renderable {
    this.scale = [width, height];
    return this;
  }
```

I did something similar for rotation and scale, adding `rotateRad` and `move`.
With this, the earlier example becomes:

```typescript
const blueSquare = new Renderalbe().move(20, 60).rotateRad(0.2).resize(5, 5);
```

As an added bonus, this change also addresses the issue I had yesterday when I
was discussing the lack of tuples in TypeScript. That is, with this interface, a
user can't accidentally pass in too many values for the array that the values
are stored in.

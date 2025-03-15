---
title: Polyglot for Life
---

For as long as I can remember, I've been interested in langauges. Not only
spoken language (I once was a Korean linguest in the military), but also
programming languages. 

<!--more-->

## At work
As a full-stack engineer, I often took the liberty of seeing a feature completed
from front to back, especially as I was part of a very small team at my last
job. On any given day, you would have found my writing any of the following:

- python
- javascript
- typescript
- shell
- sql
- html
- css

## At Home
As I dive into my
own personal projects, I've been able to branch out a bit.  As the nature of my
projects change, so to do some of the languages I find myself working in:

- haskell
- sql
- c
- typescript 
- html
- css

Given that I've wanted to document my progress, it was very important to me to
have a blog that supported syntax highlighting for multiple languages. After
adding a few styles to the base template, I am pretty happy with the results. I
added line numbers and some line highlighting myself. The only thing missing is
a copy-to-clipboard button, which I think I'll add later as I write more code.

For now, enjoy several versions of "Hello, World!" that *shouldn't* be run in
production:


### Haskell
```haskell
module Main where

import System.Environment (getArgs)
import Text.Printf (printf)

main :: IO ()
main = do
    (name:_) <- getArgs
    printf "Hello, %s\n" name
```

### C

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    char *name = argv[1];
    printf("Hello, %s\n", name);

    return 0;
}
```

### Python
```python
import sys

if __name__ == '__main__':
    name = sys.argv[1]
    print(f"Hello, {name}")
```

### TypeScript
```typescript
// compile with tsc main.ts --lib ESNext
const name: string = process.argv[2]
console.log(`Hello, ${name}`);
```

---
title: Keeping Busy
---

## Haskell
```haskell
{-# LANGUAGE OverloadedStrings #-}
module Main where

import Text.Printf

main :: IO ()
main = do 
    (name:) <- getArgs
    printf "Hello, %s" name
```

## Python
```python
import sys

if __name__ == '__main__':
    name = sys.argv[0]
    print(f"Hello, {name}!")
```

## C
```c 
#include <stdio.h>

int main(int argc, char *argv[]) {
  printf("Hello, %s!", argv[1]);

  return 0;
}

```

# ts-fns

Self-contained TypeScript functions for pasting into projects.

## Functions

> Functions are strongly-typed; signatures here are simplified.

### [`clamp(n, lower, upper)`](./lib/clamp.ts)

Clamp a number between two values.

<details>
<summary>Example</summary>

```ts
import clamp from '@/lib/clamp'

clamp(5, 0, 10) // 5
clamp(-5, 0, 10) // 0
```

</details>

### [`debounce(fn, wait)`](./lib/debounce.ts)

Debounce a function to be called after `wait` milliseconds of inactivity.

<details>
<summary>Example</summary>

```ts
import debounce from '@/lib/debounce'

const onKeyPress = () => console.log('Key pressed')
const debouncedKeyPress = debounce(onKeyPress, 1000)
```

</details>

### [`deepCopy(obj)`](./lib/deep-copy.ts)

Deep copy an object.

<details>
<summary>Example</summary>

```ts
import deepCopy from '@/lib/deep-copy'

const obj = { a: 1, b: { c: 2 } }
const copy = deepCopy(obj)
console.log(copy) // { a: 1, b: { c: 2 } }
```

</details>

### [`deepEqual(a, b)`](./lib/deep-equal.ts)

Deeply compares two objects for equality.

<details>
<summary>Example</summary>

```ts
import deepEqual from '@/lib/deep-equal'

deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }) // true
```

</details>

### [`enumerate(iterable)`](./lib/enumerate.ts)

Enumerate over an array or iterable and return an array of [index, value] tuples.

<details>
<summary>Example</summary>

```ts
import enumerate from '@/lib/enumerate'

enumerate(['a', 'b', 'c']) // [[0, 'a'], [1, 'b'], [2, 'c']]
```

</details>

### [`enumerateLazy(iterable)`](./lib/enumerate.ts)

Enumerate over an array or iterable lazily and return a generator.

<details>
<summary>Example</summary>

```ts
import { enumerateLazy } from '@/lib/enumerate'

for (const [index, value] of enumerateLazy(['a', 'b', 'c'])) {
  console.log(index, value) // 0 'a', 1 'b', 2 'c'
}
```

</details>

### [`formatDate(date, format)`](./lib/format-date.ts)

Make a date human-readable.

<details>
<summary>Example</summary>

```ts
import formatDate from '@/lib/format-date'

const longDate = formatDate('2024-01-01T00:00:00Z') // 'January 1, 2024'
const shortDate = formatDate('2024-01-01T00:00:00Z', 'short') // '2024-01-01'
```

</details>

### [`lruCache(fn, maxSize)`](./lib/lru-cache.ts)

Cache the results of a function with a least-recently-used eviction policy.

<details>
<summary>Example</summary>

```ts
import lruCache from '@/lib/lru-cache'

const expensiveFn = (n) => n * n
const cachedFn = lruCache(expensiveFn, 2) // cache at most the last 2 results
```

</details>

### [`memoize(fn, maxSize)`](./lib/memoize.ts)

Memoize a function with a first-in-first-out eviction policy.

<details>
<summary>Example</summary>

```ts
import memoize from '@/lib/memoize'

const expensiveFn = (n) => n * n
const memoizedFn = memoize(expensiveFn, 2) // cache at most the first 2 results
```

</details>

### [`omit(obj, keys)`](./lib/omit.ts)

Omit properties from an object.

<details>
<summary>Example</summary>

```ts
import omit from '@/lib/omit'

const obj = { a: 1, b: 2, c: 3 }
omit(obj, 'b') // { a: 1, c: 3 }
omit(obj, ['a', 'c']) // { b: 2 }
```

</details>

### [`pick(obj, keys)`](./lib/pick.ts)

Pick a subset of properties from an object.

<details>
<summary>Example</summary>

```ts
import pick from '@/lib/pick'

const obj = { a: 1, b: 2, c: 3 }
pick(obj, 'a') // { a: 1 }
pick(obj, ['a', 'c']) // { a: 1, c: 3 }
```

</details>

### [`product(a, b)`](./lib/product.ts)

Get the Cartesian product of two arrays.

<details>
<summary>Example</summary>

```ts
import product from '@/lib/product'

product([1, 2], ['a', 'b', 'c']) // [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c']]
```

</details>

### [`random(min, max, random_fn)`](./lib/random.ts)

Generate a random number between `min` and `max`.

<details>
<summary>Example</summary>

```ts
import random from '@/lib/random'

random(0, 10) // 5
```

</details>

### [`randomFromSeed(seed)`](./lib/random.ts)

Create a seeded random number generator for reproducible results.

<details>
<summary>Example</summary>

```ts
import { randomFromSeed } from '@/lib/random'

const random = randomFromSeed(42)
random(0, 10) // 5
```

</details>

### [`range(start, end, step, inclusive)`](./lib/range.ts)

Generate an array of numbers within a given range.

<details>
<summary>Example</summary>

```ts
import range from '@/lib/range'

range(0, 5) // [0, 1, 2, 3, 4]
range(0, 10, 2) // [0, 2, 4, 8]
range(0, -5, -1) // [0, -1, -2, -3, -4]
range(0, 10, 2, true) // [0, 2, 4, 6, 8, 10]
```

</details>

### [`retry(fn, n, wait, retry_fn)`](./lib/retry.ts)

Retry an async function a number of times with a delay between each attempt.

<details>
<summary>Example</summary>

```ts
import retry from '@/lib/retry'

const fetchData = () => Promise.reject(new Error('Failed to fetch'))
const retryFetchData = retry(fetchData, 3, 1000, (n) => console.log(`Retrying ${n} times`))
```

</details>

### [`sample(iterable, n)`](./lib/sample.ts)

Returns a random sample of items from an iterable. Order not preserved.

<details>
<summary>Example</summary>

```ts
import sample from '@/lib/sample'

sample([1, 2, 3, 4, 5], 3) // [3, 1, 5]
```

</details>

### [`slugify(str, keep_underscores)`](./lib/slugify.ts)

Slugify a string. Converts underscores to spaces by default.

<details>
<summary>Example</summary>

```ts
import slugify from '@/lib/slugify'

slugify('Hello, World!') // 'hello-world'
slugify('Hello_World', true) // 'hello_world'
```

</details>

### [`stripIndent(strings, ...values)`](./lib/strip-indent.ts)

Strip outer indentation from a template string. Inspired by [common-tags](https://github.com/zspecza/common-tags).

<details>
<summary>Example</summary>

```ts
import stripIndent from '@/lib/strip-indent'

const str = stripIndent`
  Hello,
  World!
`
console.log(str) // 'Hello,\nWorld!'
```

</details>

### [`stripIndentOneLine(strings, ...values)`](./lib/strip-indent.ts)

Strip outer indentation and newlines from a template string. Inspired by [common-tags](https://github.com/zspecza/common-tags).

<details>
<summary>Example</summary>

```ts
import { stripIndentOneLine } from '@/lib/strip-indent'

const str = stripIndentOneLine`
  Hello,
  World!
`
console.log(str) // 'Hello, World!'
```

</details>

### [`throttle(fn, wait)`](./lib/throttle.ts)

Throttle a function to be called at most once every `wait` milliseconds.

<details>
<summary>Example</summary>

```ts
import throttle from '@/lib/throttle'

const onScroll = () => console.log('Scrolling...')
const throttledScroll = throttle(onScroll, 1000)
```

</details>

### [`title(str)`](./lib/title.ts)

Capitalizes the first letter of each word in a string.

<details>
<summary>Example</summary>

```ts
import title from '@/lib/title'

title('hello, world!') // 'Hello, World!'
```

</details>

### [`truncate(str, n, ellipsis)`](./lib/truncate.ts)

Truncate a string to a certain length and append an ellipsis.

<details>
<summary>Example</summary>

```ts
import truncate from '@/lib/truncate'

truncate('boomerang', 7) // boom...
truncate('boomerang', 7, '!!!') // boom!!!
truncate('hello', 5) // hello
truncate('hello', 4, '') // hell
```

</details>

### [`uid(length, alphabet, random_fn)`](./lib/uid.ts)

Generate a unique identifier.

<details>
<summary>Example</summary>

```ts
import uid from '@/lib/uid'

uid(8) // 'a1b2c3d4'
```

</details>

### [`zip(...iterables)`](./lib/zip.ts)

Zip multiple iterables into a single iterable of tuples.

<details>
<summary>Example</summary>

```ts
import zip from '@/lib/zip'

zip([1, 2, 3], ['a', 'b', 'c']) // [[1, 'a'], [2, 'b'], [3, 'c']]
```

</details>

### [`zipLazy(...iterables)`](./lib/zip.ts)

Zip multiple iterables lazily and returns a generator.

<details>
<summary>Example</summary>

```ts
import { zipLazy } from '@/lib/zip'

for (const [a, b] of zipLazy([1, 2, 3], ['a', 'b', 'c'])) {
  console.log(a, b) // 1 'a', 2 'b', 3 'c'
}
```

</details>

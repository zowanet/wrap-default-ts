# wrap-default

### Install

```bash
npm install @zowanet/wrap-default
```

```bash
yarn add @zowanet/wrap-default
```

```bash
pnpm add @zowanet/wrap-default
```

### Import

```typescript
import wrapDefault from '@zowanet/wrap-default'; // wrapDefaultSync is the default import
import { wrapDefaultAsync, wrapDefaultSync } from '@zowanet/wrap-default';
```

```javascript
const { default: wrapDefault } = await import('@zowanet/wrap-default'); // wrapDefaultSync is the default import
const { wrapDefaultAsync, wrapDefaultSync } = await import('@zowanet/wrap-default');
```

### Usage

TypeScript:

```typescript
const getSmallNumber: (input: number) => number = wrapDefault({
    callback: (input: number): number => {
        if (input > 0.5) {
            throw new Error('Too big');
        } else {
            return input;
        }
    },
    defaultValue: -1,
});

const result1: number = getSmallNumber(0.1);
console.log(result1); // 0.1

const result2: number = getSmallNumber(0.9);
console.log(result2); // -1
```

JavaScript:

```javascript
const getSmallNumber = wrapDefault({
    callback: input => {
        if (input > 0.5) {
            throw new Error('Too big');
        } else {
            return input;
        }
    },
    defaultValue: -1,
});

const result1 = getSmallNumber(0.1);
console.log(result1); // 0.1

const result2 = getSmallNumber(0.9);
console.log(result2); // -1
```

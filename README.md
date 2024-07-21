# @oshx/type-helper
[![Node.js Package](https://github.com/oshx/type-helper/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/oshx/type-helper/actions/workflows/npm-publish.yml)

This package includes the practical type helper for TypeScript users.

## Installation
```shell
$ npm i -D @oshx/type-helper
```

Please add below in `tsconfig.json` file.
```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/@oshx"
    ]
  }
}
```

If your TypeScript doesn't accept that type, then add below.
```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/@oshx/type-helper"
    ]
  }
}
```

## Ingredients

```typescript
type ObjectKey
  // explicit constant object keys
```

```typescript
type ObjectValue
  // explicit constant object values
```

```typescript
type PropsWithClassName
  // extendable interface-like-type with optional property 'className'
```

```typescript
type AnyFunction
  // simply declared any function
```

## Why it comes for?

The inspiration of this package is built for practical uses when often occurred.
The first members of this package are below.

`type ObjectKey`, 
`type ObjectValue`

When you want to use the 'Enum' type in the TypeScript file, you could get a doubt that this built result is efficient.
```typescript
enum EnumA {
  ENUM_1,
  ENUM_2,
}

function inputA(value: EnumA): EnumA {
    return 'ENUM_1' || 0 // EnumA Key or Value types are allowed!
}
```

As you might know, the 'Enum' of TypeScript could be caused below.
```javascript
"use strict";

var EnumA;
(function (EnumA) {
  EnumA[EnumA["ENUM_1"] = 0] = "ENUM_1";
  EnumA[EnumA["ENUM_2"] = 1] = "ENUM_2";
})(EnumA || (EnumA = {}));
```

A key type and a value type are on the same level as the type.

You don't expect it, right?
That's why it is here.

## How to use
The case below is pretended in your TypeScript project.
```typescript
export const ObjectA = {
  KEY_A: 'valueA',
  KEY_B: 'valueB',
} as const;
// Same effects with Enum type!

export type ObjectAKey = ObjectKey<typeof ObjectA>;
export type ObjectAValue = ObjectValue<typeof ObjectA>;

// TypeScript error would occur!
const shouldBeKeyOfA: ObjectAKey = 'KeyA';
const shouldBeValueOfA: ObjectAValue = 'ValueA';

// Passed ✔️
const keyOfA: ObjectAKey = 'KEY_A';
const valueOfA: ObjectAValue = 'valueA';
```

You can distinguish the key and the value as types.

And below example is for the 'React' users with CSS-in-JS styling.

```typescript jsx
// expected a style extendable element!
import { ReactComponentElement, ReactElement } from 'react';

// assign a component to const
interface ConstantFunctionComponentProps extends PropsWithClassName, PropsWithChidren {
  title: string;
}

const ConstantFunctionComponent: ReactComponentElement<
  ConstantFunctionComponentProps
> = ({ title, children, className }) => {
  return (<div className={className}>{title} {children}</div>);
}

// declare a function component
interface FunctionStyleComponentProps {
  title: string;
}
function FunctionStyleComponent({
  title,
  children,
  className,
}: PropsWithClassName<
  PropsWithChildren<FunctionStyleComponentProps>
>): ReactElement {
  return <div className={className}>{title} {children}</div>;
}
```

It should be useful when you make a component with '[Styled Components](https://styled-components.com/)' | '[Emotion Styled](https://emotion.sh/docs/styled)'

The package includes example `JS-Doc`.

This package will promise to you below.

1. This package will not pollute your dependencies.
2. This package will not update with other dependencies.
3. This package will not remove the made types until the next major version.

So easy to use, huh?

## Appendix
### Q&A

`Q` What is this garbage?

`A` Oops! Go your way, please don't use it.

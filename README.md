# @oshx/type-helper
[![Node.js Package](https://github.com/oshx/type-helper/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/oshx/type-helper/actions/workflows/npm-publish.yml)

This package includes the practical type helper for TypeScript users.

## Installation
```shell
$ npm i -D @oshx/type-helper
```

If you're using *TypeScript 4.7+*, no setup needed.

### Older version *< TypeScript 4.7*
However, if you're using an older version of TypeScript, you may need to configure the following.

`tsconfig.json`

```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/@oshx/type-helper",
      "node_modules/@types"
    ]
  }
}
```
### Yarn Berry
For Yarn Berry users, add the package to your TypeScript configuration.

`tsconfig.json`

```json
{
  "compilerOptions": {
    "types": ["@oshx/type-helper"]
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

```typescript
// images like GIF, JPG, JPEG, PNG, BMP, WEBP and SVG as string module
```

```typescript
type ArrayElement<T>
  // array element type
```

## Why it comes for?

The inspiration of this package is created for practical use cases that occur frequently.
The first members of this package are below.

`type ObjectKey`, 
`type ObjectValue`

When you want to use the 'Enum' type in the TypeScript file, you might doubt whether this compiled result is efficient.
```typescript
enum EnumA {
  ENUM_1,
  ENUM_2,
}

function inputA(value: EnumA): EnumA {
    return 'ENUM_1' || 0 // EnumA Key or Value types are allowed!
}
```

As you might know, TypeScript enums compile to the following.
```javascript
"use strict";

var EnumA;
(function (EnumA) {
  EnumA[EnumA["ENUM_1"] = 0] = "ENUM_1";
  EnumA[EnumA["ENUM_2"] = 1] = "ENUM_2";
})(EnumA || (EnumA = {}));
```

Key and value types are at the same type level.

You don't expect it, right?
That's why it is here.

## How to use
The case assumes you're working in a TypeScript project.
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
interface ConstantFunctionComponentProps extends PropsWithClassName, PropsWithChildren {
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

And also you can use your image components like below with '[React](https://react.dev/)'!

```typescript jsx
// import with no errors!
import sampleImage from '~/statics/sample-image.gif';

// just use that image!
function SomeImageElement(): ReactElement {
  return <img src={sampleImage} />;
}

export default SomeImageElement;
```

When you need to use array element as a type, you can use `ArrayElement` type.

```typescript
// some special tuple array
type SpecialArrayType = [number, 'element-name'|'another-element-name', { keyName: string }];

const specialArray: SpecialArrayType = [1, 'element-name', { keyName: 'some-key-value' }];

// It works as expected!
const lastElement: ArrayElement<SpecialArrayType> = { keyName: '' };
```

The package includes `JS-Doc` examples.

This package guarantees the following.

1. This package will not pollute your dependencies.
2. This package will not update with other dependencies.
3. This package will not remove the made types until the next major version.

So ready to use, right?

## Appendix
### Q&A

`Q` What is this garbage?

`A` Oops! Don't mind it.

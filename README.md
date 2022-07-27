# @oshx/type-helper
This is the type helper for TypeScript users.
When you want to use the 'Enum' type in the TypeScript file, you could get a doubt that this built result is efficient.
```typescript
enum EnumA {
  ENUM_1,
  ENUM_2,
}

function inputA(value: EnumA): EnumA {...}
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

You don't expect it, right?
That's why it is here.

## Installation
```shell
$ npm i -D @oshx/type-helper
```

Please add below in `tsconfig.json` file.
```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/@oshx/type-helper"
    ]
  }
}
```

## How to use
The case below is pretended in your TypeScript project.
```typescript
export const ObjectA = {
  KEY_A: 'valueA',
  KEY_B: 'valueB',
} as const;

export type ObjectAKey = ObjectKey<typeof ObjectA>;
export type ObjectAValue = ObjectValue<typeof ObjectA>;

// TypeScript error would occur!
const shouldBeKeyOfA: ObjectAKey = 'KeyA';
const shouldBeValueOfA: ObjectAValue = 'ValueA';

// Passed!
const keyOfA: ObjectAKey = 'KEY_A';
const valueOfA: ObjectAValue = 'valueA';
```

So easy to use, huh?

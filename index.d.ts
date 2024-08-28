/** Expected to a type of key of an object. Cast `as const` object is usually supported autocomplete in some IDEs.
 *
 * @example
 * const ObjectA = {
 *   KEY_A: 'valueA',
 *   KEY_B: 'valueB',
 * } as const;
 *
 * type ObjectKey<typeof ObjectA> = 'KEY_A'|'KEY_B';
 */

declare type ObjectKey<T extends object = any> = keyof T

/** Expected to a type of value of an object. Cast `as const` object is usually supported autocomplete in some IDEs.
 *
 * @example
 * const ObjectA = {
 *   KEY_A: 'valueA',
 *   KEY_B: 'valueB',
 * } as const;
 *
 * type ObjectValue<typeof ObjectA> = 'valueA'|'valueB';
 */
declare type ObjectValue<T extends object = any> = T[ObjectKey<T>]

/** The extendable interface-like-type for CSS-in-JS users.
 *
 * @example
 * interface ReactComponentProps extends PropsWithChildren, PropsWithClassName {
 *   ...
 * }
 */
declare type PropsWithClassName<
  T extends object = object,
  ClassNameType = string
> = {
  className?: ClassNameType
} & T

/** The simple `Any function` declaration.
 *
 * @example
 * function someFunction(callback: AnyFunction): any {
 *   return callback();
 * }
 */
declare type AnyFunction = (...args: any[]) => any

/** Image File Format GIF
 *
 * @example
 * import example from '~/statics/example.gif';
 */
declare module '*.gif' {
  export default string
}

/** Image File Format JPG
 *
 * @example
 * import example from '~/statics/example.jpg';
 */
declare module '*.jpg' {
  export default string
}

/** Image File Format JPEG
 *
 * @example
 * import example from '~/statics/example.jpeg';
 */
declare module '*.jpeg' {
  export default string
}

/** Image File Format PNG
 *
 * @example
 * import example from '~/statics/example.png';
 */
declare module '*.png' {
  export default string
}

/** Image File Format BMP
 *
 * @example
 * import example from '~/statics/example.bmp';
 */
declare module '*.bmp' {
  export default string
}

/** Image File Format WEBP
 *
 * @example
 * import example from '~/statics/example.webp';
 */
declare module '*.webp' {
  export default string
}

/** Image File Format SVG
 *
 * @example
 * import example from '~/statics/example.svg';
 */
declare module '*.svg' {
  export default string
}
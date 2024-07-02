/** Expected to a type of key of an object. Cast `as const` object is usually supported autocomplete in some IDEs.
 *
 * @example
 * const ObjectA = {
 *   KEY_A: 'valueA',
 *   KEY_B: 'valueB',
 * } as const;
 *
 * type ObjectKey<ObjectA> = 'KEY_A'|'KEY_B';
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
 * type ObjectValue<ObjectA> = 'valueA'|'valueB';
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
  ClassNameType = string | undefined
> = {
  className: ClassNameType
} & T

/** The simple `Any function` declaration.
 *
 * @example
 * function someFunction(callback: AnyFunction): any {
 *   return callback();
 * }
 */
declare type AnyFunction = (...args: any[]) => any

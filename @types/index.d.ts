declare type ObjectKey<T extends object = any> = keyof T
declare type ObjectValue<T extends object = any> = T[ObjectKey]

declare interface PropsWithClassName<
  T extends object = object,
  ClassNameType extends string = string | undefined
> extends T {
  className: ClassNameType
}

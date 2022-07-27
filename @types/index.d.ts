declare type ObjectKey<T extends object = any> = keyof T
declare type ObjectValue<T extends object = any> = T[ObjectKey]

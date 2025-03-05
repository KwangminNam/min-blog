export type InferReturnType<T> = T extends (...args: any) => infer R ? R : never;
export type Maybe<T> = T | null | undefined;
export type Exact<T> = { [K in keyof T]: T[K] };
export type EnumValue<T> = T extends { [K in keyof T]: T[K] } ? T[keyof T] : never;
  
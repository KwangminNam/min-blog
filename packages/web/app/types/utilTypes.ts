export type Maybe<T> = T | null | undefined;
export type Exact<T> = { [K in keyof T]: T[K] };

export type InferReturnType<T> = T extends (...args: any) => infer R ? R : never;

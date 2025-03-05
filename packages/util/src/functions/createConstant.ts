export default function createConstant<T extends object>(obj: T) {
  return Object.freeze(obj) as Readonly<T> & {
    readonly [K in keyof T]: T[K];
  };
}
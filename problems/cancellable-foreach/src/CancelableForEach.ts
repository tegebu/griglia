export type Callback<V> = (v: V, cancel: Cancel) => void;
export type Cancel = () => void;

export interface CancelableForEach<V> {
  // TODO
  forEach(cb: Callback<V>): void;
}

# Paginator

表示したいものが多くあるときにすべてを一度に表示せず、何件かに分けて表示することをpaginationといいます。

paginationは一般的には以下のような形をしています。

```
1 ... 4, 5, 6 ... 10
```

これは以下を意味します。

* 1 ... 最小の(一番最初の)ページです
* 10 ... 最大の(一番最後の)ページです
* 5 ... 現在参照しているページです
* 4 ... 現在参照しているページの1ページ前です
* 6 ... 現在参照しているページの1ページ後です

## Implementation

関数の`paginate()`を実装してください。
引数の意味は以下です。

* `min` ... paginationの最小値です
* `max` ... paginationの最大値です
* `current` ... 現在参照しているページです
* `sight` ...  現在参照しているページからこの数値だけページが省略されずに表記されます

## Concepts

* `sight`は`min, max`を超えて数値を表示しません
* 省略時は`...`で表記してください

## Conditions

* `min > max`となる場合を考慮する必要はありません
* `min, max`は整数の場合だけを考慮してください
    * バリデーションは不要です
* `current`が`min`未満、`max`超過をする場合を考慮する必要はありません
    * バリデーションは不要です
* `sight`は0と正の整数を考慮してください

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`Pagenator.spec.ts`があるので参照してください。

```
yarn test
```
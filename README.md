# Example of Material UI

もっとも素の状態

```
<body>
  <div id="root">
    <div class="App">
    </div>
  </div>
</body>
```

- 外側の`body/div#root`は`index.html`に定義
- 内側の`.App`は`App.tsx`で定義
  - 間に`index.tsx`が挟まってるけど、こいつは最終的なDOMにはあらわれない

1. bodyのbackgroundを真っ黒に
   2. ここは、ほんとのバックグラウンド。生のDOMが見える最下層であることが分かりやすいように真っ黒にしとく
1. App全体の背景を1枚のPaperに
   2. ここが、その上にデザインを載せていくシート
   3. マージンは取らず、幅は横幅一杯に。高さは、コンテンツから自然に決まるもので良い
   4. こいつの色も、暗めのものにしておく
1. Cardを使って中身を入れていく

こんな感じにtsxを作り、各styleに`margin: 10px`を与えてみる。

```typescript
    <Card className={style.Base}>
      <Box className={style.FormBase}>
        <TextField className={style.Text} size="small" label="value" />
      </Box>
    </Card>
```

すると、Card, Box, TextFiledの上下のmarginが全部確保される = marginの相殺が起こらない、ように見える

[uiコンポーネントにマージンを付けるな][uiコンポーネントにマージンを付けるな]という説があるらしい。
さらに、そこから[Reactでの余白の扱い方][react余白]などを読む。

- Componentの最上位の要素にはマージンをつけない
- 利用コンポーネントでは、Boxで囲み、マージンを付けたければ、そのBoxに付与する

という方針にすれば、親コンポーネント内でのマージンは親コンポーネントがコントロールしつつ、子コンポーネントでのマージンは、自由に設定する、とできるのでは

うむ・・Boxの下のマージンがPaperの下のマージンと相殺されている・・

- [mui get start][mui get start]
- [mui spacing][mui spacing]

この辺のテキストを読む必要がありそう。

<!-- link -->
[UIコンポーネントにマージンを付けるな]: https://zenn.dev/ryusou/articles/why-margin-component
[React余白]: https://zenn.dev/seya/articles/09545c7503baa4
[mui get start]: https://mui.com/system/getting-started/
[mui spacing]: https://mui.com/system/spacing/

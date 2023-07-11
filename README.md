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

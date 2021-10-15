# Vue.jsのレッスンを始めます。

と、その前に。マークダウン記法によるドキュメント作成にはAtomエディタを使ってます。ありがとうAtom。

### 第一章　Vue.jsってなに？
まあ、とっても便利なHTML―Javascriptインターフェースツールといったらいいのかな。とりあえず知らない人はググってください。

### 早速
まずはVueを使わずに、一番簡単なサンプルプログラムを書いてみましょう。
```
(lsn01_01.html)

<html>

<p><input type="text" id="name" size="10" onkeyup="dspEcho()"></P>

<p id= "echo"></p>

<script>
function dspEcho(){
  document.getElementById('echo').innerText
  =document.getElementById('name').value
}
</script>

</html>
```
このコードは入力した値をエコーするためのものです。
DOMを使って値を参照し、別のDOMに値を書き込んでいますね。

どのキーイベントでどのファンクションが動くかをプログラマーは意識して書く必要がありますね。

では、Vueではどのような書き方になるでしょうか

```
<html>

<div id="app">
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<p><input type="text" v-model="name" size="10" ></P>

<p>{{name}}</p>

</div>

<script>
var app=new Vue({
  el: '#app',
  data:{
    name: '',
  }
})
</script>

</html>
```
どうでしょうか？
DOMの存在が消えてます。イベントを気にしなくてもいいのです。

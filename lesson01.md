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
(lsn01_02.html)

<html>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<div id="app">

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
DOMの存在が消えてます。イベントを気にしなくてもいいのです。最初にVueを引っ張ってくるだけです。

こんなに簡単にできてしまうわけですが、項目どうしで値が変化するものにも対処できるのかと疑問が湧きます。たとえば数量と単価を入力したらその合計を自動で計算する、とかいったものです。次の例に答えがあります。

```
(lsn01_03.html)

<html>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<div id="app">

<p>数量:<input type="text" v-model="suryo" size="10" ></P>
<p>単価:<input type="text" v-model="tanka" size="10" ></P>

<p>金額:{{kingaku}}</p>

</div>

<script>
var app=new Vue({
  el: '#app',
  data:{
    suryo: 0,
    tanka: 0,
  },
  computed: {
    kingaku: function(){
      return( this.suryo * this.tanka )
    }
  }
})
</script>

</html>


```

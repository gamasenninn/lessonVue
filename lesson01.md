# Vue.jsのレッスンを始めます。

と、その前に。マークダウン記法によるドキュメント作成にはAtomエディタを使ってます。ありがとうAtom。

### 第一章　Vue.jsってなに？
まあ、とっても便利なHTML―Javascriptインターフェースツールといったらいいのかな。とりあえず知らない人はググってください。

### 早速
まずはVueを使わずに、一番簡単なサンプルプログラムを書いてみましょう。

```
<html>

<input type="text" id="name" size="10">


</html>
```

<html>
<input type="text" id="name" size="10" >
<input type="button" value="push"  onclick="document.bgColor='red'">
<br/><br/>

<input type="text" id="echo" size="10">
<script>
function echo(){
  alert("ssss");
  //alert(document.getElementById("name"));
}
</script>
</html>

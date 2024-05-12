import{_ as s,c as a,o as n,d as l}from"./app.26d7cd16.js";var p="/article/assets/prototype.9c8f555e.png";const h=JSON.parse('{"title":"javascript","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7C7B\u578B\u548C\u8BED\u6CD5","slug":"\u7C7B\u578B\u548C\u8BED\u6CD5"},{"level":3,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B"},{"level":3,"title":"\u7C7B\u578B\u5224\u65AD","slug":"\u7C7B\u578B\u5224\u65AD"},{"level":2,"title":"\u4F5C\u7528\u57DF\u548C\u95ED\u5305","slug":"\u4F5C\u7528\u57DF\u548C\u95ED\u5305"},{"level":2,"title":"\u539F\u578B\u94FE","slug":"\u539F\u578B\u94FE"}],"relativePath":"frontend/javascript.md","lastUpdated":1715525241000}'),e={name:"frontend/javascript.md"},o=l(`<h1 id="javascript" tabindex="-1">javascript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h1><h2 id="\u7C7B\u578B\u548C\u8BED\u6CD5" tabindex="-1">\u7C7B\u578B\u548C\u8BED\u6CD5 <a class="header-anchor" href="#\u7C7B\u578B\u548C\u8BED\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h3><p>JavaScript \u73B0\u5728\u6709\u516B\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5305\u62EC 7 \u4E2A\u57FA\u7840\u7C7B\u578B\u548C 1 \u4E2A\u5F15\u7528\u7C7B\u578B\u3002</p><p>\u57FA\u7840\u7C7B\u578B\uFF1A</p><ol><li>\u7A7A\u503C\uFF08null\uFF09</li><li>\u672A\u5B9A\u4E49\uFF08undefined\uFF09</li><li>\u5E03\u5C14\u503C\uFF08 boolean\uFF09</li><li>\u6570\u5B57\uFF08number\uFF09</li><li>\u5B57\u7B26\u4E32\uFF08string\uFF09</li><li>\u7B26\u53F7\uFF08symbol\uFF0CES6 \u65B0\u589E\uFF09</li><li>\u5BF9\u8C61\uFF08bigint\uFF0CES11 \u65B0\u589E\uFF09</li></ol><p>\u5F15\u7528\u7C7B\u578B\uFF1A</p><ol><li>\u5BF9\u8C61(object)</li></ol><h3 id="\u7C7B\u578B\u5224\u65AD" tabindex="-1">\u7C7B\u578B\u5224\u65AD <a class="header-anchor" href="#\u7C7B\u578B\u5224\u65AD" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u6211\u4EEC\u53EF\u4EE5\u7528 typeof \u8FD0\u7B97\u7B26\u6765\u67E5\u770B\u503C\u7684\u7C7B\u578B\uFF0C\u5B83\u8FD4\u56DE\u7684\u662F\u7C7B\u578B\u7684\u5B57\u7B26\u4E32\u503C\uFF0C\u503C\u5305\u62EC\u4E0A\u8FF0\u7684\u516B\u79CD\uFF0C\u9664\u4E86 null\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  typeof null === &quot;object&quot;; // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u662F\u5386\u53F2\u9057\u7559\u95EE\u9898\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u7248\u7684 JavaScript \u662F\u7528 32 \u4F4D\u6BD4\u7279\u6765\u5B58\u50A8\u503C\u7684\uFF0C\u4E14\u662F\u901A\u8FC7\u503C\u7684\u7B2C 1 \u4F4D\u6216 3 \u4F4D\u6765\u8BC6\u522B\u7C7B\u578B\u7684\u3002\u800C null \u8868\u793A\u4E3A\u5168 0\uFF0C\u6240\u4EE5\u88AB\u9519\u8BEF\u5730\u5224\u65AD\u4E3A object\u3002</p><ol><li>1\uFF1A\u6574\u578B\uFF08int\uFF09</li><li>000\uFF1A\u5F15\u7528\u7C7B\u578B\uFF08object\uFF09</li><li>010\uFF1A\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B\uFF08double\uFF09</li><li>100\uFF1A\u5B57\u7B26\u4E32\uFF08string\uFF09</li><li>110\uFF1A\u5E03\u5C14\u578B\uFF08boolean\uFF09</li></ol><p><code>JavaScript\u4E2D\u7684\u53D8\u91CF\u662F\u6CA1\u6709\u7C7B\u578B\u7684\uFF0C\u53EA\u6709\u503C\u624D\u6709\u3002--\u300A\u4F60\u4E0D\u77E5\u9053\u7684JavaScript\uFF08\u4E2D\u5377\uFF09\u300B</code></p><p>js \u8FD8\u6709\u5F88\u591A\u5185\u7F6E\u5BF9\u8C61\uFF0C\u5185\u7F6E\u5BF9\u8C61\u662F\u5BF9\u8C61\u7684\u5B50\u7C7B\u578B\uFF0C\u6709 Function,Arguments,Math,Date,RegExp,Error\u3002typeof \u8F93\u51FA\u90FD\u662F object\uFF0C\u9664\u4E86 Function\u3002 function \u867D\u7136\u672C\u8D28\u4E5F\u662F\u5BF9\u8C61\uFF0C\u4F46\u662F\u4E0E\u666E\u901A\u5BF9\u8C61\u76F8\u6BD4\uFF0C\u5185\u90E8\u6709\u4E00\u4E2A[Call]\u65B9\u6CD5\uFF0C\u8868\u793A\u8FD9\u4E2A\u5BF9\u8C61\u662F\u53EF\u4EE5\u8C03\u7528\u7684\uFF0Ctypeof \u64CD\u4F5C\u7B26\u5728\u5224\u65AD object \u7684\u65F6\u5019\uFF0C\u5982\u679C\u5185\u90E8\u6709[[Call]]\u65B9\u6CD5\u5C31\u4F1A\u8FD4\u56DE Function\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7279\u6B8A\u5904\u7406\u3002</p><p>\u5224\u65AD\u5BF9\u8C61\u7684\u5B50\u7C7B\u578B\u53EF\u4EE5\u4F7F\u7528 instanceof\uFF0C\u5185\u90E8\u673A\u5236\u662F\u901A\u8FC7\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E2D\u662F\u4E0D\u662F\u80FD\u627E\u5230\u7C7B\u578B\u7684 prototype\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Car(make, model, year) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.make = make;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.model = model;</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.year = year;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const auto = new Car(&#39;Honda&#39;, &#39;Accord&#39;, 1998);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(auto instanceof Car);</span></span>
<span class="line"><span style="color:#A6ACCD;">// expected output: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(auto instanceof Object);</span></span>
<span class="line"><span style="color:#A6ACCD;">// expected output: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>typeof \u53EA\u80FD\u5224\u65AD\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0Cinstanceof \u53EF\u4EE5\u5224\u65AD\u5BF9\u8C61\u7684\u5B50\u7C7B\u578B\uFF0C\u8981\u66F4\u7CBE\u786E\u7684\u5224\u65AD\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F7F\u7528 Object.prototype.toString.call \u65B9\u6CD5\uFF0C\u8FD9\u65B9\u6CD5\u4F1A\u8FD4\u56DE &quot;[object XXX]&quot; \u7684\u5B57\u7B26\u4E32\u3002</p><p>call \u8C03\u7528\uFF0C\u662F\u56E0\u4E3A\u5F88\u591A\u5BF9\u8C61\u7684 toString \u65B9\u6CD5\u88AB\u91CD\u5199\u4E86\u3002</p><p>\u603B\u7ED3\u7C7B\u578B\u5224\u65AD\uFF1A</p><ol><li>\u5229\u7528 typeof \u5224\u65AD <ul><li>typeof \u53EF\u4EE5\u5224\u65AD\u9664 null \u4EE5\u5916\u7684\u57FA\u7840\u7C7B\u578B\uFF0C\u5F15\u7528\u7C7B\u578B\u9664\u4E86 Function\uFF0C\u5176\u4ED6\u90FD\u8FD4\u56DE &#39;object&#39;</li></ul></li><li>\u5229\u7528 instanceof \u5224\u65AD\u5F15\u7528\u7C7B\u578B <ul><li>\u7C7B\u4F3C\u4E8E [] instanceof Array</li></ul></li><li>\u5229\u7528 toString \u5224\u65AD\u5F15\u7528\u7C7B\u578B <ul><li>\u7C7B\u4F3C\u4E8E Object.prototype.toString.call({}) === &#39;[object Object]&#39;</li></ul></li></ol><h2 id="\u4F5C\u7528\u57DF\u548C\u95ED\u5305" tabindex="-1">\u4F5C\u7528\u57DF\u548C\u95ED\u5305 <a class="header-anchor" href="#\u4F5C\u7528\u57DF\u548C\u95ED\u5305" aria-hidden="true">#</a></h2><p>\u4F5C\u7528\u57DF\u662F\u6839\u636E\u540D\u79F0\u67E5\u627E\u53D8\u91CF\u7684\u4E00\u5957\u89C4\u5219\uFF0C\u4F5C\u7528\u57DF\u5206\u4E3A<code>\u5168\u5C40\u4F5C\u7528\u57DF</code>\u548C<code>\u5C40\u90E8\u4F5C\u7528\u57DF</code>\u3001ES6\u7684<code>\u5757\u7EA7\u4F5C\u7528\u57DF</code></p><p>\u5168\u5C40\u4F5C\u7528\u57DF\uFF1A\u4EFB\u4F55\u5730\u65B9\u90FD\u80FD\u8BBF\u95EE\u5230\u7684\u5C31\u662F\u5168\u5C40\u4F5C\u7528\u57DF</p><ol><li>\u51FD\u6570\u6700\u5916\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\u62E5\u6709\u5168\u5C40\u4F5C\u7528\u57DF</li><li>\u672A\u5B9A\u4E49\u76F4\u63A5\u8D4B\u503C\u7684\u53D8\u91CF\u4F1A\u81EA\u52A8\u58F0\u660E\u4E3A\u62E5\u6709\u5168\u5C40\u4F5C\u7528\u57DF</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b) </span><span style="color:#676E95;font-style:italic;">//1 </span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u6D4F\u89C8\u5668\u4E0Bwindow\u7684\u5C5E\u6027\u62E5\u6709\u5168\u5C40\u4F5C\u7528\u57DF</li></ol><p>\u5C40\u90E8\u4F5C\u7528\u57DF\uFF1A\u5728\u56FA\u5B9A\u7684\u4EE3\u7801\u7247\u6BB5\u5185\u53EF\u8BBF\u95EE\u5230\uFF0C\u4E00\u822C\u662F\u6307\u51FD\u6570\u91CC\u58F0\u660E\u7684\uFF0C\u6240\u4EE5\u5C40\u90E8\u4F5C\u7528\u57DF\u4E5F\u53EB\u51FD\u6570\u4F5C\u7528\u57DF\u3002</p><p>\u5C40\u90E8\u53D8\u91CF\u53EA\u4F5C\u7528\u4E8E\u51FD\u6570\u5185\uFF0C\u5728\u51FD\u6570\u5F00\u59CB\u6267\u884C\u65F6\u521B\u5EFA\uFF0C\u51FD\u6570\u6267\u884C\u5B8C\u540E\u5C40\u90E8\u53D8\u91CF\u4F1A\u81EA\u52A8\u9500\u6BC1\u3002</p><p>\u5757\u7EA7\u4F5C\u7528\u57DF\uFF1A\u53EA\u5728\u53D8\u91CF\u58F0\u660E\u7684\u4EE3\u7801\u5757\u5185\u6709\u6548\uFF08let\u3001const\uFF09</p><p>\u4F5C\u7528\u57DF\u94FE\uFF1A\u6267\u884C\u51FD\u6570\u65F6\u5148\u4ECE\u51FD\u6570\u5185\u90E8\u5BFB\u627E\u5C40\u90E8\u53D8\u91CF\uFF0C \u6CA1\u627E\u5230\u5C31\u5F80\u4E0A\u4E2A\u4F5C\u7528\u57DF\u5BFB\u627E\uFF0C\u76F4\u5230\u5168\u5C40\u4F5C\u7528\u57DF\u4E3A\u6B62\uFF0C\u8FD9\u4E2A\u4F5C\u7528\u57DF\u4E4B\u95F4\u884C\u7A0B\u7684\u5F15\u7528\u5173\u7CFB\u5C31\u662F\u4F5C\u7528\u57DF\u94FE</p><p>\u95ED\u5305\uFF1A\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u65B0\u7684\u51FD\u6570\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\uFF0C\u8FD9\u65F6\u5019\u8FD9\u4E2A\u53D8\u91CF\u4F1A\u5B58\u5728\u5806\u91CC\uFF0C\u5728\u8FD9\u4E2A\u51FD\u6570\u6267\u884C\u5B8C\u540E\u4E0D\u4F1A\u88AB\u9500\u6BC1\u3002\u8FD9\u5C31\u5F62\u6210\u4E86\u95ED\u5305\u3002 \u95ED\u5305\u7684\u76EE\u7684\u662F\u5C06\u53D8\u91CF\u653E\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\uFF0C\u4FDD\u7559\u8FD9\u4E2A\u5F15\u7528\uFF0C\u5B9E\u73B0\u53D8\u91CF\u7684\u9690\u85CF\u3002</p><p>\u4E0B\u9762\u662F\u7B80\u5355\u7684\u4F8B\u5B50\uFF0Cfoo\u6267\u884C\u8FD4\u56DE\u7684\u51FD\u6570\u4FDD\u7559\u4E86foo\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u5F62\u6210\u95ED\u5305</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">   return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      a++</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var boo = foo()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u95ED\u5305\u7F3A\u70B9\u548C\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5E26\u6709\u95ED\u5305\u7684\u51FD\u6570\u53EA\u8981\u5B58\u5728\u5C31\u4F1A\u4E00\u76F4\u4FDD\u7559\u9690\u85CF\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u6839\u636E<code>\u5783\u573E\u56DE\u6536</code>\u7684\u673A\u5236\uFF0C\u88AB\u4E00\u4E2A\u4F5C\u7528\u57DF\u5F15\u7528\u7684\u53D8\u91CF\u4E0D\u4F1A\u88AB\u56DE\u6536\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u9690\u85CF\u7684\u5C40\u90E8\u53D8\u91CF\u5C06\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u5C31\u9020\u6210\u4E86\u5185\u5B58\u6CC4\u6F0F\u3002\u89E3\u51B3\u65B9\u6CD5\u5C31\u662F\u9500\u6BC1\u8FD9\u4E2A\u4F5C\u7528\u57DF\uFF0C\u624B\u52A8\u5C06\u8FD9\u4E2A\u51FD\u6570\u5BF9\u95ED\u5305\u53D8\u91CF\u7684\u5F15\u7528\u8FDB\u884C\u91CA\u653E\u3002\u63A5\u4E0A\u9762\u4EE3\u7801\u7684\u4F8B\u5B50\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">boo = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u539F\u578B\u94FE" tabindex="-1">\u539F\u578B\u94FE <a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709 prototype \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u5C31\u662F\u539F\u578B\uFF0C\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u521B\u5EFA\u7684\u65F6\u5019\u53EA\u6709constructor\u4E00\u4E2A\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u6784\u9020\u51FD\u6570\u672C\u8EAB\u3002</p><p>\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709<code>__proto__</code>\u5C5E\u6027\uFF0C\u6307\u5411\u4E86\u521B\u5EFA\u8BE5\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF0C\u4E5F\u5C31\u662F\u51FD\u6570\u7684prototype\u3002\u8FD9\u4E2A\u5C5E\u6027\u6307\u5411\u4E86 [[prototype]]\uFF0C\u4F46\u662F [[prototype]] \u662F\u5185\u90E8\u5C5E\u6027\uFF0C\u6211\u4EEC\u5E76\u4E0D\u80FD\u8BBF\u95EE\u5230\uFF0C\u6240\u4EE5\u4F7F\u7528 <code>__proto__</code> \u6765\u8BBF\u95EE\u3002</p><p>\u4E3A\u4E86\u5B9E\u73B0\u7EE7\u627F\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7 <code>__proto__</code> \u5C06\u5BF9\u8C61\u548C\u539F\u578B\u8054\u7CFB\u8D77\u6765\u7EC4\u6210\u539F\u578B\u94FE\uFF0C\u5F97\u4EE5\u8BA9\u5BF9\u8C61\u53EF\u4EE5\u8BBF\u95EE\u5230\u4E0D\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5C5E\u6027\u3002</p><p><img src="`+p+'" alt="\u56FE\u7247"></p>',41),t=[o];function c(i,r,d,A,C,y){return n(),a("div",null,t)}var D=s(e,[["render",c]]);export{h as __pageData,D as default};
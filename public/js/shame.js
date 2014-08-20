---
---
$(function(){
  // I'M SO SORRY I KNOW THIS IS BAD
  // I AM LITERALLY JUST TURNING HTML BACK INTO MARKDOWN
  // SO REVEAL CAN PARSE IT AND TURN IT BACK INTO HTML
  // WHICH IS JUST TERRIBLE BUT YOU KNOW
  // SOMETIMES YOU GOTTA JUST GO WITH IT
  var el = $('script[type="text/template"]');
  var html = el.html();
  var mdstr = md(html);
  el.html(mdstr);

  Reveal.initialize({
    transition: 'none',
    dependencies: [
      // Interpret Markdown in <section> elements
      { src: '{{ site.baseurl }}/public/js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '{{ site.baseurl }}/public/js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

      // Syntax highlight for <code> elements
      { src: '{{ site.baseurl }}/public/js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
  });
});

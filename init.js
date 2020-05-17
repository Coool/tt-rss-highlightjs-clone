require(['dojo/_base/kernel', 'dojo/ready', 'dojo/request/script'], function  (dojo, ready, script) {
	ready(function() {
		script.get("plugins.local/highlightjs/highlight.pack.js",
				{checkString: 'hljs'}).then(() => {

			console.log('hljs loaded', hljs)

			PluginHost.register(PluginHost.HOOK_ARTICLE_RENDERED_CDM, function(row) {
				row.querySelectorAll("code").forEach((elem) => {
					console.log('about to highlight', elem);

					hljs.highlightBlock(elem);
				});
			});

			PluginHost.register(PluginHost.HOOK_ARTICLE_RENDERED, function(row) {
				row.querySelectorAll("code").forEach((elem) => {
					console.log('about to highlight', elem);

					hljs.highlightBlock(elem);
				});
			});
		});
	});
});

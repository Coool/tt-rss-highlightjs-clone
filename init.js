/* global require, PluginHost, hljs */

require(['dojo/_base/kernel', 'dojo/ready', 'dojo/request/script'], function  (dojo, ready, script) {
	ready(function() {
		function highlight_all(row, hljs) {
			row.querySelectorAll("code").forEach((elem) => {
				hljs.highlightBlock(elem);
				if (!elem.closest('pre')) elem.setStyle({display: 'inline', padding: 0});
			});
		}

		script.get("plugins.local/highlightjs/highlight.pack.js",
				{checkString: 'hljs'}).then(() => {

			PluginHost.register(PluginHost.HOOK_ARTICLE_RENDERED_CDM, function(row) {
				highlight_all(row, hljs);
			});

			PluginHost.register(PluginHost.HOOK_ARTICLE_RENDERED, function(row) {
				highlight_all(row, hljs);
			});
		});
	});
});

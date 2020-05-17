<?php
class HighlightJS extends Plugin {
	private $host;

	function about() {
		return array(1.0,
			"Hightlights code blocks in articles using HighlightJS",
			"fox");
	}

	function init($host) {
		$this->host = $host;
	}

	function get_css() {
		return file_get_contents(__DIR__ . "/hljs-theme.css");
	}

	function get_js() {
		return file_get_contents(__DIR__ . "/init.js");
	}

	function api_version() {
		return 2;
	}
}

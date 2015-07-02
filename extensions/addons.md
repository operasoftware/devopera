---
title: opr.addons
support: 20
license: cc-by-3.0
---

## Contents

1. [Methods](#methods)
	1. [installExtension](#method-installextension)

## Methods {#methods}

### installExtension {#installExtension}

	opr.addons.installExtension(
		string id,
		function success_callback,
		function error_callback
	)

Retrieves details about the specified Stash item.

### Parameters

	id (String)

The extension ID of the extension being called.

	success_callback (function)

Function called when the installation finishes successfully. It takes no arguments.

	error_callback (function)

Function called when the installation fails. It takes a single string argument, the error message.

### Success Callback

The _success_callback_ parameter should specify a function that looks like this:

	function() { … };

### Error Callback

The _error_callback_ parameter should specify a function that looks like this:

	function(String errorMessage) { … };

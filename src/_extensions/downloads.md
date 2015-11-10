---
title: Working With Downloads
authors:
- shwetank-dixit
intro: 'Get your extension to initiate, close, search or monitor downloads.'
license: cc-by-3.0
---

## Introduction

With the [Downloads API](https://developer.chrome.com/extensions/downloads), you have the ability to initiate, close, search and monitor downloads. It also gives your extension the ability to open the downloads folder or even the downloaded file itself.

## Manifest specifications

You need to list `downloads` under permissions field in the manifest to enable the extension to work with the downloads API, like so :

	{
		"permissions": ["downloads"]
	}

## The DownloadItem type

Any downloaded item will be of the [`DownloadItem`](https://developer.chrome.com/extensions/downloads#type-DownloadItem) type. This object will contain all pertinent information about the downloaded item such as its filename, URL, start time, the total bytes downloaded until now, and other information such as estimated time when the download will end, its MIME type, whether the download can be resumed or not, etc. See the documentation for detailed information on the `DownloadItem` type.

## Starting a new download

You can start a download by using the [`download()`](https://developer.chrome.com/extensions/downloads#method-download) function. For example:

	chrome.downloads.download({
		url: 'http://example.org/example.zip'
	});

Of course, you can introduce more arguments to specify how exactly should the download operate, for example if you want the _Save As_ download to appear then you can list it in the options. Also, you can have a callback function, like so:

	chrome.downloads.download({
		url: 'http://example.org/example.zip',
		filename: 'download.zip',
		saveAs: true
	}, function(downloadId) {
		// If 'downloadId' is undefined, then there is an error
		// so making sure it is not so before proceeding.
		if (typeof downloadId !== 'undefined') {
			console.log('Download initiated, ID is: ' + downloadId);
		}
	});

## Searching existing downloads

You can search existing downloads using the [`search()`](https://developer.chrome.com/extensions/downloads#method-search) function. You can list various options to specify your search criteria. For example, to list the last 5 downloads descending order (that is, most recent at the top), we could write the following:

	chrome.downloads.search({
		orderBy: ['-startTime'],
		limit: 5
	}, function (downloadedItem) {
		for (var i =0; i < downloadedItem.length; i++){
			console.log('URL is: ' + downloadedItem[i].filename);
		}
	});

You can use other criteria like the URL, filename, file size etc. One that is particularly useful is searching by the ID of the downloaded item, as the ID of the item is needed for executing other functions like [pausing](https://developer.chrome.com/extensions/downloads#method-pause), [cancelling](https://developer.chrome.com/extensions/downloads#method-cancel) or [resuming](https://developer.chrome.com/extensions/downloads#method-resume) downloads. You can also [open the folder](https://developer.chrome.com/extensions/downloads#method-show) or [open the actual downloaded file](https://developer.chrome.com/extensions/downloads#method-open) provided you know the download ID.

## Working with events

You also have access to certain events that can be very helpful. In particular, [`onCreated`](https://developer.chrome.com/extensions/downloads#event-onCreate) and [`onChanged`](https://developer.chrome.com/extensions/downloads#event-onChanged). You can use the `onCreated` event in the background script like so:

	chrome.downloads.onCreated.addListener(function (e) {
		console.log(
			'New Download created. ID: ' + e.id + ', ' +
			'URL: ' + e.url + ', ' +
			'file size: ' + e.fileSize
		);
	});

You can monitor downloads and work on them whenever their state changes using the `onChanged` event. For example, to detect whenever a download completes, you can write the following in the background script:

	chrome.downloads.onChanged.addListener(function (e) {
		if (typeof e.state !== 'undefined') {
			if (e.state.current === 'complete') {
				console.log('Download ID ' + e.id + ' has completed');
			}
		}
	});

[Download our sample extension](/extensions/extension-samples/downloads-api.nex) which makes use of the API methods and events to show you the last five downloaded files as well as information about new downloads.

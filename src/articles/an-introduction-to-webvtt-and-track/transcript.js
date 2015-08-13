
function loadTranscript(lang) {
	loadTranscriptFile('elephants-dream-subtitles-' + lang + '.vtt');
}

function loadTranscriptFile(webvttFile) {
	var reqTrans = new XMLHttpRequest();
	reqTrans.open('GET', webvttFile);
	reqTrans.onreadystatechange = function() {
		if (reqTrans.readyState == 4 && (reqTrans.status == 200 || reqTrans.status == 0)) {
			var pattern = /^([0-9]+)$/;
			var patternTimecode = /^([0-9]{2}:[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)$/;
			
			var content = reqTrans.responseText;
			var lines = content.split(/\r?\n/);
			var transcript = '';
			for (i = 0; i < lines.length; i++) {
				if (identifier = pattern.exec(lines[i])) {
					i++;
					var timecode = patternTimecode.exec(lines[i]);
					if (timecode && i < lines.length) {
						i++;
						var text = lines[i];
						i++;
						while (lines[i] != '' && i < lines.length) {
							text = text + '\n' + lines[i];
							i++;
						}
						var transText = '';
						var voices = getVoices(text);
						if (voices.length > 0) {
							for (var j = 0; j < voices.length; j++) {
								transText += voices[j].voice + ': ' + removeHTML(voices[j].text) + '<br />';
							}
						}
						else transText = removeHTML(text) + '<br />';
						transcript += transText;
					}
	    		}
			}
			var oTrans = document.getElementById('transcript');
			oTrans.innerHTML = transcript;
		}
	};
	reqTrans.send(null);
}

function getVoices(speech) {
	var voices = new Array();
	var pos = speech.indexOf('<v');
	while (pos != -1) {
		endVoice = speech.indexOf('>');
		var voice = speech.substring(pos + 2, endVoice).trim();
		var endSpeech = speech.indexOf('</v>');
		var text = speech.substring(endVoice + 1, endSpeech);
		voices.push({
			'voice': voice,
			'text': text
		});
		speech = speech.substring(endSpeech + 4);
		pos = speech.indexOf('<v');
	}
	return voices;
}

function removeHTML(text) {
	var div = document.createElement('div');
	div.innerHTML = text;
	return div.textContent || div.innerText || '';
}
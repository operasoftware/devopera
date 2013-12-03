(function(){
	var flipcards = document.getElementById('flipcards');
	flipcards.addEventListener('submit', function(e){
		e.preventDefault();
		var deck = document.getElementById('deck');
		deck.classList.toggle('flipped');
	}, false);
})();
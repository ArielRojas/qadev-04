/**
 *
 * @param word
 * @returns {string}
 */
var getCharacternotRepeat = function(word){
	var character = word[0];
	console.log('char: ' + character);
	console.log(word.size);
	var i = 0;
	while(i< word.length){ 
		console.log('char: ' + character);
		for(var j=i+1; j< word.length; j++){
			if(word[i] == word[j]){
				character = word[i+1];
				i++;
				console.log(i);
			}
			else{
				character = word[i];
			}
		}
		i++;
	}
	return 'Expected output: ' + character;
};
var number = 5;
// in line comment
/*
multi line comment
*/

// it is recommended to put  
// semi colon at the end of each line

function wordBlanks(myNoun , myAdjective, myVerb, myAdverb) {
	var res = "";
	res += "The " + myAdjective + " " + myNoun + " " + myVerb +
		" to the store " + myAdverb
	return res;
}

console.log(wordBlanks("dog" , "biggg" , "ran" , "quickly"))

var arr = ["a" , "b" , "c"]
elem = arr.pop();
for (i = 0 ; i < arr.length ; i++) {
	console.log(arr[i])
}
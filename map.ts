let frequency = {};
for (let letter of 'mississippi') {
	if (frequency[letter]) {
		frequency[letter]++;
	} else {
		frequency[letter] = 1;
	}
}

console.log(frequency);

const mymap = new Map();
for (let l of 'mississippi') {
	mymap.set(l, (mymap.get(l) ?? 0) + 1);
}
console.log(mymap);

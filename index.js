function shuffle() {
	let parent = document.getElementById("columnParent");
	let divs = parent.children;
	let frag = document.createDocumentFragment();
	while (divs.length) {
		frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
	}
	parent.appendChild(frag);
}

function sort() {
	let parent = document.getElementById("columnParent");
	let divs = parent.children;
	let frag = document.createDocumentFragment();
	let i = 0;
	while (divs.length) {
		for (let j = 0; j < divs.length; j++) {
			if (parseInt(divs[j].id) === i) {
				frag.appendChild(divs[j]);
			}
		}
		i++;
	}
	parent.appendChild(frag);
}
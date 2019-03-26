let toDo = [];
function add() {
	let item = document.querySelector('#input-field').value;
	document.querySelector('#input-field').value = '';
	toDo.unshift(item);
	clearList();
	addEntry();
}
function addEntry() {
	for (i in toDo) {
		var iDiv = document.createElement('div');
		iDiv.className = 'card m-3 pb-5 pt-2 col-3';
		iDiv.innerHTML = toDo[i] + '<button class="X" onclick="remove(' + i + ')">X</button>';
		document.querySelector('#entries').appendChild(iDiv);
	}
}
function remove(itemNumber) {
	toDo.splice(itemNumber, 1);
	clearList();
	addEntry();
}

function clearList() {
	document.querySelector('#entries').innerHTML = '';
}

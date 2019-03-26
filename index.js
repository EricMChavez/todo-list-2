let toDo = [];
function add() {
	let item = document.querySelector('#input-field').value;
	toDo.push(item);
	console.log(toDo);
	clearList();
	addEntry();
}
function addEntry() {
	for (i in toDo) {
		var iDiv = document.createElement('div');
		iDiv.className = 'd-block';
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

let toDo = [];
let completed = [];
function add() {
	let task = document.querySelector('#input-field').value;
	document.querySelector('#input-field').value = '';
	toDo.unshift(task);
	clearList();
	readList();
}
function readList() {
	for (i in toDo) {
		var iDiv = document.createElement('div');
		iDiv.className = 'card m-3 pb-5 pt-2 col-3';
		iDiv.id = 'card' + i;
		iDiv.innerHTML =
			toDo[i] +
			'<button class="X" onclick="remove(' +
			i +
			')">X</button>' +
			'<button class="complete" onclick="complete(' +
			i +
			')">✓</button>';
		document.querySelector('#entries').appendChild(iDiv);
	}
	for (i in completed) {
		var xDiv = document.createElement('div');
		xDiv.className = 'card bg-success m-3 pb-5 pt-2 col-3';
		xDiv.id = 'card' + i;
		xDiv.innerHTML = completed[i] + '<button class="X" onclick="removeCompleted(' + i + ')">X</button>';
		document.querySelector('#completed').appendChild(xDiv);
	}
}
function complete(taskNumber) {
	completed.unshift(toDo[taskNumber]);
	toDo.splice(taskNumber, 1);
	clearList();
	readList();
}
function remove(taskNumber) {
	toDo.splice(taskNumber, 1);
	clearList();
	readList();
}
function removeCompleted(taskNumber) {
	completed.splice(taskNumber, 1);
	clearList();
	readList();
}

function clearList() {
	document.querySelector('#entries').innerHTML = '';
	document.querySelector('#completed').innerHTML = '';
}

let toDo = [];
let completed = [];
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
}
function complete(taskNumber) {
	var completeditem = document.getElementById('card' + taskNumber);
	completeditem.className = 'card m-3 bg-success pb-5 pt-2 col-3';
	completeditem.innerHTML = toDo[taskNumber];
	document.querySelector('#completed').appendChild(completeditem);
	remove(taskNumber);
}
function remove(taskNumber) {
	toDo.splice(taskNumber, 1);
	clearList();
	addEntry();
}
function removeCompleted(taskNumber) {
	completed.splice(taskNumber, 1);
	clearList();
	addEntry();
}

function clearList() {
	document.querySelector('#entries').innerHTML = '';
}

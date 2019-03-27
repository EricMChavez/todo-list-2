let toDo = [];
let completed = [];

function add() {
	let task = document.querySelector('#input-field').value;
	if (task != '') {
		document.querySelector('#input-field').value = '';
		toDo.push(task);
		clearToDo();
		readToDo(true);
	}
}
function readToDo(newItem) {
	for (i in toDo) {
		if (i == toDo.length - 1 && newItem == true) {
			var iDiv = document.createElement('div');
			iDiv.className = 'card text-center animated bounceInRight rounded-top m-3 pb-5 pt-1 col-2';
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
		} else {
			var iDiv = document.createElement('div');
			iDiv.className = 'card text-center rounded-top m-3 pb-5 pt-1 col-2';
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
}
function readCompleted(newItem) {
	for (i in completed) {
		if (i == completed.length - 1 && newItem == true) {
			var xDiv = document.createElement('div');
			xDiv.className = 'card bg-success text-center animated bounceInRight border-warning m-3 pb-5 pt-2 col-2';
			xDiv.id = 'card' + i;
			xDiv.innerHTML =
				completed[i] + '<button class="completedX" onclick="removeCompleted(' + i + ')">X</button>';
			document.querySelector('#completed').appendChild(xDiv);
		} else {
			var xDiv = document.createElement('div');
			xDiv.className = 'card bg-success text-center border-warning m-3 pb-5 pt-2 col-2';
			xDiv.id = 'card' + i;
			xDiv.innerHTML =
				completed[i] + '<button class="completedX" onclick="removeCompleted(' + i + ')">X</button>';
			document.querySelector('#completed').appendChild(xDiv);
		}
	}
}
function complete(taskNumber) {
	completed.push(toDo[taskNumber]);
	toDo.splice(taskNumber, 1);
	clearCompleted();
	clearToDo();
	readToDo();
	readCompleted(true);
}
function remove(taskNumber) {
	toDo.splice(taskNumber, 1);
	clearToDo();
	clearToDo();
	readToDo();
}
function removeCompleted(taskNumber) {
	completed.splice(taskNumber, 1);
	clearCompleted();
	readCompleted();
}

function clearToDo() {
	document.querySelector('#entries').innerHTML = '';
}
function clearCompleted() {
	document.querySelector('#completed').innerHTML = '';
}
var input = document.getElementById('input-field');
input.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById('btn').click();
	}
});

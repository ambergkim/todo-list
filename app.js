"use strict";

var toDoList = document.getElementById('toDoList');
var toDoForm = document.getElementById('toDoForm');

function addToDo(event) {
  event.preventDefault();

  var newToDo = event.target.newToDo.value;
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var text = document.createTextNode(newToDo);
  td.appendChild(text);
  tr.appendChild(td);
  var buttonTd = document.createElement('td');
  var button = document.createElement('button');
  var buttonText = document.createTextNode('⨉');
  button.appendChild(buttonText);
  buttonTd.appendChild(button);
  tr.appendChild(buttonTd);
  toDoList.appendChild(tr);
}

toDoForm.addEventListener('submit', addToDo);

function deleteToDo(event){
  event.preventDefault();
  var target = event.target;
  console.log('event target ' + target);
  var td = target.parentNode;
  console.log('target td ' + td);
  var tr = td.parentNode;
  console.log('target tr ' + tr);
  var rowIndex = tr.rowIndex;
  console.log('row index ' + rowIndex);
  var table = tr.parentNode;
  table.deleteRow(rowIndex);
}

toDoList.addEventListener('click', deleteToDo);

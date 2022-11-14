var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    resetForm();
  }
}
function updateSubmit() {
  if (validateEditMakanan()) {
    var formData = readFormSubmitData();
    updateRecord(formData);
    resetFormEdit();
  }
}
function readFormData() {
  var formData = {};
  formData["newMakanan"] = document.getElementById("newMakanan").value;
  return formData;
}

function readFormSubmitData() {
  var formData = {};
  formData["editMakanan"] = document.getElementById("editMakanan").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("listMakanan").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = "1";
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.newMakanan;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
  document.getElementById("newMakanan").value = "";
  selectedRow = null;
}

function resetFormEdit() {
  document.getElementById("editMakanan").value = "";
  selectedRow = null;
}

function onEdit(td) {
  var modal = document.getElementById("myModal");


  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };


  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  selectedRow = td.parentElement.parentElement;
  document.getElementById("editMakanan").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[1].innerHTML = formData.editMakanan;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("listMakanan").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("newMakanan").value == "") {
    isValid = false;
    alert("Please insert a name");
  } else {
    isValid = true;
  }
  return isValid;
}

function validateEditMakanan() {
  isValid = true;
  if (document.getElementById("editMakanan").value == "") {
    isValid = false;
    alert("Please insert a name");
  } else {
    isValid = true;
  }
  return isValid;
}

function random() {
  var x = Math.floor((Math.random() * i) + 1);
  document.getElementById("demo").innerHTML = x;
}
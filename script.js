var list = [];
var tabel = document.getElementById('makanan');
window.onload = FetchAll();

function fetchJson(){
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if(!localStorage.getItem("list_makanan_localstorage") == true){
        localStorage.setItem("list_makanan_localstorage", xhttp.responseText);
        FetchAll();
      }
    }
  };

  xhttp.open("GET", "list_makanan.json", true);
  xhttp.send();
}

function addJson(){
let listOfFoods = [];
for(let i= 0; i < list.length; i++){
  listOfFoods[i] = {"food" : list[i]};
}
let listMakananMauDikirim = []
listMakananMauDikirim = {listOfFoods : listOfFoods};

let listMakananLocalStorage = JSON.stringify(listMakananMauDikirim, null, 2);
localStorage.setItem("list_makanan_localstorage", listMakananLocalStorage);
}

function Count() {
    var jumlah = document.getElementById('counter');
    var name = 'food';

    if (list.length) {
        if (list.length > 1) {
            name = 'foods';
        }
        jumlah.innerHTML = list.length + ' ' + name ;
    } else {
        jumlah.innerHTML = 'No ' + name;
    }
}

function FetchAll() {
    let listMakananLocalStorage = localStorage.getItem("list_makanan_localstorage");
        let listMakanan = JSON.parse(listMakananLocalStorage);
        let foods = listMakanan.listOfFoods;
        for (let i = 0; i < foods.length; i++) {
            list[i] = foods[i].food;
        }
    var data = '';
    fetchJson();
    if (list.length > 0) {
        for (i = 0; i < list.length; i++) {
            data += '<tr>';
            data += '<td>' + (i+1) + '</td>';
            data += '<td>' + list[i] + '</td>';
            data += '<td><button class="button button1" onclick="Edit(' + i + ')">Edit</button> <button class="button button1" onclick="Delete(' + i + ')">Delete</button></td>';
            data += '</tr>';

        }
    }
    Count(list.length);
    tabel.innerHTML = data;
}

function Add() {
    el = document.getElementById('newMakanan');
    var makanan = el.value;

    if (makanan) {
        list.push(makanan.trim());
        el.value = '';
        addJson();
        FetchAll();
    }
    alert("Makanan Berhasil Ditambahkan");
}

function Edit(item) {
    var el = document.getElementById('editMakanan');
    el.value = list[item];
    var modal = document.getElementById('spoiler');
    self = list;

    var span = document.getElementById("close");
    modal.style.display = 'block'

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    };
  

    document.getElementById('saveEdit').onsubmit = function() {
        var makanan = el.value;

        if (makanan) {
            self.splice(item, 1, makanan.trim());
            addJson();
            self = FetchAll();
            CloseInput();
            alert("Makanan Berhasil Diubah");
        }
    }
  
}

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}

function Delete (item){
    if (confirm("Are you sure to delete this record ?")){
        list.splice(item, 1);
        addJson();
        FetchAll();
    }
}

FetchAll();

function random(makanan) {
  var i = makanan.length;
  if(i>=3){
    var x = doRandom(i);
    var y = doRandom(i);
    while (y==x){
      y = doRandom(i);
    }
    var z = doRandom(i);
    while (z==y || z==x){
      z = doRandom(i);
    }
  } else{
    var x = doRandom(i);
    var y = doRandom(i);
    var z = doRandom(i);
  }

  document.getElementById("ubah1").innerHTML = makanan[x];
  document.getElementById("ubah2").innerHTML = makanan[y];
  document.getElementById("ubah3").innerHTML = makanan[z];
}

function doRandom(i){
  let nilai = (Math.floor((Math.random() * i) + 0));
  return nilai;
}
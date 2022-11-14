var namaMakanan = [
    "Ayam Goreng", 
    "Nasi campur", 
    "Roti Bakar"
]

fetch("makanan.json")
  .then(response => response.json())
  .then(data => console.log(data));

showData(namaMakanan)

function showData(data){
    var table = document.getElementById('tabelMenu')

    for (let i = 0; i < data.length; i++){
        var edit = "<button onclick='editData("+i+")'>Ubah</button>";
        var hapus = "<button onclick='hapusData("+i+")'>Delete</button>";
        var row = `<tr>
                        <td>${i+1}</td>
                        <td>${data[i]}</td>
                        <td>${edit}  ${hapus}</td>
                    </tr>`
        table.innerHTML += row;
    }
}

function editData(id){
    var edit = prompt("Masukan Nama Terbaru", namaMakanan[id].nama);
    namaMakanan[id] = edit;
    showData(namaMakanan);
    alert("Data Berhasil Diubah")
}

function hapusData(id){
    namaMakanan.splice(id,1);
    alert("Data Berhasil Dihapus")
}

function onFormSubmit(){
  
}
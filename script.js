let daftarTugas = [
  { nama: "Belajar Pemrograman", selesai: false },
  { nama: "Mengerjakan Pr", selesai: false },
  { nama: "Praktek", selesai: false }
];

const inputTugas = document.getElementById("inputTugas");
const tombolTambah = document.getElementById("tombolTambah");
const daftar = document.getElementById("daftarTugas");


function tampilkanDaftar() {
  daftar.innerHTML = "";

  for (let i = 0; i < daftarTugas.length; i++) {
    const tugas = daftarTugas[i];

    const li = document.createElement("li");
    li.textContent = tugas.nama + " ";


    if (tugas.selesai === true) {
      li.classList.add("selesai");
    }

    const tombolSelesai = document.createElement("button");
    tombolSelesai.textContent = "Selesai";
    tombolSelesai.addEventListener("click", function() {
      daftarTugas[i].selesai = !daftarTugas[i].selesai;
      tampilkanDaftar();
    });

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.addEventListener("click", function() {
      daftarTugas.splice(i, 1);
      tampilkanDaftar();
    });

    li.appendChild(tombolSelesai);
    li.appendChild(tombolHapus);
    daftar.appendChild(li);
  }
}

tombolTambah.addEventListener("click", function() {
  const namaBaru = inputTugas.value.trim();

  if (namaBaru === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  daftarTugas.push({ nama: namaBaru, selesai: false });

  inputTugas.value = "";
  tampilkanDaftar();
});

tampilkanDaftar();
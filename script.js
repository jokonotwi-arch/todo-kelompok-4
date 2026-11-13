const input = document.getElementById("inputTugas");
const tombol = document.getElementById("btnTambah");
const daftar = document.getElementById("daftarTugas");

tombol.addEventListener("click", function () {
  const teks = input.value.trim();
  if (teks === "") return; // abaikan jika kosong

  const item = document.createElement("li");
  item.textContent = teks;

  item.addEventListener("click", function () {
    item.classList.toggle("selesai"); // klik untuk menandai selesai
  });

  daftar.appendChild(item);
  input.value = "";
});
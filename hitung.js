const daftarHitung = document.getElementById("daftarTugas");
const labelJumlah = document.getElementById("jumlahTugas");

function perbaruiJumlah() {
  labelJumlah.textContent = "Jumlah tugas: " + daftarHitung.children.length;
}

// perbarui otomatis setiap kali tugas ditambah atau dihapus
new MutationObserver(perbaruiJumlah).observe(daftarHitung, { childList: true });
perbaruiJumlah();
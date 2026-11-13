const daftarHapus = document.getElementById("daftarTugas");
daftarHapus.addEventListener("dblclick", function (e) { if (e.target.tagName === "LI") { e.target.remove(); } });
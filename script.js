// ===============================
// PILIHAN JAWABAN
// ===============================

function pilih(jawaban) {
  const hasil = document.getElementById("hasil");

  if (hasil) {
    hasil.innerHTML = "Kamu memilih: <b>" + jawaban + "</b>";
  }
}


// ===============================
// FORM OPINI
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formOpini");

  if (!form) {
    console.log("Form opini tidak ditemukan.");
    return;
  }

  form.addEventListener("submit", async function (event) {

    event.preventDefault();

    // Ambil data dari form
    const namaElement = document.getElementById("nama");
    const pilihanElement = document.getElementById("pilihan");
    const pendapatElement = document.getElementById("pendapat");

    const nama = namaElement ? namaElement.value.trim() : "";
    const pilihan = pilihanElement ? pilihanElement.value : "";
    const pendapat = pendapatElement ? pendapatElement.value.trim() : "";

    // Cek data
    if (!nama || !pilihan || !pendapat) {
      alert("Semua bagian harus diisi.");
      return;
    }

    try {

      // Kirim ke tabel opinions
      const { data, error } = await supabaseClient
        .from("opinions")
        .insert([
          {
            nama: nama,
            pilihan: pilihan,
            pendapat: pendapat
          }
        ]);

      if (error) {
        console.error("Supabase error:", error);
        alert("Gagal menyimpan pendapat: " + error.message);
        return;
      }

      // Berhasil
      alert("Pendapat berhasil dikirim!");

      // Kosongkan form
      form.reset();

      // Tampilkan pesan
      const pesan = document.getElementById("pesan");

      if (pesan) {
        pesan.innerHTML = "Pendapat berhasil dikirim.";
      }

    } catch (error) {

      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim pendapat.");

    }

  });

});

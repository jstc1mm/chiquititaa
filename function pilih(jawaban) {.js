function pilih(jawaban) {

    let hasil = document.getElementById("hasil");

    hasil.innerHTML =
        "Kamu memilih: <b>" + jawaban + "</b>";
}


// ===============================
// FORM OPINI
// ===============================

let form = document.getElementById("formOpini");

if (form) {

    form.addEventListener("submit", async function(event) {

        event.preventDefault();


        // ===============================
        // AMBIL DATA DARI FORM
        // ===============================

        let nama =
            document.getElementById("nama").value.trim();

        let pilihan =
            document.getElementById("pilihan").value;

        let pendapat =
            document.getElementById("pendapat").value.trim();

        let daftar =
            document.getElementById("daftarOpini");


        // ===============================
        // CEK INPUT
        // ===============================

        if (nama === "" || pendapat === "") {

            alert("Nama dan pendapat harus diisi!");

            return;
        }


        // ===============================
        // SIMPAN KE SUPABASE
        // ===============================

        const { data, error } = await supabaseClient
            .from("messages")
            .insert([
                {
                    name: nama,
                    message: pendapat
                }
            ]);


        // ===============================
        // JIKA GAGAL
        // ===============================

        if (error) {

            console.error(error);

            alert("Gagal menyimpan pesan");

            return;
        }


        // ===============================
        // HAPUS "BELUM ADA OPINI"
        // ===============================

        if (
            daftar &&
            daftar.innerText.includes("Belum ada opini")
        ) {

            daftar.innerHTML = "";
        }


        // ===============================
        // BUAT OPINI BARU
        // ===============================

        let opiniBaru =
            document.createElement("div");

        opiniBaru.className = "opini";


        opiniBaru.innerHTML = `
            <b>${nama}</b>
            <br>
            <small>${pilihan}</small>
            <p>${pendapat}</p>
        `;


        // ===============================
        // TAMPILKAN OPINI
        // ===============================

        if (daftar) {

            daftar.appendChild(opiniBaru);
        }


        // ===============================
        // KOSONGKAN FORM
        // ===============================

        document.getElementById("nama").value = "";

        document.getElementById("pendapat").value = "";


        // ===============================
        // PESAN BERHASIL
        // ===============================

        alert("Pesan berhasil disimpan!");

    });
}

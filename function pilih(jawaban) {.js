function pilih(jawaban) {

    let hasil = document.getElementById("hasil");

    hasil.innerHTML =
        "Kamu memilih: <b>" + jawaban + "</b>";

}


// Form opini

let form = document.getElementById("formOpini");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let nama =
            document.getElementById("nama").value;

        let pilihan =
            document.getElementById("pilihan").value;

        let pendapat =
            document.getElementById("pendapat").value;

        let daftar =
            document.getElementById("daftarOpini");

        // Menghapus tulisan "belum ada opini"
        if (
            daftar.innerText.includes(
                "Belum ada opini"
            )
        ) {
            daftar.innerHTML = "";
        }

        let opiniBaru =
            document.createElement("div");

        opiniBaru.className = "opini";

        opiniBaru.innerHTML = `
            <b>${nama}</b>
            <br>
            <small>${pilihan}</small>
            <p>${pendapat}</p>
        `;

        daftar.appendChild(opiniBaru);

        document.getElementById("pesan").innerHTML =
            "Pendapat berhasil dikirim!";

        form.reset();

    });

}

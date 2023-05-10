document.addEventListener("alpine:init", () => {
  Alpine.store("mahasiswa", {
    tahun: 2023,
    nama: ["indra", "afifan", "wahyu"],
  });
});

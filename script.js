// === ELEMENTS ===
const enterBtn = document.getElementById("enterBtn");
const galleryPage = document.getElementById("galleryPage");
const grid = document.getElementById("grid");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
const lbClose = document.getElementById("lbClose");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// === IMAGE DATA ===
// Ganti URL di sini dengan foto kamu sendiri (bisa lokal folder / online)
const photos = [
  { src: "images/1.jpg", caption: "date kedua kita ke timezoneee" },
  { src: "images/2.jpg", caption: "First time ke zoo" },
  { src: "images/3.jpg", caption: "Candid ala ala di kandang burung 🌿" },
  { src: "images/4.jpg", caption: "First time staycation aww" },
  { src: "images/5.jpg", caption: "View + U = I Luv U" },{ src: "images/6.jpg", caption: "First bricks kitaa yang ngerjainnya 10 jam" }, { src: "images/7.jpg", caption: "Abis Staycation ujan udah bete akunya akhirnya ke trans studio" },{ src: "images/8.jpg", caption: "Nemenin belanja jaket walo ada roni juga seh" }, { src: "images/9.jpg", caption: "Date lagiii tapi yang ini ekstrim wkwk" }, { src: "images/10.jpg", caption: "Kondangan pertama kita asek" }, { src: "images/11.jpg", caption: "Perjalanan jauh demi kopi dan view" }, { src: "images/12.jpg", caption: "First birthday flowers bouquet, maaciii" }, 
{ src: "images/13.jpg", caption: "Mam seafood yang jauuuhhh sambil ujan ujanann" }, { src: "images/14.jpg", caption: "Lagi stress sidang diundur terus eh diajak mamm, makasihhh sayang" }, 
{ src: "images/15.jpg", caption: "pertama kali badminton bersama temen temen abiii" }, 
{ src: "images/16.jpg", caption: "Pertemuan pertama abi dengan sepupu aku, first debut lagi di wa grup keluarga" }, { src: "images/17.jpg", caption: "Selfiee cekrekk" }, { src: "images/18.jpg", caption: "Outfit cek buat wisuda akuuu wkwk akhirnya pake batik" }, 
{ src: "images/19.jpg", caption: "Ini jadinya pake batik mwhehe ganteng banget kan pacal akuuu" }, 
{ src: "images/20.jpg", caption: "Jalan jalan bareng keluarga dan temen akuuuu awww" }, { src: "images/21.jpg", caption: "Pap karena aku ngambek dan marah, abisnya ketemu cewe ga bilang dulu sama akuu!!!" }


];
// === MUSIC ===
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "🔇";
  } else {
    bgMusic.play();
    musicBtn.textContent = "🎵";
  }
  isPlaying = !isPlaying;
});

// === FUNCTIONS ===
function openGallery() {
  document.querySelector(".hero").classList.add("hidden");
  galleryPage.classList.remove("hidden");
  galleryPage.setAttribute("aria-hidden", "false");

  // mulai lagu setelah tombol diklik
  bgMusic.play();
  isPlaying = true;
}


function renderGallery() {
  grid.innerHTML = photos
    .map(
      (p, i) => `
      <img src="${p.src}" alt="${p.caption}" data-index="${i}" loading="lazy">
    `
    )
    .join("");
}

function openLightbox(index) {
  currentIndex = index;
  lbImg.src = photos[index].src;
  lbCaption.textContent = photos[index].caption;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function showPrev() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  openLightbox(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % photos.length;
  openLightbox(currentIndex);
}

// === EVENT LISTENERS ===
enterBtn.addEventListener("click", openGallery);

grid.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const index = parseInt(e.target.dataset.index, 10);
    openLightbox(index);
  }
});

lbClose.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// ESC key to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});

// === INIT ===
renderGallery();

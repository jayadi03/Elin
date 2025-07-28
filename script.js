const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const audio = document.getElementById("bgMusic");
const textEl = document.getElementById("typeText");

let slide = 1;
let typingIndex = 0;
let typingText = '';
let typingInterval;

const texts = [
  "", // Slide 1 - kosong
  `Indah Selamanya

Di matamu kutemukan cahaya,  
Mengalir lembut sepanjang asa,  
Sekilas dunia berubah rupa,  
Bersamamu, segalanya terasa indah selamanya.

Denyut waktu tak pernah pudar,  
Rindu bertaut di antara kita,  
Cinta tumbuh, tak lekang oleh masa,  
Kau dan aku, abadi dalam cerita.

Langkah kita menyusuri senja,  
Menganyam mimpi penuh warna,  
Janji sederhana, penuh makna,  
Cinta ini terpatri… indah selamanya.`,
  `Aku tahu, mungkin sikap dan kata-kataku pernah menyakiti kamu, entah sadar atau tidak. Aku benar-benar minta maaf atas semua kesalahan yang telah kulakukan. Bukan maksudku untuk membuat kamu kecewa atau merasa tidak dihargai, kadang aku terlalu egois dan lupa mengerti perasaan kamu.

Aku ingin semuanya kembali baik seperti dulu, tanpa ada rasa sakit hati di antara kita. Aku sangat menghargai kamu dan kehadiranmu penting buat aku. Kalau memang butuh waktu untuk memaafkan, aku bisa menunggu, yang penting kamu tahu aku tulus minta maaf dan ingin memperbaiki semuanya. Terima kasih sudah mau mendengarkan dan memberi kesempatan 
aku benar benar minta maaf lin jujur aku nda bisa bohongin perasaan ku ke kamu i love you • / •–•• / •• / –•`
];

// Play music
playBtn.addEventListener("click", () => {
  audio.play();
});

// Next slide
nextBtn.addEventListener("click", () => {
  if (slide < 3) {
    slide++;
    showSlide(slide);
  }
});

function typeText(text) {
  clearInterval(typingInterval);
  typingIndex = 0;
  textEl.textContent = '';
  typingText = text;

  typingInterval = setInterval(() => {
    if (typingIndex < typingText.length) {
      textEl.textContent += typingText.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
}

function showSlide(slideNum) {
  if (slideNum === 2 || slideNum === 3) {
    typeText(texts[slideNum - 1]);
  }

  if (slideNum === 3) {
    nextBtn.style.display = "none";
  }
}

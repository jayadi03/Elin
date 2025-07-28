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
  `hay cill
kk minta maaf yaa? mungkin tadi kk salah, makanyaa kk sekarang minta maaf okeyy? maaf kalo kesalahan kk tadi buat hubungan kitaa kyk gini. kk minta maaf, semoga fhany maafin kk yaaa, kalo ga dimaafin juga ndak papa  kok ini juga salah kk, tapi kk harap fhany maafin kk. tdi kk salah banget yaaa fhan sama kamu? sampe buat fhany jadi badmood? atau marah sama kk? maafin kk yaa? aku ndak tau klo hubungan kita bakal jadi kaya giniii. sekarang kita baikan yaaa marahnyaa udahin sampe sini  sajaa okeey, kk ndak mauu lama lama di cuekin  sama fhany, kk mau baikan samaa fhany gamau di cuekin kaya tadi lagii, sekali lagi kk mintaa maaf yaa buat kesalahan kk yang tadi atau yang sebelum sebelumnya okeyyy dan jugaaa……`,
  `kk ingin ngasi tau fhany banyak hal, tentang betapa kk sangat mencintai fhany dan takut kehilangan fhanyy. Kk juga selalu mengupayakan semua yang terbaik buat fhanyy. Hubungan ini terkadang naik dan turun ada pasang dan surutnya. Tapi apapun yang terjadi kk ingin kita tetap saling memiliki yaa fhan..

kk belajar buat fhany bahagia, kk ingin tinggal di sisi kmuu selamanya. kk yakin, berjalan denganmu akan membuat kita lebih cepat sampai ke tujuan. kk siap ngehadapin semuanya semenjak kk memilih fhany sebagai pendampingkk. Jangan pernah bosan untuk saling memperbaiki 
yaaa sebab kk ndak mau lagi mengenal orang baru, kalau ada yang kurang kita tambahkan sama-sama okeey, dan kalau ada yang salah kita cari benarnya berdua.

Beriringan denganmu membuat kk paham bahwa hidup hanya tentang rasa syukur dan cukup. Kalau kita terus mencari yang sempurna kita akan kehilangan seseorang yang selalu ada. kk ndak mau belajar mencintai orang baru lagi, jadi izinin kk mencintai fhany berulang kali, kk yakin kita bisa saling melengkapi satu sama lain.

Cinta tak selamanya akan bahagia tapi ada juga kecewa, tapi kesempatan kk dan kamu tetap sama. Hubungan harus lebih banyak tawa dibanding air mata, kita wujudkan mimpi kita sama-sama yaaaa. Fhan 🤍💐`
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

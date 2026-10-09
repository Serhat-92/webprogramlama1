// ------ 1. Resim Değiştirici -------
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/kali-cubes.jpg") {
    myImage.setAttribute("src", "images/kali-glitch.jpg");
  } else {
    myImage.setAttribute("src", "images/kali-cubes.jpg");
  }
});

// ------- 2. Kişisel Karşılama -------
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Lütfen adınızı giriniz:");

  if (!myName) {
    // MDN burada setUserName() ile tekrar soruyor; İptal'e basılınca pencere
    // sürekli açılır. Bu yüzden return ile fonksiyondan çıkıyoruz.
    return; // return: Fonksiyondan çıkmak için kullanılır. Bu durumda, kullanıcı adını girmediğinde veya iptal ettiğinde, fonksiyonun geri kalan kısmı çalıştırılmaz ve kullanıcı adı kaydedilmez.
  }

  localStorage.setItem("name", myName);
  myHeading.textContent = `Hoş geldiniz, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  // Gelmediyse adını sor. Geldiyse adını hatırla ve başlığa yaz.
  myHeading.textContent = `Hoş geldiniz, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

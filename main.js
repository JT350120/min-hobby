import './style.css'

const dataBtn = document.querySelector("#dataBtn");
const galleryBtn = document.querySelector("#galleryBtn");
const historyBtn = document.querySelector("#historyBtn");
const homeBtn = document.querySelector("#homeBtn");

const contentDiv = document.querySelector("#content");

const leftDiv = document.querySelector("#leftDiv");
const rightDiv = document.querySelector("#rightDiv");

dataBtn.addEventListener("click", createDataContent);
galleryBtn.addEventListener("click", createGalleryContent);
historyBtn.addEventListener("click", createHistoryContent);
homeBtn.addEventListener("click", createStartPageContent);

function createStartPageContent() {
  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  rightDiv.style.backgroundImage = "";
  
  const pic = document.createElement("img");
  pic.classList.add("startImg");
  pic.src = "/assets/logo.png";
  pic.alt = "Bild på Aktivs logotyp";
  leftDiv.appendChild(pic);
  
  rightDiv.innerHTML = `<span>En enkel sida om Aktiv 600</span>`;
}

function createDataContent() {
  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  rightDiv.style.backgroundImage = "";

  const pic = document.createElement("img");
  pic.src = "/assets/warning.jpg";
  pic.alt = "Bild på varningstext ovanför växelspak";
  leftDiv.appendChild(pic);

  const dataListElement = document.createElement("ul");

  const dataList = [
    "Motor: 2-cylindrig, Rotax 440", 
    "Växellåda: Ibland",
    "Toppfart: Vet inte, hastighetsmätaren är trasig",
    "Bromsar: Trasiga, sätt hälarna i snön",
    "Stoppad sittdyna: Ja",
    "Extrautrustning: Trasigt signalhorn"
  ]

  dataList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    dataListElement.appendChild(listItem);
  })

  rightDiv.appendChild(dataListElement);
}

function createGalleryContent() {
  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  rightDiv.style.backgroundImage = "";

  const imgFiles = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
  ];

  imgFiles.forEach((file) => {
    const pic = document.createElement("button");
    pic.classList.add("galleryImg");
    pic.style.backgroundImage = `url("/assets/gallery/${file}")`;

    pic.addEventListener("click", () => {
      rightDiv.style.backgroundImage = `url("/assets/gallery/${file}")`;
      rightDiv.style.backgroundSize = "cover";
      rightDiv.style.backgroundPosition = "center";
    });

    leftDiv.appendChild(pic);
  })

  leftDiv.style.flexDirection = "row";
  leftDiv.style.flexWrap = "wrap";
}

function createHistoryContent() {
  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  rightDiv.style.backgroundImage = "";

  const pic = document.createElement("img");
  pic.src = "/assets/history.jpg";
  pic.alt = "Bild på en Aktiv 600 i snön";
  leftDiv.appendChild(pic);

  const upperSection = document.createElement("section");
  const lowerSection = document.createElement("section");
  rightDiv.append(upperSection, lowerSection);
  upperSection.textContent = 
  `
  1898 startades företaget Westerås Lantbruksmaskiner i Morgongåva, Uppland.
  Snöskotertillverkningen inleddes under 60-talet med modellserien Sno-Tric.
  1970 bytte företaget namn till Aktiv-Fischer (källa: Wikipedia).
  `
  lowerSection.textContent = 
  `
  Tidigt 1979 tillverkades mitt exemplar i fabriken i Morgongåva. 
  Jag köpte skotern 2021 i Lövånger söder om Skellefteå. 
  Under min ägo har jag kört fast, mekat och den lilla tid som blivit över däremellan har jag kört hem ved
   med den som var huvudsyftet från början. Körde fast på tomten vintern 2023/2024 och den får stå där tills 
   den tinat fram så jag kan köra fast igen nästa säsong.
  `
}

createStartPageContent();
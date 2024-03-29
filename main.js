import './style.css'

const dataBtn = document.querySelector("#dataBtn");
const galleryBtn = document.querySelector("#galleryBtn");
const historyBtn = document.querySelector("#historyBtn");
const homeBtn = document.querySelector("#homeBtn");

const contentDiv = document.querySelector("#content");

const picDiv = document.querySelector("#picDiv");
const textDiv = document.querySelector("#textDiv");

dataBtn.addEventListener("click", createDataContent);
galleryBtn.addEventListener("click", createGalleryContent);
historyBtn.addEventListener("click", createHistoryContent);
homeBtn.addEventListener("click", createStartPageContent);

function createStartPageContent() {
  picDiv.innerHTML = "";
  textDiv.textContent = "";
  const pic = document.createElement("img");
  pic.src = "/assets/logo1.jpg";
  pic.alt = "Bild på Aktivs logotyp";
  picDiv.appendChild(pic);
  
  textDiv.textContent = "Min hobby - Aktiv 600";
}

function createDataContent() {
  picDiv.innerHTML = "";
  textDiv.textContent = "";
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

  textDiv.appendChild(dataListElement);
}

function createGalleryContent() {
  picDiv.innerHTML = "";
  textDiv.textContent = "";
}

function createHistoryContent() {
  picDiv.innerHTML = "";
  textDiv.textContent = "";

  const pic = document.createElement("img");
  pic.src = "/assets/history.jpg";
  pic.alt = "Bild på en Aktiv 600 i snön";
  picDiv.appendChild(pic);

  const upperSection = document.createElement("section");
  const lowerSection = document.createElement("section");
  textDiv.append(upperSection, lowerSection);
  upperSection.textContent = 
  `
  1898 startades företaget Westerås Lantbruksmaskiner i Morgongåva.
  Snöskotertillverkningen inleddes under 60-talet med modellserien Sno-Tric.
  1970 bytte företaget namn till Aktiv-Fischer, och tidigt 1979 tillverkades mitt exemplar i fabriken i Morgongåva.
  `
  lowerSection.textContent = 
  `
  Jag köpte skotern 2021 i Lövånger söder om Skellefteå. 
  Under min ägo har jag kört fast, mekat och den lilla tid som blivit över däremellan har jag kört hem ved
   med den som var huvudsyftet från början. Körde fast på tomten vintern 2023/2024 och den får stå där tills 
   den tinat fram så jag kan köra fast igen nästa säsong.
  `
}

createStartPageContent();
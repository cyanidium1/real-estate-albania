const content = {
  eng: {
    title: "REAL ESTATE IN ALBANIA",
    description: "Purchase property by the sea and get a residence permit!",
    buttonText: "Get a property selection",
    items: [
      "Assistance in selecting and buying real estate",
      "Repairs and furnishing",
      "Rent and management of your property",
    ],
  },
  pl: {
    title: "NIERUCHOMOŚCI W ALBANII",
    description:
      "Kup nieruchomość nad morzem i uzyskaj pozwolenie na zamieszkanie!",
    buttonText: "Otrzymaj wybór nieruchomości",
    items: [
      "Pomoc w wyborze i zakupie nieruchomości",
      "Remonty i umeblowanie",
      "Wynajem i zarządzanie Twoją nieruchomością",
    ],
  },
  ru: {
    title: "НЕДВИЖИМОСТЬ В АЛБАНИИ",
    description:
      "Приобретите недвижимость у моря и получите Вид на жительство!",
    buttonText: "Получить подбор недвижимости",
    items: [
      "Помощь в подборе и покупке недвижимости",
      "Ремонт и меблировка",
      "Аренда и управление вашей недвижимостью",
    ],
  },
};

function updateContent(language) {
  const langContent = content[language];

  document.getElementById("title1").textContent = langContent.title;
  document.getElementById("description1").textContent = langContent.description;
  document.getElementById("button1").textContent = langContent.buttonText;

  const itemsList = document.getElementById("items1");
  itemsList.innerHTML = langContent.items
    .map((item) => `<li>${item}</li>`)
    .join("");
}

const content2 = {
  eng: {
    heading: "Why ALBANIA?",
    items: [
      "Most affordable real estate on the Adriatic",
      "Safe country",
      "300 days of sunshine per year",
      "Ecological food products",
      "Favorable climate",
    ],
  },
  ru: {
    heading: "Почему АЛБАНИЯ?",
    items: [
      "Самая дешевая недвижимость на Адриатике",
      "Безопасная страна",
      "300 дней в году солнце",
      "Экологичные продукты питания",
      "Благоприятный климат",
    ],
  },
  pl: {
    heading: "Dlaczego ALBANIA?",
    items: [
      "Najtańsze nieruchomości nad Adriatykiem",
      "Bezpieczny kraj",
      "300 dni słońca w roku",
      "Ekologiczne produkty spożywcze",
      "Korzystny klimat",
    ],
  },
};

const languages = {
  eng: {
    heading: "Why ALBANIA?",
    items: [
      "Most affordable real estate on the Adriatic",
      "Safe country",
      "300 days of sunshine per year",
      "Ecological food products",
      "Favorable climate",
    ],
  },
  ru: {
    heading: "Почему АЛБАНИЯ?",
    items: [
      "Самая дешевая недвижимость на Адриатике",
      "Безопасная страна",
      "300 дней в году солнце",
      "Экологичные продукты питания",
      "Благоприятный климат",
    ],
  },
  pl: {
    heading: "Dlaczego ALBANIA?",
    items: [
      "Najtańsze nieruchomości nad Adriatykiem",
      "Bezpieczny kraj",
      "300 dni słońca w roku",
      "Ekologiczne produkty spożywcze",
      "Korzystny klimat",
    ],
  },
};

function changeLanguage(lang) {
  const langContent2 = languages[lang];
  document.getElementById("heading").textContent = langContent2.heading;
  const listElement = document.getElementById("list");

  const items = langContent2.items;

  listElement.innerHTML = items
    .map((item, index) => {
      return `<li id="item${index + 1}" class="w-fit mb-16 self-${
        index % 2 === 0 ? "start" : "end"
      } bg-white rounded-3xl p-2 z-20">${item}</li>`;
    })
    .join("");
}
// Добавляем обработчик события change для элемента <select>
let currentLanguage = "ru";
updateContent(currentLanguage);

document.getElementById("translator").addEventListener("change", function () {
  currentLanguage = this.value;
  updateContent(currentLanguage);
  changeLanguage(currentLanguage);
});

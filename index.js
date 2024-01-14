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


const content3 = {
  ru: {
    tourTitle: "Инвестиционный тур в Албанию",
    tourSubtitle: "Бесплатный ознакомительный тур по недвижимости в Албании",
    item1Title: "Тур до 5 дней",
    item1Desc: "Экскурсии и прогулки по городу",
    item1Desc2: "Осмотр школ и университетов",
    item2Title: "Удобные для Вас даты",
    item3Title: "Встреча в аэропорту",
    item4Title: "Трансфер аэропорт/отель/аэропорт",
    item4Desc: "Консультация по оформлению сделки по недвижимости",
    item5Title: "Размещение в комфортных апартаментах",
    item5Desc: "Открытие банковского счета",
    item6Title: "Осмотр лучших объектов недвижимости под ваши цели",
    item6Desc: "Услуги адвоката",
    item6Desc2: "Получение вида на жительство",
  },
  eng: {
    tourTitle: "Investment tour to Albania",
    tourSubtitle: "Free introductory tour of real estate in Albania",
    item1Title: "Tour up to 5 days",
    item1Desc: "City tours and walks",
    item1Desc2: "Visiting schools and universities",
    item2Title: "Convenient dates for you",
    item3Title: "Meeting at the airport",
    item4Title: "Transfer airport/hotel/airport",
    item4Desc: "Consultation on real estate transaction",
    item5Title: "Accommodation in comfortable apartments",
    item5Desc: "Opening a bank account",
    item6Title: "Viewing the best real estate for your goals",
    item6Desc: "Services of a lawyer",
    item6Desc2: "Residence permit issuance",
  },
  pl: {
    tourTitle: "Wycieczka inwestycyjna do Albanii",
    tourSubtitle: "Darmowa wstępna wycieczka po nieruchomościach w Albanii",
    item1Title: "Wycieczka do 5 dni",
    item1Desc: "Zwiedzanie miasta i spacery",
    item1Desc2: "Oglądanie szkół i uniwersytetów",
    item2Title: "Dogodne dla Ciebie daty",
    item3Title: "Spotkanie na lotnisku",
    item4Title: "Transfer lotnisko/hotel/lotnisko",
    item4Desc: "Konsultacje dotyczące transakcji z nieruchomościami",
    item5Title: "Zakwaterowanie w komfortowych apartamentach",
    item5Desc: "Otwarcie konta bankowego",
    item6Title: "Oglądanie najlepszych nieruchomości pod Twoje cele",
    item6Desc: "Usługi prawnika",
    item6Desc2: "Wydanie zezwolenia na pobyt",
  },
};

 const translatorSelect = document.getElementById("translator");

 translatorSelect.addEventListener("change", function () {
   const selectedLanguage = translatorSelect.value;
   translatePage(selectedLanguage);
 });

 function translatePage(language) {
   const elements = document.querySelectorAll("[id]");
   elements.forEach((element) => {
     const translationKey = element.id;
     if (content3[language] && content3[language][translationKey]) {
       element.textContent = content3[language][translationKey];
     }
   });
 }

 // Инициализация страницы с текущим языком (по умолчанию - русский)
 translatePage("ru");





document.getElementById("translator").addEventListener("change", function () {
  currentLanguage = this.value;
  updateContent(currentLanguage);
    changeLanguage(currentLanguage);
    translatePage(currentLanguage);
});

const content = {
  en: {
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
  en: {
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
  en: {
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
  en: {
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

const Content4 = {
  ru: {
    formTitle: "Форма заявки",
    formDescription: "Оставьте заявку и наш эксперт свяжется с Вами",
    nameInputPlaceholder: "Ваше имя",
    phoneInputPlaceholder: "Телефон",
    submitBtnText: "Отправить заявку",
  },
  en: {
    formTitle: "Application Form",
    formDescription: "Leave your request and our expert will contact you",
    nameInputPlaceholder: "Your Name",
    phoneInputPlaceholder: "Phone",
    submitBtnText: "Submit Application",
  },
  pl: {
    formTitle: "Formularz zgłoszeniowy",
    formDescription: "Zostaw zgłoszenie, a nasz ekspert skontaktuje się z Tobą",
    nameInputPlaceholder: "Twoje imię",
    phoneInputPlaceholder: "Telefon",
    submitBtnText: "Wyślij zgłoszenie",
  },
};

function changeLanguage4(defaultLanguage) {
  const selectedLanguage = defaultLanguage;

  // Обновляем текст на странице для каждого элемента с учетом выбранного языка
  document.getElementById("formTitle").innerText =
    Content4[selectedLanguage].formTitle;
  document.getElementById("formDescription").innerText =
    Content4[selectedLanguage].formDescription;
  document.getElementById("nameInput").placeholder =
    Content4[selectedLanguage].nameInputPlaceholder;
  document.getElementById("phoneInput").placeholder =
    Content4[selectedLanguage].phoneInputPlaceholder;
  document.getElementById("submitBtn").innerText =
    Content4[selectedLanguage].submitBtnText;
}

 const Content5 = {
   ru: {
     realEstateTitle: "Недвижимость",
     investmentTourTitle: "Инвестиционный Тур",
     albaniaRegionsTitle: "Районы Албании",
   },
   en: {
     realEstateTitle: "Real Estate",
     investmentTourTitle: "Investment Tour",
     albaniaRegionsTitle: "Regions of Albania",
   },
   pl: {
     realEstateTitle: "Nieruchomości",
     investmentTourTitle: "Wycieczka Inwestycyjna",
     albaniaRegionsTitle: "Regiony Albanii",
   },
};
 
  function changeLanguage5(defaultLanguage) {
    const selectedLanguage = defaultLanguage;

    // Обновляем текст на странице для каждого элемента с учетом выбранного языка
    document.getElementById("realEstateTitle").innerText =
      Content5[selectedLanguage].realEstateTitle;
    document.getElementById("investmentTourTitle").innerText =
      Content5[selectedLanguage].investmentTourTitle;
    document.getElementById("albaniaRegionsTitle").innerText =
      Content5[selectedLanguage].albaniaRegionsTitle;
  }

 const Content6 = {
   ru: {
     subscribeText:
       "Подпишитесь и будьте в курсе актуальных событий в мире недвижимости Албании!",
     subscribeListItems: [
       "Новости рынка недвижимости Албании",
       "Оповещения о новых стартах продаж",
       "Доступ к эксклюзивным объектам на этапе pre-sale",
       "Инвестиционные предложения",
     ],
     subscribeLinkText: "Подписаться на YouTube",
   },
   en: {
     subscribeText:
       "Subscribe and stay updated on the latest events in the real estate world of Albania!",
     subscribeListItems: [
       "News from the real estate market of Albania",
       "Alerts about new sales launches",
       "Access to exclusive properties at pre-sale stage",
       "Investment proposals",
     ],
     subscribeLinkText: "Subscribe on YouTube",
   },
   pl: {
     subscribeText:
       "Zapisz się i bądź na bieżąco z najnowszymi wydarzeniami na rynku nieruchomości w Albanii!",
     subscribeListItems: [
       "Wiadomości z rynku nieruchomości w Albanii",
       "Ostrzeżenia o nowych rozpoczęciach sprzedaży",
       "Dostęp do ekskluzywnych nieruchomości na etapie pre-sale",
       "Propozycje inwestycyjne",
     ],
     subscribeLinkText: "Zapisz się na YouTube",
   },
 };

 function changeLanguage6(defaultLanguage) {
   const selectedLanguage = defaultLanguage;

   // Обновляем текст на странице для каждого элемента с учетом выбранного языка
   document.getElementById("subscribeText").innerText =
     Content6[selectedLanguage].subscribeText;

   const subscribeList = document.getElementById("subscribeList");
   subscribeList.innerHTML = Content6[selectedLanguage].subscribeListItems
     .map((item) => `<li>${item}</li>`)
     .join("");

   document.getElementById("subscribeLink").innerText =
     Content6[selectedLanguage].subscribeLinkText;
 }

 function changeFlag(defaultLanguage) {
   const selectedLanguage = defaultLanguage;
   const languageIcons = document.getElementById("languageIcons");
   const plIcon = document.getElementById("plIcon");
   const ruIcon = document.getElementById("ruIcon");
   const enIcon = document.getElementById("enIcon");

   // Скрываем все иконки


   // Обновляем путь для выбранной иконки
   switch (selectedLanguage) {
     case "pl":
      
       ruIcon.setAttribute("xlink:href", "./public/sprite.svg#pl");
       break;
     case "ru":
       
       // Обновите путь для русской иконки при необходимости
       ruIcon.setAttribute("xlink:href", "./public/sprite.svg#ru");
       break;
     case "en":
       
       // Обновите путь для английской иконки при необходимости
       ruIcon.setAttribute("xlink:href", "./public/sprite.svg#en");
       break;
   }
 }

document.getElementById("translator").addEventListener("change", function () {
  currentLanguage = this.value;
  updateContent(currentLanguage);
    changeLanguage(currentLanguage);
    translatePage(currentLanguage);
    changeLanguage4(currentLanguage);
    changeLanguage5(currentLanguage);
    changeLanguage6(currentLanguage);
    changeFlag(currentLanguage);

});





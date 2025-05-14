const cartButton = document.querySelector(".cart-button");
const loginButton = document.querySelector(".login-button");
const signUpButton = document.querySelector(".sign-up-button");
const cartForm = document.querySelector(".cart-form");
const loginForm = document.querySelector(".login-form");
const signUpForm = document.querySelector(".sign-up-form");
const menuWrapp = document.querySelector(".menu_wrapp");
const orderButtonWrapp = document.querySelector(".order-Button_Wrapp");
const sendOrderButton = document.querySelector(".send_order");
let quantity = {
  burger: 0,
  piza: 0,
};
let total = {
  burger: 0,
  piza: 0,
};
// let foodInfo = {
//   burger: {
//     id: 1,
//     name: "Бургер",
//     price: 500,
//     brand: "Яндекс",
//     category: "Еда",
//   },
//   piza: {
//     id: 2,
//     name: "Пицца",
//     price: 1000,
//     brand: "Яндекс",
//     category: "Еда",
//   },
// };

cartButton.addEventListener("click", () => {
  if (cartForm.style.transform === "translate(-50%, -50%) scale(0)") {
    ym(97087644, "hit", "https://ver1zion.github.io/form_validator/cart", {
      title: "Корзина",
      referer: "https://ver1zion.github.io/form_validator/",
    });
    cartForm.style.transform = "translate(-50%, -50%) scale(1)";
    cartForm.style.zIndex = "10";
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
    signUpForm.style.zIndex = "1";
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
    loginForm.style.zIndex = "1";
  } else {
    cartForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

loginButton.addEventListener("click", () => {
  if (loginForm.style.transform === "translate(-50%, -50%) scale(0)") {
    loginForm.style.transform = "translate(-50%, -50%) scale(1)";
    loginForm.style.zIndex = "10";
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
    signUpForm.style.zIndex = "1";
    cartForm.style.transform = "translate(-50%, -50%) scale(0)";
    cartForm.style.zIndex = "1";
  } else {
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

signUpButton.addEventListener("click", () => {
  if (signUpForm.style.transform === "translate(-50%, -50%) scale(0)") {
    signUpForm.style.transform = "translate(-50%, -50%) scale(1)";
    signUpForm.style.zIndex = "10";
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
    loginForm.style.zIndex = "1";
    cartForm.style.transform = "translate(-50%, -50%) scale(0)";
    cartForm.style.zIndex = "1";
  } else {
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

window.dataLayer = window.dataLayer || [];

sendOrderButton.addEventListener("click", () => {
  let purchaseInfo = {
    ecommerce: {
      currencyCode: "RUB",
      purchase: {
        actionField: {
          id: "TEST",
          revenue: 0,
        },
        products: [],
      },
    },
  };

  if (quantity.burger > 0 || quantity.piza > 0) {
    purchaseInfo.ecommerce.purchase.actionField.revenue =
      total.burger + total.piza;

    if (quantity.burger > 0) {
      purchaseInfo.ecommerce.purchase.products.push({
        id: "1",
        name: "Бургер",
        price: 500,
        brand: "Яндекс",
        category: "Еда",
        quantity: quantity.burger,
      });
    }

    if (quantity.piza > 0) {
      purchaseInfo.ecommerce.purchase.products.push({
        id: "2",
        name: "Пицца",
        price: 1000,
        brand: "Яндекс",
        category: "Еда",
        quantity: quantity.piza,
      });
    }

    window.dataLayer.push(purchaseInfo);
  }
});

menuWrapp.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("card-button") &&
    event.target.closest(".burger")
  ) {
    quantity.burger += 1;
    total.burger += 500;
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "RUB",
        add: {
          products: [
            {
              id: "1",
              name: "Бургер",
              price: 500,
              brand: "Яндекс",
              category: "Еда",
              quantity: 1,
            },
          ],
        },
      },
    });
    window.dataLayer.push({
      // бредик этот удалить потом
      ecommerce: {
        currencyCode: "RUB",
        detail: {
          products: [
            {
              id: "12",
              name: "Бургеррр",
              price: 520,
              brand: "Яндекс",
              category: "Еда",
            },
          ],
        },
      },
    });
    console.log(quantity.burger);
    let quantityBurgers = cartForm.querySelector(".quantity_burgers");
    let totalSum = cartForm.querySelector(".total");

    if (!quantityBurgers) {
      quantityBurgers = document.createElement("div");
      quantityBurgers.classList.add("quantity_burgers");
      cartForm.prepend(quantityBurgers);
    }

    if (!totalSum) {
      totalSum = document.createElement("div");
      totalSum.classList.add("total");
      orderButtonWrapp.prepend(totalSum);
    }

    totalSum.innerText = `Rub: ${total.piza + total.burger}`;
    quantityBurgers.innerText = `Burger: ${quantity.burger}`;
  }

  if (
    event.target.classList.contains("card-button") &&
    event.target.closest(".piza")
  ) {
    quantity.piza += 1;
    total.piza += 1000;
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "RUB",
        add: {
          products: [
            {
              id: "2",
              name: "Пицца",
              price: 1000,
              brand: "Яндекс",
              category: "Еда",
              quantity: 1,
            },
          ],
        },
      },
    });
    console.log(quantity.piza);
    let quantityPizas = cartForm.querySelector(".quantity_pizas");
    let totalSum = cartForm.querySelector(".total");

    if (!quantityPizas) {
      quantityPizas = document.createElement("div");
      quantityPizas.classList.add("quantity_pizas");
      cartForm.prepend(quantityPizas);
    }

    if (!totalSum) {
      totalSum = document.createElement("div");
      totalSum.classList.add("total");
      orderButtonWrapp.prepend(totalSum);
    }

    totalSum.innerText = `Rub: ${total.piza + total.burger}`;
    quantityPizas.innerText = `Piza: ${quantity.piza}`;
  }
});

ym(97087644, "userParams", {
  status: "unauthorized",
});

ym(97087644, "params", {
  Platform: navigator.userAgentData.platform,
  Mobile: navigator.userAgentData.mobile,
  Mobile_and_other: navigator.userAgentData.mobile + " hello",
});

//
const datas = [
  {
    ecommerce: [
      {
        currencyCode: "RUB",
        impressions: {
          products: [
            {
              id: 90851,
              name: "Автошина CORDIANT 215/65R16C BUSINESS CW-2 109/107Q ш. TL",
              position: 1,
              price: 10020,
              brand: "CORDIANT",
              category:
                "Каталог автомобильных шин / Зимние шины / Зимние шины Cordiant",
              variant: "215/65R16C",
              list: "Каталог автомобильных шин",
            },
            {
              id: 90237,
              name: "Автошина PIRELLI 275/40R20 P-ZERO SPORTS CAR 106W XL TL",
              position: 1,
              price: 32600,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "275/40R20",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91084,
              name: "Автошина PIRELLI 185/65R15 CINTURATO P1 VERDE 88H TL",
              position: 2,
              price: 5590,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "185/65R15",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91564,
              name: "Автошина PIRELLI 225/45R17 CINTURATO P7 91W XL TL",
              position: 3,
              price: 10050,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "225/45R17",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91348,
              name: "Автошина PIRELLI 275/40R19 P-ZERO SPORTS CAR 105Y MO XL TL",
              position: 4,
              price: 33110,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "275/40R19",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91150,
              name: "Автошина NEXEN 205/55R16 N'FERA PRIMUS V 91V XL TL",
              position: 5,
              price: 5670,
              brand: "NEXEN",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Nexen",
              variant: "205/55R16",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93763,
              name: "Автошина IKON NORDMAN 225/55R17 NORDMAN 7 101T XL ш. TL",
              position: 6,
              price: null,
              brand: "IKON NORDMAN",
              category: "Каталог автомобильных шин / Зимние шины / Зимние шины",
              variant: "225/55R17",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91083,
              name: "Автошина PIRELLI 195/65R15 CINTURATO P1 VERDE 91V XL TL",
              position: 7,
              price: 6030,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "195/65R15",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91145,
              name: "Автошина PIRELLI 255/50R19 SCORPION VERDE 103V MO XL TL",
              position: 8,
              price: 25230,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "255/50R19",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93762,
              name: "Автошина IKON NORDMAN 215/55R17 NORDMAN 7 98T XL ш. TL",
              position: 9,
              price: 11180,
              brand: "IKON NORDMAN",
              category: "Каталог автомобильных шин / Зимние шины / Зимние шины",
              variant: "215/55R17",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91350,
              name: "Автошина PIRELLI 265/65R17 SCORPION ALL TERRAIN PLUS 112T XL TL",
              position: 10,
              price: 16170,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "265/65R17",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91082,
              name: "Автошина PIRELLI 215/65R16 SCORPION VERDE All SEASON 98H TL",
              position: 11,
              price: 8760,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "215/65R16",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93737,
              name: "Автошина GOODRIDE 215/65R15 ZUPERECO Z-107 96H TL",
              position: 12,
              price: null,
              brand: "GOODRIDE",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины GOODRIDE",
              variant: "215/65R15",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91143,
              name: "Автошина PIRELLI 265/60R18 SCORPION ALL TERRAIN PLUS 110H XL TL",
              position: 13,
              price: 17970,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "265/60R18",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93743,
              name: "Автошина IKON NORDMAN 175/70R13 NORDMAN 7 82T ш. TL",
              position: 14,
              price: 5810,
              brand: "IKON NORDMAN",
              category: "Каталог автомобильных шин / Зимние шины / Зимние шины",
              variant: "175/70R13",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93747,
              name: "Автошина YOKOHAMA 235/60R19 ADVAN V61F 103V TL",
              position: 15,
              price: null,
              brand: "YOKOHAMA",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Yokohama",
              variant: "235/60R19",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93744,
              name: "Автошина IKON NORDMAN 175/70R13 NORDMAN 8 82T ш. TL",
              position: 16,
              price: 6430,
              brand: "IKON NORDMAN",
              category: "Каталог автомобильных шин / Зимние шины / Зимние шины",
              variant: "175/70R13",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91464,
              name: "Автошина PIRELLI 195/50R15 CINTURATO P1 VERDE 82V XL TL",
              position: 17,
              price: 5500,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Pirelli",
              variant: "195/50R15",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93761,
              name: "Автошина PIRELLI 285/40R22 SCORPION ICE ZERO 2 110H XL ш. TL",
              position: 18,
              price: 53770,
              brand: "PIRELLI",
              category:
                "Каталог автомобильных шин / Зимние шины / Зимние шины Pirelli",
              variant: "285/40R22",
              list: "Каталог автомобильных шин",
            },
            {
              id: 91065,
              name: "Автошина NEXEN 185/65R15 N'FERA PRIMUS V 88H TL",
              position: 19,
              price: 5470,
              brand: "NEXEN",
              category:
                "Каталог автомобильных шин / Летние шины / Летние шины Nexen",
              variant: "185/65R15",
              list: "Каталог автомобильных шин",
            },
            {
              id: 93750,
              name: "Автошина HIFLY 315/80R22.5 HH308A 156/152L TL 20PR (на ведущую ось)",
              position: 20,
              price: 26860,
              brand: "HIFLY",
              category:
                "Каталог автомобильных шин / Грузовые шины / Грузовые шины",
              variant: "315/80R22.5",
              list: "Каталог автомобильных шин",
            },
          ],
        },
      },
    ],
  },
];

function convertEcommerceArrayToObject(dataLayer) {
  dataLayer.forEach((item) => {
    if (item.ecommerce && Array.isArray(item.ecommerce)) {
      const ecommerceObject = item.ecommerce.reduce((acc, curr) => {
        return {
          ...acc,
          ...curr,
        };
      }, {});
      const ecommerceString = JSON.stringify(ecommerceObject);
      const commandString = `(window.dataLayer = window.dataLayer || []).push({ ecommerce: ${ecommerceString} });`;
      console.log(commandString);
      return commandString;
    }
    return null;
  });
}

convertEcommerceArrayToObject(datas);

dataLayer.push({
  ecommerce: [
    {
      currencyCode: "RUB",
      purchase: {
        actionField: { id: "TEST3", coupon: "Купон", revenue: 1000 },
        products: [
          {
            id: "1",
            name: "тест",
            price: 500,
            quantity: 1,
          },
        ],
      },
    },
  ],
});

(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(97087644, "init", {
  id: 97087644,
  clickmap: true,
  trackLinks: true,
  webvisor: true,
  accurateTrackBounce: true,
});
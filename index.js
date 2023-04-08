//*************************************************************************************************************
// 1. Reverse String.
//*************************************************************************************************************

const enteredString = document.getElementById("string");
let input = "";

enteredString.addEventListener("change", (e) => {
  input = "";
  input += e.target.value;
});

const reverse = document.getElementById("reverse");
reverse.addEventListener("click", () => {
  setTimeout(() => {
    input = input.split("").reverse().join("");
    document.getElementById("reversedString").setAttribute("value", input);
    console.log(input);
  }, 2000);
});

//*************************************************************************************************************
// 2. Random Number Generator with Delay and Progress Indication:
//*************************************************************************************************************

const generate = document.getElementById("generate");

let countdown;

generate.addEventListener("click", () => {
  let delay = 3000;
  let remainingTime = delay / 1000;

  countdown = setInterval(() => {
    console.log(`${remainingTime} seconds remaining...`);
    document
      .getElementById("timeLeft")
      .setAttribute("value", "Time Remaining: " + remainingTime);
    remainingTime--;
    if (remainingTime < 0) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(`Random number generated: ${randomNumber}`);
      document
        .getElementById("randomNumber")
        .setAttribute("value", "Random Number: " + randomNumber);
      delay = 3000;
      remainingTime = delay / 1000;
    }
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(countdown);
});

//*************************************************************************************************************
// 3. Build a feature for Store's Inventory.
//*************************************************************************************************************

let storeItems = {};
const convert = document.getElementById("convert");

function convertToRupees() {
  Object.keys(storeItems).map((item, key) => {
    storeItems[item] = storeItems[item] * 80;
    storeItems[item] = "₹ " + storeItems[item].toFixed(2);
  });
}

function ConvertToRupees(convertToRupees) {
  storeItems = {
    apple: 0.99,
    banana: 0.69,
    orange: 0.79,
    grapefruit: 1.49,
    watermelon: 4.99,
  };
  convertToRupees();
}

convert.addEventListener("click", () => {
  ConvertToRupees(convertToRupees);
  console.log(storeItems);
});

//*************************************************************************************************************
// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
//*************************************************************************************************************

let Authors = [
  { book: "ds", author: "william Shakespeare", year: 2009 },
  { book: "ds", author: "william Faulkner ", year: 2020 },
  { book: "ds", author: "henry James", year: 2000 },
  { book: "ds", author: "charles Dickens", year: 2007 },
  { book: "ds", author: "fyodor Dostoevsky", year: 2040 },
  { book: "ds", author: "franz Kafka ", year: 2020 },
];

const filter = document.getElementById("filter");
const newAuthors = Authors;

filter.addEventListener("click", () => {
  Authors.map((item) => {
    if (item["year"] < 2010) {
      item["author"] =
        item["author"].charAt(0).toUpperCase() + item["author"].slice(1);
    }
  });
  console.log(Authors);
});

//*************************************************************************************************************
// 5. URL validation.
//*************************************************************************************************************

let url = "";

document.getElementById("url").addEventListener("change", (e) => {
  url = "";
  url += e.target.value;
});

let result = false;

document.getElementById("check").addEventListener("click", () => {
  result = false;
  let regexEmail = /^(http:\/\/|https:\/\/)[\w\d\S]+\.[a-zA-Z]+$/gm;
  result = regexEmail.test(url);
  console.log(result);

  document.getElementById("isValid").setAttribute("value", result);
});

//*************************************************************************************************************
// 6. LinkedIn Profile URL Validator.
//*************************************************************************************************************

let linkedInRegex = /^https:\/\/www.linkedin.com\/in\/[\w-]{5,30}[\d\w]$/gm;

let linkedInUrl = "";

document.getElementById("linkedInUrl").addEventListener("change", (e) => {
  linkedInUrl = e.target.value;
});

let resultUrl;

document.getElementById("checkUrl").addEventListener("click", () => {
  resultUrl = linkedInRegex.test(linkedInUrl);
  document
    .getElementById("isValidLinkedInUrl")
    .setAttribute("value", resultUrl);
  console.log(resultUrl);
});

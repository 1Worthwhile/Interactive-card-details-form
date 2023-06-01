"use strict";
let name_input = document.getElementById("name");
let number_input = document.getElementById("number");
let card_number = document.querySelector(".card_num");
let card_name = document.querySelector(".card_name");
let month_input = document.getElementById("month_input");
let year_input = document.getElementById("year_input");
let cvc_input = document.getElementById("cvc_input");
let card_date = document.querySelector(".card_date");
let card_cvc = document.querySelector(".card_pin");
let submit_btn = document.querySelector(".submit");
let form_section = document.querySelector("form");
let thanks_section = document.querySelector(".thanks_section");

number_input.addEventListener("keyup", writenumber_oncard);
name_input.addEventListener("keyup", writename_oncard);
month_input.addEventListener("keyup", writemonth_oncard);
year_input.addEventListener("keyup", writeyear_oncard);
cvc_input.addEventListener("keyup", writecvc_oncard);
submit_btn.addEventListener("click", confirm);

function writenumber_oncard(e) {
  let con = number_input.parentElement;
  let err = con.querySelector(".err");
  if (isNaN(Number(number_input.value))) {
    err.style.display = "block";
  } else {
    number_input.style.borderColor = "hsl(270, 3%, 87%)";
    err.style.display = "none";
    if (number_input.value.length < 5) {
      let currSet = card_number.querySelector(`.set_1`);
      currSet.textContent = number_input.value;
    } else if (number_input.value.length > 4 && number_input.value.length < 9) {
      let currSet = card_number.querySelector(`.set_2`);
      currSet.textContent = number_input.value.slice(4, 8);
    } else if (
      number_input.value.length > 8 &&
      number_input.value.length < 13
    ) {
      let currSet = card_number.querySelector(`.set_3`);
      currSet.textContent = number_input.value.slice(8, 12);
    } else if (
      number_input.value.length > 12 &&
      number_input.value.length < 17
    ) {
      let currSet = card_number.querySelector(`.set_4`);
      currSet.textContent = number_input.value.slice(12, 16);
    }
  }
}
function writename_oncard() {
  let con = name_input.parentElement;
  let err = con.querySelector(".err");
  card_name.textContent = name_input.value;
  name_input.style.borderColor = "hsl(270, 3%, 87%)";
  err.style.display = "none";
}

function writemonth_oncard() {
  let con = month_input.parentElement;
  let err = con.querySelector(".err");

  if (isNaN(Number(month_input.value)) || month_input.value > 31) {
    err.style.display = "block";
    err.textContent = "invalid month";
  } else {
    month_input.style.borderColor = "hsl(270, 3%, 87%)";
    err.style.display = "none";
    let month = document.querySelector(".month");

    if (parseInt(month_input.value.length) === 1) {
      month.textContent = `0${month_input.value}`;
    } else {
      month.textContent = month_input.value;
    }
  }
}

function writeyear_oncard() {
  let con = year_input.parentElement;
  let err = con.querySelector(".err");

  if (isNaN(Number(year_input.value)) || year_input.value < 23) {
    err.style.display = "block";
    err.textContent = "must be > 23";
  } else {
    err.style.display = "none";
    year_input.style.borderColor = "hsl(270, 3%, 87%)";
    let year = document.querySelector(".year");

    if (parseInt(year_input.value.length) === 1) {
      year.textContent = `0${year_input.value}`;
    } else {
      year.textContent = year_input.value;
    }
  }
}

function writecvc_oncard() {
  let con = cvc_input.parentElement;
  let err = con.querySelector(".err");
  if (isNaN(Number(cvc_input.value))) {
    err.style.display = "block";
    err.textContent = "numbers only";
  } else {
    cvc_input.style.borderColor = "hsl(270, 3%, 87%)";
    err.style.display = "none";
    card_cvc.textContent = cvc_input.value;
  }
}

function confirm() {
  let inputs = document.querySelectorAll("form input");
  inputs.forEach((i) => {
    let con = i.parentElement;
    let err = con.querySelector(".err");
    if (i.value === "") {
      err.style.display = "block";
      err.style.color = "hsl(0, 100%, 66%)";
      err.textContent = "cant be blanck";
      i.style.borderColor = "hsl(0, 100%, 66%)";
    } else if (number_input.value.length !== 16) {
      let num_con = number_input.parentElement;
      let err = num_con.querySelector(".err");
      err.style.display = "block";
      err.textContent = "Not complete";
      number_input.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
      i.style.borderColor = "hsl(270, 3%, 87%)";
      err.style.display = "none";
      form_section.classList.add("remove");
      thanks_section.classList.remove("remove");
    }
  });
}

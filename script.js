const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevIcon = document.querySelector("#prev");
const nextIcon = document.querySelector("#next");

// getting new date, current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevIcon.addEventListener("click", () => {
    currMonth = currMonth - 1;
    if (currMonth < 0) {
        currMonth = 11;
        currYear -= 1;
    }
    date = new Date(currYear, currMonth, new Date().getDate());
    renderCalendar();
});

nextIcon.addEventListener("click", () => {
    currMonth = currMonth + 1;
    if (currMonth > 11) {
        currMonth = 0;
        currYear += 1;
    }
    date = new Date(currYear, currMonth, new Date().getDate());
    renderCalendar();
});

// Add this JavaScript to handle the toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

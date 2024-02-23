const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

let month_picker = document.querySelector('#month-picker');

// Prepare the data to populate the contents of the calendar
const prepareCalendarData = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';

    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
        31,
        28, // leap year check
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    let currentDate = new Date();

    month_picker.innerHTML = month_names[month];

    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div');

        if (i >= first_day.getDay()) {
            day.innerHTML = i - first_day.getDay() + 1;

            if (i - first_day.getDay() + 1 === currentDate.getDate() &&
                year === currentDate.getFullYear() &&
                month === currentDate.getMonth()
            ) {
                day.classList.add('current-date');
            }
        }

        calendar_days.appendChild(day);
    }
};

// Go to last year
document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    prepareCalendarData(currentMonth.value, currentYear.value);
};

// Go to next year
document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    prepareCalendarData(currentMonth.value, currentYear.value);
};

// Today's date (Footer)
let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };

prepareCalendarData(currentMonth.value, currentYear.value);

const todayShowDate = document.querySelector('.date-formate');

const formattedCurrentDate = new Intl.DateTimeFormat(
    'en-US',
    {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    }
).format(currentDate);

todayShowDate.textContent = formattedCurrentDate;
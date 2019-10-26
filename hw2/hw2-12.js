// 12) Create a function that tells us how many days till Friday

function calculateDaysTillFriday() {
    let currentDay = new Date().getDay();
    let remainingDays;

    (currentDay <= 5) ? (remainingDays = (5 - currentDay)) : (remainingDays = 6);

    console.log(remainingDays);
}

calculateDaysTillFriday();
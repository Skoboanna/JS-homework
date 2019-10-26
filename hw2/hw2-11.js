// 11) Create a function that will return the current day name in Polish. 

function getDayInPolish() {
    let currentDay = new Date().getDay();
    let days = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
    ]
    console.log(currentDay);
    return days[currentDay];
}

console.log(getDayInPolish());
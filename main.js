let money   = +prompt("Ваш бюджет на месяц?", ""),
    time    = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    moneyData : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

    if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null
        && a != "" && b != "" && a.length < 50) {
        
        console.log("done!");

        appData.expenses[a] = b;
    } else {
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");

//     if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null
//         && a != "" && b != "" && a.length < 50) {
        
//         console.log("done!");

//         appData.expenses[a] = b;

//         i++;
//     } else {
//         i--;
//     }
// }

appData.moneyPerDay = appData.moneyData / 30;

alert("Ежедневный бюджет: " + appData.moneyData);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средный уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошыбка");
}

alert(money / 30);


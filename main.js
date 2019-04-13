let money, time;

function start() {
    money   = +prompt("Ваш бюджет на месяц?", "");
    while(isNaN(money) || money == "" || money == null) {
        money   = +prompt("Ваш бюджет на месяц?", "");
    }
    
    time    = prompt("Введите дату в формате YYYY-MM-DD", "");
}
start();

let appData = {
    moneyData : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

function chooseExpenses() {
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
}

chooseExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.moneyData / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средный уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошыбка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for(let i = 1; i < 4; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
}



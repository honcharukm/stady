let buttonStart = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),

    expensesItem = document.querySelectorAll(".expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
 

let money, time;

buttonStart.addEventListener("click", function() {
    time    = prompt("Введите дату в формате YYYY-MM-DD", "");
    money   = +prompt("Ваш бюджет на месяц?", "");
    
    while(isNaN(money) || money == "" || money == null) {
        money   = +prompt("Ваш бюджет на месяц?", "");
    }
    
    appData.moneyData = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    let date = new Date(Date.parse(time));
    yearValue.value = date.getFullYear();
    monthValue.value = date.getMonth() + 1;
    dayValue.value = date.getDate();

    //активация кнопок
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener("click", function() {
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null
            && a != "" && b != "" && a.length < 50) {
            console.log("done!");
    
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }

    expensesValue.textContent = sum;

    let expensesSum = 0;

    for(let key in appData.expenses) {
        expensesSum += +appData.expenses[key];
    }

    appData.moneyData -= expensesSum;

    budgetValue.textContent = appData.moneyData;
    dayBudgetValue.textContent = (appData.moneyData / 30).toFixed();
});

optionalExpensesBtn.addEventListener("click", function() {

    for(let i = 0; i < optionalExpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }

});

countBudgetBtn.addEventListener("click", function() {
    if (appData.moneyData != undefined) {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средный уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошыбка";
        }
    } else {
        levelValue.textContent = "Произошла ошыбка";
    }
});

chooseIncome.addEventListener("input", function(elem) {
    // console.log(elem);
    let items = elem.target.value;
    appData.income = items.split(", ");
    
    incomeValue.textContent = appData.income;
});

savings.addEventListener("click", function() {
    if(appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener("input", function() {
    if(appData.savings) {
        let sumValue = +sum.value
            percentValue = +percent.value;

        appData.monthIncome = sumValue/100/12*percentValue;
        appData.yearIncome = sumValue/100*percentValue;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener("input", function() {
    if(appData.savings) {
        let sumValue = +sum.value
            percentValue = +percent.value;

        appData.monthIncome = sumValue/100/12*percentValue;
        appData.yearIncome = sumValue/100*percentValue;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    moneyData : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

// console.log("Наша программа включает в себя данные: ");
// for (let key in appData) {
//     console.log(key);
// }


// BUDGET CONTROLLER MODULE

var budgetController = (function() { // (function(){}) - Это означает анонимную функцию 

    // Создание function constructor
   var Expense = function (id, description, value) { 
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
   };

   Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round(this.value / totalIncome * 100);
        } else {
            this.percentage = -1;
        }
   };

   Expense.prototype.getPercentage = function () {
       return this.percentage;
   };

   var Income = function (id, description, value) { 
    this.id = id;
    this.description = description;
    this.value = value;
   };

   // Массивы для хранения данных о доходах и расходах. Для удобности помещены в одну переменную

   var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
   };

   var data = {
       allItems: {
           exp: [],
           inc: []
       },
       totals: {
           exp: 0,
           inc: 0
       },
       budget: 0,
       percentage: -1 // value not exist
   };

   return {
       addItem: function (type, des, val){
           var newItem, ID;

           // Create New ID
           if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
           } else {
               ID = 0;
           }

            // Create new item based on 'inc' or 'exp'
           if (type === 'exp') {
            newItem = new Expense (ID, des, val);
        } else if (type === 'inc') {
            newItem = new Income (ID, des, val);
        }

        // Добравление в data струкуру
        data.allItems[type].push(newItem); // [type] - выбирает значение параметра в переменной. Type каждый раз берется из var addItem

        //return new element
        return newItem;
       },

       deleteItem: function(type, id) {
        
        var ids, index;

        // Построение массива с ID элементов определенного типа (доходы или расходы)

        ids = data.allItems[type].map(function(current) {
            return current.id;
        });

        index = ids.indexOf(id); // Возвращает id из массива

        if (index !== -1) {
            data.allItems[type].splice(index, 1); // Удаляет один элемент от третьего в массиве
        }

       },

       calculateBudget: function () {

            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100); 
        } else {
            data.parcentage = -1;
        }
       },

       calculatePercentages: function() {

            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
       },

       getPercentages: function () {

            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPerc;
       },

       getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
       },

       testing: function() {
           console.log(data);
       }
   };

}) (); // () - Скобки в конце означают немедленное выполнение функции



// UI CONTROLLER MODULE

var UICOntroller = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenceLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    }

    var formatNumber = function(num, type) {
        var numSplit, int, dec, type;
        /* 
        + or -
        2 decimal points
        comma separating the thouthands

        2375.7544 --> + 2,375.75

        */

        num = Math.abs(num); // Аналог модуля, удаляет знак
        num = num.toFixed(2); // Два знака после точки
        
        numSplit = num.split('.');

        int = numSplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    };

    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    return {
            getInput: function () {
                return {
                type: document.querySelector(DOMStrings.inputType).value, // Выбирает value, в данном случе между inc и exp
                description: document.querySelector(DOMStrings.inputDescription).value, // Выбирает описание
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value) // Выбирает значение суммы и конвертирует через parseFloat в число
                }
            },

    addListItem: function (obj, type) {
        // Create HTML strings with placeholder text 
        var html, newHtml, element;

      if (type === 'inc') {
          
        element = DOMStrings.incomeContainer;

        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';}
      else if (type = 'exp') {

        element = DOMStrings.expenseContainer;

        html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      };

        // Replase the placeholder text with some actual data

        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));       

        // Insert or delete HTML into the DOM

        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem: function(selectorID) {

        var el=document.getElementById(selectorID);

        el.parentNode.removeChild(el);

    },

    //Очистка полей ввода

    clearFields: function () {
        var fields, fieldsArr;

        fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

        fieldsArr = Array.prototype.slice.call(fields);

        fieldsArr.forEach(function (current,index,array) {
            current.value = "";
        });

        //fieldsArr[0].focus();
    },

    displayBudget: function(obj) {

        var type;
        obj.budget > 0 ? type = 'inc' : type ='exp';

        document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
        document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMStrings.expenceLabel).textContent = formatNumber(obj.totalExp, 'exp');

        // Проверка на отрацательный процент, если расходы больше доходов
        if (obj.percentage > 0) {
            document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%'; 
        } else {
            document.querySelector(DOMStrings.percentageLabel).textContent = '---'
        }

    },

    displayPercentages: function (percentages) {

        var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

        var nodeListForEach = function(list, callback) {
            for (var i = 0; i < list.length; i++) {
                callback(list[i], i);
            }
        };

        nodeListForEach(fields, function(current, index) {

            if (percentages[index] > 0) {
            current.textContent = percentages[index] + '%';
        } else {
            current.textContent = '---';
        }
        });
    },

    displayMonth: function() {
        var now, year, month, months;

        now = new Date();
        //var christmas = new Date(2016, 11, 25);

        months =[
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Nowember', 'December'
        ];
        month = now.getMonth();

        year = now.getFullYear();
        document.querySelector(DOMStrings.dateLabel).textContent = months[month] +' ' + year;

    },

    changedType: function() {
        
        var fields = document.querySelectorAll(
            DOMStrings.inputType + ',' +
            DOMStrings.inputDescription + ',' +
            DOMStrings.inputValue);

        nodeListForEach(fields, function(cur){
            cur.classList.toggle('red-focus');
        });

        document.querySelector(DOMStrings.inputButton).classList.toggle('red');

    },

    getDOMStrings: function() {
        return DOMStrings;
    }
    };
}) ();

    // Две анонимные функции не знают о существованиие друг друга





// GLOBAL APP CONTROLLER *********************************************

var controller = (function (budgetCtrl, UICtrl) {

    var setupEventLinteners = function () {

        var DOM = UICOntroller.getDOMStrings();
        
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
     
         if (event.keyCode === 13 || event.which === 13) { // Выбираем действие на "Enter"
             
         ctrlAddItem; // То же действие что и при нажатии кнопки
     
         }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    };

    var updateBudget = function () {

        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 2. Display the budget on UI
        UICOntroller.displayBudget(budget);
    }

    var updatePercentages = function () {
        
        // 1. Calculate percentages
        budgetCtrl.calculatePercentages();

        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);

    };

    var ctrlAddItem = function () {

    // 1. Get the field input data
    var input, newItem;
    
    input = UICtrl.getInput();
    console.log(input);

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

    // 2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add new item to the UI
    UICtrl.addListItem(newItem, input.type);

    // 4. clear the fields
    UICtrl.clearFields();

    // 5. Calculate and update budget
        updateBudget();

    // 6. Calculate and update percentages
        updatePercentages();

    }};

    var ctrlDeleteItem = function (event) {
        var itemId, splitId, type, ID;

        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id; // Выбираем родительский элемент при нажатии на объект (4 уровня вверх)

        if (itemId) {

            //inc-1
            splitId = itemId.split('-');
            type = splitId[0]; // Выбор первого элемента из разбитого на части Id
            ID = parseInt(splitId[1]); // Конвентируем строку в число

            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. Delete item from UI
            UICtrl.deleteListItem(itemId);

            // 3. Update and show the new budget
            updateBudget();

            // 4. Calculate and update percentages
            updatePercentages();
        }

    };

    return { //Автоматический запуск функции EventListener
        init: function() {
            console.log('App has started');
            UICtrl.displayMonth();
            UICOntroller.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            }); // обнуление при старте программы
            setupEventLinteners();
        }
    };


}) (budgetController, UICOntroller); // Теперь controller знает о других двух модулях (переменных) и может использовать их для рассчетов

controller.init();

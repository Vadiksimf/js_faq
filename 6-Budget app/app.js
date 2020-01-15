// BUDGET CONTROLLER MODULE

var budgetController = (function() { // (function(){}) - Это означает анонимную функцию 

    // Создание function constructor
   var Expense = function (id, description, value) { 
    this.id = id;
    this.description = description;
    this.value = value;
   };

   var Income = function (id, description, value) { 
    this.id = id;
    this.description = description;
    this.value = value;
   };

   // Массивы для хранения данных о доходах и расходах. Для удобности помещены в одну переменнуюы

   var data = {
       allItems: {
           exp: [],
           inc: []
       },
       totals: {
           exp: 0,
           inc: 0
       }
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
        expenseContainer: '.expenses__list'
    }

    return {
            getInput: function () {
                return {
                type: document.querySelector(DOMStrings.inputType).value, // Выбирает value, в данном случе между inc и exp
                description: document.querySelector(DOMStrings.inputDescription).value, // Выбирает описание
                value: document.querySelector(DOMStrings.inputValue).value // Выбирает значение
                }
            },

    addListItem: function (obj, type) {
        // Create HTML strings with placeholder text 
        var html, newHtml, element;

      if (type === 'inc') {
          
        element = DOMStrings.incomeContainer;

        html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';}
      else if (type = 'exp') {

        element = DOMStrings.expenseContainer;

        html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      };

        // Replase the placeholder text with some actual data

        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value);       

        // Insert HTML into the DOM

        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    getDOMStrings: function() {
        return DOMStrings;
    }
    };
}) ();

    // Две анонимные функции не знают о существованиие друг друга

// GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {

    var setupEventLinteners = function () {

        var DOM = UICOntroller.getDOMStrings();
        
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
     
         if (event.keyCode === 13 || event.which === 13) { // Выбираем действие на "Enter"
             
         ctrlAddItem; // То же действие что и при нажатии кнопки
     
         }
     
        });
     
     
    };


    var ctrlAddItem = function () {

    // 1. Get the field input data

    var input, newItem;
    
    input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budget controller

    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add new item to the UI

    UICtrl.addListItem(newItem, input.type);

    // 4. Calculate the budget

    // 5. Display the budget on UI


    }

    return { //Автоматический запуск функции EventListener
        init: function() {
            setupEventLinteners();
        }
    };


}) (budgetController, UICOntroller); // Теперь controller знает о других двух модулях (переменных) и может использовать их для рассчетов

controller.init();

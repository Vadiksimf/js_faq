// BUDGET CONTROLLER MODULE

var budgetController = (function() { // (function(){}) - Это означает анонимную функцию 

   

}) (); // () - Скобки в конце означают немедленное выполнение функции

// UI CONTROLLER MODULE

var UICOntroller = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDs: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
            getInput: function () {
                return {
                type: document.querySelector(DOMStrings.inputType).value, // Выбирает value, в данном случе между inc и exp
                description: document.querySelector(DOMStrings.inputDs).value, // Выбирает value, в данном случе между inc и exp
                value: document.querySelector(DOMStrings.inputValue).value // Выбирает value, в данном случе между inc и exp
                }
            },

    getDOMStrings: function () {
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

    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budget controller

    // 3. Add new item to the UI

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

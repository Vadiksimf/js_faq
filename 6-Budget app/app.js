// BUDGET CONTROLLER MODULE

var budgetController = (function() { // (function(){}) - Это означает анонимную функцию 

   

}) (); // () - Скобки в конце означают немедленное выполнение функции

// UI CONTROLLER MODULE

var UICOntroller = (function(){

    return {
            getInput: function () {
                return {
                type: document.querySelector('.add__type').value, // Выбирает value, в данном случе между inc и exp
                description: document.querySelector('.add__description').value, // Выбирает value, в данном случе между inc и exp
                vvalue: document.querySelector('.add__value').value // Выбирает value, в данном случе между inc и exp
                }
            }
    };
}) ();

    // Две анонимные функции не знают о существованиие друг друга

// GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

    // 1. Get the field input data

    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budget controller

    // 3. Add new item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on UI


    }

   document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

   document.addEventListener('keypress', function (event) {

    if (event.keyCode === 13 || event.which === 13) { // Выбираем действие на "Enter"
        
    ctrlAddItem; // То же действие что и при нажатии кнопки

    }

   });



}) (budgetController, UICOntroller); // Теперь controller знает о других двух модулях (переменных) и может использовать их для рассчетов
// define variable to store all expenses
var expenses = [];

// Define function that creates expense entry obj
// Input expenses:
// variable
// fixed
function newExpense(date, type, category, cost, place, tags){
  var expense = {};

  expense.date = date;
  expense.type = type;
  expense.category = category;
  expense.cost = cost;
  expense.place = place;
  expense.tags = tags;

  expenses.push(expense);
  return expenses;
}

// Input eating out expenses for 2 wks
// Input grocery expenses for 2 wks
// TO DO: if data not manually inputted, provide default data using ':'
var expenses_wk1 = [
  { date: 'November 5, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -5.28,   place: 'Roasting Plant Coffee', tags: []},
  { date: 'November 5, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -11.00,  place: 'The MasalaWala', tags: []},
  { date: 'November 6, 2015',   type: 'expense',   category: 'Food & Drink',   cost: -6.47,   place: 'Doughnut Plant', tags: []},
  { date: 'November 6, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -2.00,    place: 'Kula Yoga Williamsburg', tags: []},
  { date: 'November 6, 2015',   type: 'expense',  category: 'Groceries',      cost: -9.00,    place: 'Mr. Piña Fruit And Vegetables', tags: []},
  { date: 'November 7, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -20.00,   place: 'Norma\'s', tags: []},
  { date: 'November 7, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -10.00,   place: 'Tula\'s', tags: []},
  { date: 'November 8, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -8.00,    place: 'Vegetarian Ginger', tags: []},
  { date: 'November 9, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -7.62,    place: 'Tiny\'s Giant Sandwich Shop', tags: []},
  { date: 'November 9, 2015',   type: 'expense',  category: 'Food & Drink',   cost: -2.65,    place: 'Dough', tags: []},
  { date: 'November 10, 2015',  type: 'expense',  category: 'Groceries',      cost: -67.06,   place: 'hi mango', tags: []},
  { date: 'November 10, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -36.31,   place: '12 Chairs', tags: []},
  { date: 'November 11, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -12.79,  place: 'No. 7 Sub', tags: []},
  { date: 'November 11, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -5.25,   place: 'Stumptown Coffee Roasters', tags: []}
];
var expense_wk2 = [
  { date: 'November 12, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -5.28,   place: 'Roasting Plant Coffee', tags: []},
  { date: 'November 12, 2015',  type: 'expense',  category: 'Groceries',      cost: -2.00,    place: 'not provided', tags: []}, 
  { date: 'November 12, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -25.00,  place: 'Chimu Express', tags: []},
  { date: 'November 13, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -7.25,   place: 'El Rey Coffee Bar & Luncheonette', tags: []},
  { date: 'November 14, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -7.00,   place: 'Lucy\'s Vietnamese Kitchen', tags: []}, 
  { date: 'November 14, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -37.75,  place: 'Bahari Estiatorio', tags: []},
  { date: 'November 15, 2015',  type: 'expense',  category: 'Groceries',      cost: -24.35,   place: 'hi mango', tags: []},
  { date: 'November 16, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -12.00,  place: 'Irving Farm Coffee Roasters', tags: []},
  { date: 'November 16, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -18.00,  place: 'Cocoron', tags: []},
  { date: 'November 17, 2015',  type: 'expense',  category: 'Food & Drink',   cost: -4.74,   place: 'Roasting Plant Coffee', tags: []},
  { date: 'November 18, 2015',  type: 'expense',  category: 'Groceries',      cost: -24.00,   place: 'Fine Fare', tags: []}
];

// Count num times ate out every week
// param is arr of objects -- expenses
function timesDidSomething(wk, category){
  return wk.reduce(function(count, expense){
    return expense['category'] === category ? count + 1 : count; 
  }, 0);
}
console.log(timesDidSomething(expenses_wk1, 'Food & Drink'));
console.log(timesDidSomething(expenses_wk1, 'Groceries'));

// Calc total cost on eating out and groceries
function totalCost(wk, category){
  return wk.reduce(function(total, expense){
    return expense['category'] === category ? total + expense['cost'] : total;
  }, 0);
}
console.log(totalCost(expenses_wk1, 'Food & Drink'));
console.log(totalCost(expenses_wk1, 'Groceries'));

// Calc ratio eating out : groceries
function compareExpenses(wk, category1, category2){
  var ratio = Math.round(totalCost(wk, category1) / totalCost(wk, category2));
  return category1 + ' to ' + category2 + ' ratio is ' + ratio + ' : 1';
}
console.log(compareExpenses(expenses_wk1, 'Food & Drink', 'Groceries'));
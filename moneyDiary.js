var expenses = [];

// ie. [
  // {date: 'Mon, Nov 30, 2015', cost: '$60', category: 'groceries', location: 'Whole Foods', tags: ['being well']},
  // {date: 'Mon, Nov 30, 2015', cost: '$30', category: 'eating out', location: '12 Chairs', tags: ['building relationships']} 
// ]

// ie. // {date: 'Sun, Nov 29, 2015', cost: '$185', category: 'fitness and well-being', location: 'Kula Yoga', tags: ['being well']} 
function logExpenses(expenseData){
  if (Array.isArray(expenseData)){
    for(var i = 0; i < expenseData.length; i++){
      for(var item in expenseData[i]){
        console.log(item + ': ' + expenseData[i][item]);
      }
    }
  } else {
    for (var item in expenseData){
      console.log(item + ': ' + expenseData[item]);
    }
  }
}

function getExpensesLogged(items, callback){
  expenses.push(items);
  callback(items);
}

getExpensesLogged([{date: 'Mon, Nov 30, 2015', cost: '$60', category: 'groceries', location: 'Whole Foods', tags: ['being well', ' saving']}, {date: 'Mon, Nov 30, 2015', cost: '$30', category: 'eating out', location: '12 Chairs', tags: ['building relationships']}], logExpenses);
getExpensesLogged({date: 'Sun, Nov 29, 2015', cost: '$185', category: 'fitness and well-being', location: 'Kula Yoga', tags: ['being well']}, logExpenses);

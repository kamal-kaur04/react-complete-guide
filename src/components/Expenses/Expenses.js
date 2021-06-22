import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses in this Year!</p>;
  //
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map(
  //     (expense) => (
  //       <ExpenseItem
  //         key = {expense.id}
  //         title = {expense.title}
  //         amount = {expense.amount}
  //         date = {expense.date}
  //       />
  //     ))
  // }

  return (
    <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter = {filterChangeHandler}
        />
        {filteredExpenses.length === 0 && <p>No Expenses in this Year!</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map(
            (expense) => (
              <ExpenseItem
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
              />
            ))
          }
    </Card>
  );
}

export default Expenses;

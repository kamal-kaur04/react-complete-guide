import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  let expensesContent = <p>No Expenses in this Year!</p>;

  if (props.items.length === 0) {
    return(
      <h2 className='expenses-list__fallback'>
        No Expenses in this Year!
      </h2>
    );
  }

  return (
    <ul className="expense-list">
      {props.items.map(
        (expense) => (
          <ExpenseItem
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
          />
        ))}
        </ul>
  );
}

export default ExpensesList;

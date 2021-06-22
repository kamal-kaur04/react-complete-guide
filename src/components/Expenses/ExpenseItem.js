//import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) => {

  //const [title, setTitle] = useState(props.title); //Array Destructuring - to store bot elements in separate variables or constants
  //console.log('ExpenseItem');

  //let title = props.title;

  // const clickHandler = () => {
  //   //title = 'Updated';
  //   setTitle('Updated');
  //   //console.log(title);
  // };
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // const month = props.date.toLocaleString('en-US',{month: 'long'});
  // const day = props.date.toLocaleString('en-US',{day: '2-digit'});
  // const year = props.date.getFullYear();

  return (
    <li>
    <Card className = 'expense-item'>
      <ExpenseDate date= {props.date} />
      <div className = "expense-item__description">
        <h2> {props.title} </h2>
        <div className= "expense-item__price"> ${props.amount} </div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;

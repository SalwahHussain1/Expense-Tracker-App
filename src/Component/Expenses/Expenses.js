
import React, {useState} from 'react';
import Expenseitem from "./Expenseitem";
import './Expenses.css';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2024')
   const filteredChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
   }
   const filtredByYear = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
   })
  return (
    <Card className='expenses'>
      
      <ExpenseFilter selected = {filteredYear} onFilteredChangeYear= {filteredChangeHandler}  />

      {filtredByYear.length === 0 ?(<h3>No Expense</h3>) : ( filtredByYear.map((expense) => {

         
    return(  
    <Expenseitem 
    key = {expense.id}
     title={expense.title}
     amount={expense.amount} 
     date={expense.date}
     />)
         }))}
     
     </Card>
    

  );
}

export default Expenses;

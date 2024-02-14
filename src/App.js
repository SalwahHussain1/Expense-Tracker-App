
import './App.css';
import Expenses from './Component/Expenses/Expenses';
import NewExpense from "./Component/NewExpense/NewExpense"
import React, {useState} from "react";
const dummyExpenses =[
  {id: 0, title: "Pen" ,amount: 980.9, date: new Date(2022, 9, 6)},
  { id: 1, title: "Blanket" ,amount: 70.7, date: new Date(2020, 2, 10)},
  { id: 2, title: "Painting Brush" ,amount: 420.9, date: new Date(2023, 2, 6)}
];
function App() {

  const [expenses, setExpenses] = useState(dummyExpenses)
  const getExpenseDataHandler = data =>{
    setExpenses((prevState) =>{
      return [data, ...prevState]
    })
  }
  return (
    <div className="App">
   <h1>THE EXPENSE TRACKER APP</h1>
   <NewExpense onGetExpenseData = {getExpenseDataHandler}/>
   <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import EXPENSES from "./constants/EXPENSES";

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const getNewExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  };

  return (
    <div>
      <NewExpense onSubmit={getNewExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

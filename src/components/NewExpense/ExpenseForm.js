import React, { useState } from "react";

import "../../styles/NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {
  const addExpenseHandler = (event) => {
    event.preventDefault();

    const formData = {
      id: Math.random().toString(),
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSubmit(formData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={addExpenseHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

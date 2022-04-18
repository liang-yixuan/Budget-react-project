import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "../../styles/Expenses/Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;

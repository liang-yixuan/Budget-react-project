import ExpenseForm from "./ExpenseForm";
import "../../styles/NewExpense/NewExpense.css";

const NewExpense = (props) => {
  const onSubmitHandler = (formData) => {
    props.onSubmit(formData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={onSubmitHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;

import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please, enter a valid name and / or age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please, enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const agerNameChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label HTMLfor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />

          <label HTMLfor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={agerNameChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

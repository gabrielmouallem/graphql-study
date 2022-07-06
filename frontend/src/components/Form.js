import { useMutation } from "@apollo/client";
import React from "react";
import { useRef } from "react";
import { CREATE_USER_MUTATION } from '../GraphQL/Mutation';

function Form() {

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName.current,
        lastName: lastName.current,
        email: email.current,
        password: password.current
      }
    })

    if (error) {
      console.log({error});
    }
  }

  return (
    <div>
      <div><input type="text" placeholder="First Name" onChange={(e) => {firstName.current = e.target.value}} /></div>
      <div><input type="text" placeholder="Last Name" onChange={(e) => {lastName.current = e.target.value}} /></div>
      <div><input type="text" placeholder="Email" onChange={(e) => {email.current = e.target.value}} /></div>
      <div><input type="text" placeholder="Password" onChange={(e) => {password.current = e.target.value}} /></div>
      <button onClick={addUser}>Create User</button>
    </div>
  );
}

export default Form;

import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { addNewUser } from "../graphql/queries/mutations";

const StyledForm = styled.form`
  height: 75vh;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin: 1rem auto 4rem;
  padding: 1rem 0;

  .field {
    border: none;
  }

  label {
    display: inline-block;
    width: 90px;
    color: var(--orange-medium);
    margin: 10px;
    border: none;
  }

  input {
    border: none;
    appearance: none;
  }

  button {
    appearance: none;
    border: none;
    margin: 10px;
    padding: 5px;
    background-color: var(--gray-darkest);
    color: var(--orange-medium);
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 1rem;
    border-radius: 15px;
  }
  button:hover {
    background-color: var(--gray-dark);
    cursor: pointer;
  }
`;

interface IForm {
  ime: string;
  prezime: string;
  email: string;
  setIme: (i: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  setPrezime: (p: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  setEmail: (e: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  setCompleted: (c: boolean) => void;
}

const Form = ({
  ime,
  prezime,
  email,
  setIme,
  setPrezime,
  setEmail,
  setCompleted,
}: IForm) => {
  const [addUser, arg] = useMutation(addNewUser, {
    variables: {
      data: { firstName: ime, lastName: prezime, email: email },
    },
    // to observe what the mutation response returns
    onCompleted: (data) => {
      console.log(data);
    },
  });

  // if (loading) return <p className="loading">Slanje podataka u toku...</p>;
  // if (error)
  //   return (
  //     <p className="error">
  //       Greska u prijavi! Refresujte stranicu i probajte ponovo.
  //     </p>
  //   );

  return (
    <StyledForm
      onSubmit={async (e) => {
        e.preventDefault();
        // console.log(ime, prezime, email);
        // console.log(error);
        console.log(arg);
        // console.log(loading);

        try {
          await addUser();
          setCompleted(true);
        } catch (err) {
          console.log("Error!");
        }
      }}
    >
      <fieldset className="field">
        <label>Ime:</label>
        <input
          type="text"
          value={ime}
          onChange={(e) => setIme(e.target.value, e)}
          placeholder="Kreativni"
          required
        />
      </fieldset>
      <fieldset className="field">
        <label>Prezime:</label>
        <input
          type="text"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value, e)}
          placeholder="Univerzum"
          required
        />
      </fieldset>
      <fieldset className="field">
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value, e)}
          placeholder="kreativni@univerzum.com"
          required
        />
      </fieldset>
      <button type="submit">Prijavi se</button>
    </StyledForm>
  );
};

export default Form;

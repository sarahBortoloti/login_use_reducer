import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: 24px;
    width: 400px;
    padding: 24px;
  }

  button {
    margin-top: 24px;
    padding: 24px;
    color: red;
    border: 1px solid red;
    background-color: white;
    width: 200px;
    cursor: pointer;
  }
`;

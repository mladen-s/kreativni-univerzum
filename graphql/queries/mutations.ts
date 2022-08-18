import { gql } from "@apollo/client";

const addNewUser = gql`
  mutation AddNewUser($data: UserCreateInput) {
    addNewUser(data: $data) {
      firstName
      lastName
      email
    }
  }
`;

export { addNewUser };

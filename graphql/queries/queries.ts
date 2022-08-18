import { gql } from "@apollo/client";

const getUserListQuery = gql`
  query UsersQuery {
    users {
      firstName
      lastName
      email
    }
  }
`;

export { getUserListQuery };

import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { ReactNode, useEffect, useState } from "react";
import { getUserListQuery } from "../graphql/queries/queries";
import { MdClose } from "react-icons/md";

interface IUser {
  firstName: String;
  lastName: String;
  email: String;
}

const StyledList = styled.ul`
  color: var(--orange-medium);
  height: 70vh;
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  padding: 1rem 0;
`;

interface IUL {
  setShowList: (e: boolean) => void;
}

const UserList = ({ setShowList }: IUL) => {
  const { loading, error, data, refetch } = useQuery(getUserListQuery);
  const [count, setCount] = useState(0);
  const [list, setList] = useState<ReactNode | ReactNode[]>();

  useEffect(() => {
    setList(
      data &&
        data.users.map(({ firstName, lastName, email }: IUser) => {
          setCount(count + 1);

          return (
            <li key={count}>
              <p>
                {firstName} {lastName}, {email}
              </p>
            </li>
          );
        })
    );
  }, [loading, data]);

  if (loading) return <p className="loading"> Ucitavanje...</p>;
  if (error)
    return (
      <p className="error">Doslo je do greske! Molimo osvezite stranicu.</p>
    );

  return (
    <div className="modal lista-cekanja">
      <StyledList>{list}</StyledList>
      <button className="close">
        <MdClose
          size={"50px"}
          onClick={() => {
            refetch();
            setShowList(false);
          }}
        />
      </button>
    </div>
  );
};

export default UserList;

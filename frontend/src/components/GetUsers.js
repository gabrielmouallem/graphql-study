import React from 'react';
import {useQuery, gql} from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';
import { useEffect, useState } from 'react';

function GetUsers() {
  const {error, loading, data} = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    if (data) setUsers(data.getAllUsers);
  }, [data]);

  console.log({users});

  return (
    <div>
      {users.map(el => <h1 key={`Users_${el.id}`}>{el.firstName}</h1>)}
    </div>
  )
}

export default GetUsers;
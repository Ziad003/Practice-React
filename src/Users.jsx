import React, { use, useState } from 'react';
import User from './User';
import SavedUsers from './SavedUsers';

const Users = ({userPromise}) => {
    const users=use(userPromise);
    const [savedUsers,setSavedUsers]=useState([]);
    const manageUsers=(users)=>{
        const newUsers=[...savedUsers,users];
        setSavedUsers(newUsers);
    }
    const manageUsersInsave=(id)=>{
        const remainingUsers=savedUsers.filter(user=>user.id!==id)
        setSavedUsers(remainingUsers);
    }

    return (
        <div>
            <h3>Number of users: {users.length}</h3>
            <p>Saved Users: 
                {
                    savedUsers.map(user=><SavedUsers manageUsersInsave={manageUsersInsave} user={user}></SavedUsers>)
                }
            </p>
            {
                users.map(user=><User key={user.id} manageUsers={manageUsers} user={user}></User>)
            }
        </div>
    );
};

export default Users;
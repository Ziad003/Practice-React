import React, { use } from 'react';

const NewUsers = ({getUsers}) => {
    const usersInfo=use(getUsers);
    console.log(usersInfo)
    return (
        <div>
            
        </div>
    );
};

export default NewUsers;
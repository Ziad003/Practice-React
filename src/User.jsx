import React from 'react';

const User = ({user,manageUsers}) => {
    return (
        <div style={{
            border: '1px solid green',
            padding: '5px',
            textAlign: "center",
            marginTop: "5px"
        }}>
            <h3>Name: {user.name}</h3>
            <p>Addre: {user.address.city}</p>
            <button onClick={()=>{manageUsers(user)}}>Save</button>
        </div>
    );
};

export default User;
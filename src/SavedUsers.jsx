import React from 'react';

const SavedUsers = ({user,manageUsersInsave}) => {
    return (
        <div style={{border:'1px solid', padding:'5px',margin:'5px'}}>
            <p>Name:{user.name}</p>
            <button onClick={()=>{manageUsersInsave(user.id)}}>X</button>
        </div>
    );
};

export default SavedUsers;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const selectedUsers = useSelector((state) => state.users.selectedUsers);
  const isSelected = selectedUsers.some((u) => u.id === user.id);

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "5px" }}>
      <p>{user.name}</p>
      {isSelected ? (
        <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
      ) : (
        <button onClick={() => dispatch(addUser(user))}>Add</button>
      )}
    </div>
  );
};

export default UserItem;

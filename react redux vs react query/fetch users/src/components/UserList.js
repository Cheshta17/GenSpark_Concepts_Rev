import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";
import UserItem from "./UserItem";

const UserList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users.</p>;

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;

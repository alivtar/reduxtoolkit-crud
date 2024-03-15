import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/Users";

interface IUserCart {
  userId: string | number;
  name: string;
  userName: string;
}

function UserCart({ userId, name, userName }: IUserCart) {
  const [newUserName, setNewUserName] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <div className="p-8 rounded-8 border-1 border-solid mb-4 last:mb-0">
      <h1 className="mb-2">Name: {name}</h1>
      <p className="mb-2">Username: {userName}</p>
      <div className="flex items-center gap-x-4">
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          className="border-1 rounded-4 p-8"
          placeholder="New Username ..."
        />
        <button
          className="bg-purple-600 p-8 rounded-8 text-white"
          onClick={() => {
            dispatch(updateUser({ id: userId, newUsername: newUserName }));
            setNewUserName("");
          }}
        >
          Update Username
        </button>
      </div>
    </div>
  );
}

export default UserCart;

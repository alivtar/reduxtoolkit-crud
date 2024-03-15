import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/slices/Users";

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
      <div className="mb-2 flex items-start justify-between">
        <div>
          <h1 className="mb-2">Name: {name}</h1>
          <p className="">Username: {userName}</p>
        </div>

        <button
          className="bg-red-600 p-8 rounded-8 text-white"
          onClick={() => dispatch(deleteUser({ userId }))}
        >
          Delete
        </button>
      </div>

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

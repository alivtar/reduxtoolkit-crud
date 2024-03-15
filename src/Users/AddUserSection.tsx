import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/Users";

function AddUserSection() {
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <div className="border-1 border-solid rounded-4 p-4 mb-4">
      <div className="flex items-center gap-x-1 mb-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name ..."
          className="border-1 rounded-4 p-4"
        />

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username ..."
          className="border-1 rounded-4 p-4"
        />
      </div>

      <button
        className="bg-purple-600 p-8 rounded-8 text-white"
        onClick={() => {
          const _id = Math.random().toString(32).slice(7);

          dispatch(
            addUser({
              id: _id,
              name,
              username: userName,
            })
          );

          setName("");
          setUserName("");
        }}
      >
        Create User
      </button>
    </div>
  );
}

export default AddUserSection;

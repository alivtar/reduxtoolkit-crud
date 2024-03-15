import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { IRootState } from "./redux/store";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  const usersList = useSelector((state: IRootState) => state.usersData.list);

  return (
    <div className="App">
      <div className="add-user">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name ..."
        />

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username ..."
        />

        <button>Create User</button>
      </div>

      <div className="listing-users">
        {usersList.map((user) => {
          return (
            <div key={user.id} className="">
              {user.name} {user.username}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "./redux/store";
import UserCart from "./Users/UserCart";
import AddUserSection from "./Users/AddUserSection";

function App() {
  const usersList = useSelector((state: IRootState) => state.usersData.list);

  return (
    <div className="mx-auto max-w-[600px]">
      <AddUserSection />

      <div className="listing-users">
        {usersList.map((user) => {
          return (
            <UserCart key={user.id} name={user.name} userName={user.username} />
          );
        })}
      </div>
    </div>
  );
}

export default App;

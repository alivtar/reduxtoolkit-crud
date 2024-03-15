import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import UserCart from "./UserCart";

function ListUsers() {
  const usersList = useSelector((state: IRootState) => state.usersData.list);

  return (
    <div className="">
      {usersList.map((user) => {
        return (
          <UserCart
            key={user.id}
            userId={user.id}
            name={user.name}
            userName={user.username}
          />
        );
      })}
    </div>
  );
}

export default ListUsers;

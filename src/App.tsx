import AddUserSection from "./Users/AddUserSection";
import ListUsers from "./Users/ListUsers";

function App() {
  return (
    <div className="mx-auto max-w-[600px]">
      <AddUserSection />

      <ListUsers />
    </div>
  );
}

export default App;

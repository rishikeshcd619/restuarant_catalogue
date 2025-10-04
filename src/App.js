import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  const user = {
    name: "Rishi",
  };
  return (
    <div className="App">
      <Provider store={appStore}>
        <UserContext.Provider value={user}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default App;

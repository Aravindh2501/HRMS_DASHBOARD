import { Provider } from "react-redux";
import AppRoute from "./routes/AppRoute";
import store from "./components/redux/store";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;

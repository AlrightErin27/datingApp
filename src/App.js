import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./container/Login";

function App() {
  return (
    <div className="App">
      <h1>🚧 Dating App Log On Page 🚧</h1>
      <div className="toDo">
        <ol>
          <li>logon: input for name and password</li>
          <li>
            profile page: edit your profile (images & description & what you are
            looking for), shows who you liked and who liked you
          </li>
          <li>nav bar: log out, profile, search/singles, messages</li>
          <li>
            shows singles/search: randomly generated with a few restriction, be
            able to like or send messages
          </li>
          <li>logoff</li>
          <li>messages/inbox</li>
        </ol>
      </div>

      {/* ROUTES */}
      <Login />
    </div>
  );
}

export default App;


import { useDispatch } from "react-redux";
import "./App.css";
import Profile from "./components/Profile";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice
  }
})


function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
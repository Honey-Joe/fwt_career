import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import JobListingPage from "./pages/HomePage/JobListingPage/JobListingPage";

const App = () => {
  return (
    <>
      <div className=" h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

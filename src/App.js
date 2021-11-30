import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// pages & components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                (!user && <Navigate to="/login" />) || (user && <Home />)
              }
            />
            <Route
              path="/login"
              element={(user && <Navigate to="/" />) || (!user && <Login />)}
            />
            <Route
              path="/signup"
              element={(user && <Navigate to="/" />) || (!user && <Signup />)}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

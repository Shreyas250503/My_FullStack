import Login from './pages/login/login';
import Register from './pages/register/register';


import {
  createBrowserRouter,
  RouterProvider,
//   Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import LeftBar from './components/leftBar/leftBar.jsx';
import RightBar from './components/rightBar/rightBar.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import "./styles.scss";
import { DarkModeContext } from './context/DarkModeContext.js';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext.js';

function App() {
   
   const {currentUser} = useContext(AuthContext);
 //  const currentUser = true;
    const {darkMode} = useContext(DarkModeContext);
    console.log(darkMode)

    const Layout = () => {
        return (
            <div className={`theme-${darkMode ? "dark" :  "light"}`}>
                <Navbar />

                <div style={{ display: "flex" }} >

                    <LeftBar />
                    <div style={{ flex: 6 }}>
                        <Outlet />
                    </div>
                    <RightBar />

                </div>
            </div>

        );
    };

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }

        return children;
    };

    const router = createBrowserRouter([
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/Profile/:id",
              element: <Profile />,
            },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
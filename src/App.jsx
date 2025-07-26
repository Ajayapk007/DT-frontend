import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";
import Profile from "./component/Profile";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path : '/',
    element: <Body />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ]
  }
])

export default App;

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Home from "./component/Home";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ProfileEdit from "./component/ProfileEdit";
const App = () => {
  return (
    <>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path : '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/profileEdit',
        element: <ProfileEdit />
      },
    ]
  },
  {
      path: '/login',
      element: <Login />
  },
])

export default App;

import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Statspage from "../pages/statsPage/Statspage";
import FriendDetails from "../pages/friendDetails/FriendDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/friendDetails/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: () => fetch("/friends.json")
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/stats",
        element: <Statspage></Statspage>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

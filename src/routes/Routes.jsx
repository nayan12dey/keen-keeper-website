import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Statspage from "../pages/statsPage/Statspage";


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

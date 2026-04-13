import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";


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
      }
    ],
    errorElement: <h2>Page Not found</h2>
  }
])

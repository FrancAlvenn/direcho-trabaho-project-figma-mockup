import React from "react";
import "./App.css";
import EventViewPage from "./pages/EventViewPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/event_view/:event_id",
    element: <EventViewPage />,
  }
]);

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <HomePage/>
      {/* <EventViewPage/> */}
      {/* <EventDetailPage /> */}
      {/* <AboutSection/> */}
=======
      <RouterProvider router={router} />
>>>>>>> 0950375 (Add React Router for navigation and update EventCard to handle routing)
    </div>
  );
}

export default App;

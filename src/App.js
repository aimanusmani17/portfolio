import Home from "./components/Home";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailSection from "./components/DetailSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/navbar",
      element: <Navbar />,
    },
    {
      path: "/detailSection",
      element: <DetailSection />,
    },
    {
      path: "/education",
      element: <Education />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

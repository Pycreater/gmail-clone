import Body from "./components/Body";
import InBox from "./components/InBox";
import Mail from "./components/Mail";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <InBox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
      <NavBar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

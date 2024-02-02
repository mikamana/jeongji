import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Visual from "./components/Main/Visual";
import Contents from "./pages/Main/Contents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <Contents>
            <Visual />
          </Contents>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <div className="bg-sky-100 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"></div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

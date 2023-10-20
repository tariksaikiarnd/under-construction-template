import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/home";
import CoursePage from "./pages/courses";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScholarshipPage from "./pages/scholarship";
import ContactPage from "./pages/contact";

function App() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/courses",
            element: <CoursePage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/scholarship",
            element: <ScholarshipPage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/contact",
            element: <ContactPage width={screenSize.width} height={screenSize.height} />,
        },
    ]);

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [screenSize]);

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;

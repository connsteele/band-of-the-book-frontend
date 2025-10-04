import HomePage from "./pages/HomePage"
import FormPage from "./pages/FormPage";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
        {
        path: "/blog",
        element: <HomePage />,
    },
    {
        path: '/post',
        element: <FormPage />,
    },
];

export default routes;
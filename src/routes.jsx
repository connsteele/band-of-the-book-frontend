import HomePage from "./pages/HomePage"
import FormPage from "./pages/FormPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import AboutPage from "./pages/AboutPage";

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
    {
        path: '/log_in',
        element: <LogInPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/sign_up',
        element: <SignUpPage />,
    },

];

export default routes;
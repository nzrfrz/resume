import { 
    Home,
    About,
    Skills,
    Projects,
    Contact
} from "../Pages";

export const routeRegistry = [
    {
        key: "Home",
        label: "home",
        path: "/",
        isIndex: true,
        element: <Home />
    },
    {
        key: "About",
        label: "about",
        path: "/about",
        isIndex: false,
        element: <About />
    },
    {
        key: "Skills",
        label: "skills",
        path: "/skills",
        isIndex: false,
        element: <Skills />
    },
    {
        key: "Projects",
        label: "projects",
        path: "/projects",
        isIndex: false,
        element: <Projects />
    },
    {
        key: "Contact",
        label: "contact",
        path: "/contact",
        isIndex: false,
        element: <Contact />
    },
];
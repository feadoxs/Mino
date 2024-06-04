import { lazy } from "react"
export const Layout = lazy(() => import("../layout/layout"));
export const Home = lazy(() => import("../pages/home/home"));
export const About = lazy(() => import("../pages/about/about"));
export const Catalog = lazy(() => import("../pages/каталог/каталог"));
export const Contacts = lazy(() => import("../pages/contacts/contacts"));
export const Turkish = lazy(() => import("../pages/turkish/turkish"));
export const Nationation = lazy(() => import("../pages/nationation/nationation"));
export const Burger = lazy(() => import("../pages/burger/burger"));
export const Plow = lazy(() => import("../pages/plow/plow"));
export const Pizza = lazy(() => import("../pages/pizza/pizza"));
export const Steaks = lazy(() => import("../pages/steaks/steaks"));
export const Deserts = lazy(() => import("../pages/deserts/deserts"));
export const Sushi = lazy(() => import("../pages/sushi/sushi"));
export const Donate = lazy(() => import("../pages/donate/donate"));



;
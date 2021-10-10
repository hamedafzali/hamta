import Admin from "./components/Admin";
import Main from "./components/Main";
import Pos from "./components/Pos";
import ATM from "./components/ATM";
import ContactUs from "./components/ContactUs";
import HamtaService from "./components/HamtaService";
import NewsDetail from "./components/NewsDetail";
import NewsArchives from "./components/NewsArchives";

export const routes = [
  {
    path: "/",
    component: Main,
    exact: "exact",
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/pos",
    component: Pos,
  },
  {
    path: "/atm",
    component: ATM,
  },
  {
    path: "/contactus",
    component: ContactUs,
  },
  {
    path: "/hamtaservice",
    component: HamtaService,
  },
  {
    path: "/newsdetail",
    component: NewsDetail,
  },
  {
    path: "/newsarchive",
    component: NewsArchives,
  },
];
export default routes;

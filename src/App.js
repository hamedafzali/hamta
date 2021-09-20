import React, { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
// import NotificationBar from "./components/common/notificationBar";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";

import "../node_modules/font-awesome/css/font-awesome.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Main from "./components/Main";
// import { errorChanged } from "./store/loading";

import "./App.scss";

const App = () => {
  useEffect(() => AOS.init(), []);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(errorChanged(false));
  //   }, [dispatch]);
  //   const isLoading = useSelector((state) => state.loadingsReducer);
  if (new URL(window.location.href).hostname === "sanjabmarket.ir")
    return <h1>sanjabmarket.ir</h1>;
  return (
    <Switch>
      {/* {routes.map((route, i) => (
        <Route key={route} path={route.path} exact />
      ))} */}
      {routes.map((route) => (
        <Route {...route} />
      ))}
      <Redirect to="/not-found" />
    </Switch>
  );
};
// const PersonDataMap = ({ selected }) => {
//   return (
//     <iframe
//       style={{ width: "100%", height: 400 }}
//       title="map"
//       src="http://mapsengine.google.com/map/embed?mid=z-BEFzFo7gdM.kYdiUKVQpQQI"
//     ></iframe>
//   );
// };
export default App;

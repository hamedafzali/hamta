import React, { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
// import NotificationBar from "./components/common/notificationBar";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../node_modules/font-awesome/css/font-awesome.css";
import AOS from "aos";
import "aos/dist/aos.css";
//import "swiper/css/bundle";

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
  // if (new URL(window.location.href).hostname === "sanjabmarket.ir")

  return (
    <React.Fragment>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
        <Redirect to="/not-found" />
      </Switch>{" "}
      <Footer />
    </React.Fragment>
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

import MapsList from "../components/OwStrategy/MapsList";
import Strat from "../components/OwStrategy/Strat";
import StratEdit from "../components/OwStrategy/StratEdit";
import {
  OwUrlToMap,
  OwIsMap,
  OwMapToEnum,
  OwMaps
} from "../configs/Overwatch/OwData";
import Router, { withRouter } from "next/router";
import Signup from "../components/Signup_Portal";
import User from "../components/User";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "../components/ErrorMessage";
import OverwatchPage from "../components/pages/OverwatchPage";
import MapDetails from "../components/pages/MapDetails";

const overwatch = props => {
  const url = props.router;
  console.log({ props });

  if (props.query.user && !props.query.map && !props.query.stratNumber) {
    return <h2>{props.query.user}</h2>;
  } else if (props.query.map && props.query.stratNumber) {
    return <h2>list specific details about a single strat</h2>;
  } else if (props.query.map && props.query.user) {
    return <h2>list all strats for that map</h2>;
  } else if (props.query.map && !props.query.user) {
    return <h2>press button to create a new strat</h2>;
  } else {
    <MapsList teamName={url.query.user} url={url} />;
  }
  return <MapsList teamName={url.query.user} url={url} />;
  //   return (
  //     <>
  //       {
  //         // "/:user/overwatch"
  //         // * // list all maps
  //         // "/:user/overwatch/:map"
  //         // * // list all strats for that map
  //         // "/:user/overwatch/:map/:stratNumber"
  //         // * // list specific details about a single strat
  //         // "/overwatch/:map/"
  //         // * // create a strat from there
  //         // "/overwatch/"
  //         // * // list all maps
  //         // ! if no mapname, or anymore of the list,
  //       }
  //       {/* <OverwatchPage /> */}
  //       {OwIsMap(props.query.map)}
  //     </>
  //   );
};

overwatch.getInitialProps = async props => {
  console.log({ props });

  return {};
};

export default withRouter(overwatch);

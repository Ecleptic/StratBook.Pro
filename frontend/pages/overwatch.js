import { withRouter } from "next/router";
import MapsList from "../components/OwStrategy/MapsList";

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
  //   return <MapsList teamName={url.query.user} url={url} />;
  return <h2>Maps List</h2>;
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

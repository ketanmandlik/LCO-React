import React from "react";
import PackageContext from "./Context";

const Provider = (props) => {
  const [mission, setMission] = React.useState({
    m_name: "Go To Russia",
    agent: "007",
    accept: "Not Accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () =>
          setMission({
            ...mission,
            accept: "ACCEPTED",
          }),
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;

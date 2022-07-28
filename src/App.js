import "./App.css";
import Provider from "./Provider";
import Context from "./Context";
import { Fragment } from "react";

const AgentOne = () => {
  return <AgentTwo />;
};
const AgentTwo = () => {
  return <AgentThree />;
};
const AgentThree = () => {
  return <AgentBond />;
};
const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Mission Name: {context.data.m_name}</h3>
          <p>Agent: {context.data.agent}</p>
          <p>Mission Status: {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}>Accept Mission</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn Context API</h1>
        <Provider>
          <AgentOne />
        </Provider>
      </header>
    </div>
  );
}

export default App;

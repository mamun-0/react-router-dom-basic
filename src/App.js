import React from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props.history);
  return (
    <div>
      <h1>Hat Page</h1>
      <button onClick={() => props.history.push("/topics")}>Topic Page</button>
    </div>
  );
};
const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic List</h1>
      <Link to={`${props.match.url}/11`}>To Link 11 </Link>
      <Link to={`${props.match.url}/12`}>To Link 12 </Link>
      <Link to={`${props.match.url}/13`}>To Link 13 </Link>
    </div>
  );
};
const TopicDetails = (props) => {
  console.log(props.match);
  return (
    <div>
      <h1>Topic Details {props.match.params.topicID}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route exact path='/topics' component={TopicList} />
      <Route exact path='/topics/:topicID' component={TopicDetails} />
    </div>
  );
}

export default App;

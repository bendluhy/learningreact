import React from "react"
import Tweet from "./newTweet"
import Main from "./main"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App()
{
  return(
    <Router>
      <div classname="App">
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/tweet" component={Tweet}></Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App;

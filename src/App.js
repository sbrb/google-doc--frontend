import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import TextEditor from "./TextEditor";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="https://google-doc.netlify.app/" exact>
          <Redirect to={`/${uuidV4()}`} />
        </Route>
        <Route path="https://google-doc.netlify.app/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

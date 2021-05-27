import { Switch,Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './components/Dashboard';
import EditTask from './pages/EditTask';
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register">
        <RegisterPage/>
      </Route>
      <Route exact path="/login">
        <LoginPage/>
        </Route>
        <ProtectedRoute exact path="/dashboard">
          <Dashboard/>
        </ProtectedRoute>
      <Route exact path="/edit/:id" component={EditTask}/>
      </Switch>
    </div>
  );
}

export default App;

// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from './Alert'

function App() {
  const colorClasses ={
    red:"alert alert-danger",
    orange:"alert alert-warning",
    green:"alert alert-success",
    noColor:null
} 
  return (
    <div className="App">
      {/* <Alert text="OMG! Something really bad has happened!" show={false}/> */}
      {/* <Alert text="Well done, you success to sign up!" show={true}/>      */}
      <Alert color={colorClasses}/>
    </div>
  );
}
export default App;

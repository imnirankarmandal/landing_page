import logo from "./logo.svg";
import "./App.css";
import HomeOne from "./homepagee/HomeOne";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeTwo from "./homepagee/HomeTwo";
import HomeThree from "./homepagee/HomeThree";
import HomeFour from "./homepagee/HomeFour";
import HomeFive from "./homepagee/HomeFive";

function App() {
  return (
    <div className="App">
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <HomeFive />
    </div>
  );
}

export default App;

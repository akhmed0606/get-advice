import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [advice, setAdvice] = useState("");
  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h4 className="heading">{advice.advice}</h4>
        <button className="button" onClick={getAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
export const url = 'https://api.adviceslip.com/advice'

function Advice() {
  const [advice, setAdvice] = useState("");
  const getAdvice = async() => {
   await axios
      .get(url)
      .then((res) => {
       const {advice} = (res.data.slip);
       setAdvice(advice)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card">
      <h4 data-testid="resolved" className="heading">{advice}</h4>
      <button className="button" onClick={getAdvice}>
        <span data-testid="getdata">GIVE ME ADVICE!</span>
      </button>
    </div>
  );
}

export default Advice;

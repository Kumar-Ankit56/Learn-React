import { useState } from "react";

function App() {
  const [height, setheight] = useState(175);
  const [weight, setweight] = useState(65);
  const [isActive, setIsActive] = useState(false);
  const [bmi, setBmi] = useState(0);
  const [weightrange, setweightrange] = useState("");
  const [range, setRange] = useState("");
  const [color, setcolor] = useState("");

  let handleHeightInput = (e) => {
    setheight(e.target.value);
  };
  let handleweightInput = (e) => {
    setweight(e.target.value);
  };

  let calculatBmi = () => {
    let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    if (bmi < 18.5) {
      setweightrange("underWeight");
      setRange("You are in the under weight range");
      setcolor("#ffc44d");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setweightrange("Normal weight");
      setRange("You are in the normal weight range");
      setcolor("#4AC38D");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setweightrange("Overweight");
      setRange("You are in the Overweight range. ");
      setcolor("#ff884d");
    } else {
      setweightrange("Obese");
      setRange("You are in the obese range. You have to work hard");
      setcolor("#ff5e57");
    }
    setIsActive(true);
    setBmi(bmi);
  };
  let goBack = () => {
    setIsActive(false);
  };
  return (
    <div className="bg-[#090925] w-full h-screen font-serif">
      <div className="h-[500px] w-[350px] bg-white rounded-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 transition-all duration-75">
        <div
          className="setting"
          style={{ display: isActive ? "none" : "block" }}
        >
          <div className="text-center mt-4 uppercase text-[#090925] text-sm">
            BMI Calculator
          </div>
          <div className="h-[175px] w-[310px] bg-white rounded absolute top-[135px] left-2/4  -translate-x-2/4 -translate-y-2/4 border-solid border-2 border-[#090925]">
            <p className="mt-4 uppercase text-sm text-center text-[#090925] font-semibold">
              Height
            </p>
            <h4 className="text-3xl text-center relative top-4">
              {height}
              <span className="text-xl ml-1 text-[#090925]">cm</span>
            </h4>
            <input
              type="range"
              className="h-1 w-[275px] absolute left-2/4 bottom-8 -translate-x-2/4 -translate-y-2/4 rounded-3xl bg-[#090925] slider-thumb"
              min="25"
              value={height}
              onChange={handleHeightInput}
              max="250"
            />
          </div>
          <div className="h-[175px] w-[310px] bg-white rounded absolute top-[325px] left-2/4  -translate-x-2/4 -translate-y-2/4 border-solid border-2 border-[#090925]">
            <p className="mt-4 uppercase text-sm text-center text-[#090925] font-semibold">
              Weight
            </p>
            <h4 className="text-3xl text-center relative top-4">
              {weight}
              <span className="text-xl ml-1 text-[#090925]">kg</span>
            </h4>
            <input
              type="range"
              className="h-1 w-[275px] absolute left-2/4 bottom-8 -translate-x-2/4 -translate-y-2/4 rounded-3xl bg-[#090925]"
              min="20"
              max="200"
              value={weight}
              onChange={handleweightInput}
            />
          </div>
          <button
            className="h-11 w-[310px] text-white bg-[#090925] flex justify-center items-center rounded absolute bottom-1 left-2/4 -translate-x-2/4 -translate-y-2/4  cursor-pointer uppercase"
            onClick={calculatBmi}
          >
            Calculate your bmi
          </button>
        </div>
        <div
          className="h-full w-full hidden transition-all duration-75"
          style={{ display: isActive ? "block" : "none" }}
        >
          <h3 className="mt-4 ml-5 text-[#090925] text-center">Your Result</h3>
          <div className="h-[400px] w-[300px] bg-[#DCDCDC] rounded text-center  mt-10px absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
            <p
              className="mt-6 bg-green-400 text-sm font-semibold"
              style={{ color: `${color}` }}
            >
              {weightrange}
            </p>
            <h3 className="text-[65px] -mt-5 font-light text-[#696969]">
              {bmi}
            </h3>
            <p className="mt-5 text-[19px] text-[#696969]">Normal Bmi range</p>
            <p className="text-[17px]">18.5-25kg/m2</p>
            <p className="whitespace-pre-wrap mt-9 text-[18px] ml-2 mr-1">
              {range}
            </p>
            <button
              className="h-[40px] w-[200px] bg-[#090925] text-white flex justify-center items-center rounded absolute bottom-1 left-2/4 -translate-x-2/4 -translate-y-2/4  cursor-pointer uppercase"
              onClick={goBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

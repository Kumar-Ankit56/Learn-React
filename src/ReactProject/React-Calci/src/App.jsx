import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [totalresult, setTotalResult] = useState(0);

  let handleClick = (e) => {
    // console.log(e);
    setResult(result.concat(e.target.name));
  };

  let clear = () => {
    setResult("");
    setTotalResult(0);
  };

  let backspace = () => {
    setResult(result.slice(0, -1));
  };

  let CalculateValue = () => {
    try {
      setTotalResult(eval(result));
    } catch (err) {
      setTotalResult("Error");
    }
  };

  return (
    <div className="bg-gray-300 w-full h-screen">
      <div className="h-[550px] w-[330px] bg-[#2E2A38] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded overflow-hidden">
        <div className="h-[170px] w-full">
          <span className="text-white text-3xl absolute top-[70px] right-[20px]">
            {totalresult}
          </span>
          <input
            className="text-[#795AF6] absolute top-[110px] right-0 pr-5 text-right text-[22px] h-10 w-full"
            type="text"
            placeholder="0"
            value={result}
            disabled
          />
        </div>
        <div className="h-[380px] w-full">
          <button
            className="h-[55px] w-[55px] text-[#795AF6] float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            onClick={clear}
          >
            AC
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            onClick={backspace}
          >
            DEL
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="%"
            onClick={handleClick}
          >
            %
          </button>
          <button
            className="h-[55px] w-[55px] float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer bg-[#cccccc]  text-2xl text-black"
            name="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="h-[55px] w-[55px] float-left flex text-2xl justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer bg-[#cccccc] text-black"
            name="*"
            onClick={handleClick}
          >
            *
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="h-[55px] w-[55px] float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer bg-[#cccccc] text-black text-2xl"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="h-[55px] w-[55px] float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer bg-[#cccccc] text-black  text-2xl"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="00"
            onClick={handleClick}
          >
            00
          </button>
          <button
            className="h-[55px] w-[55px] text-white float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer"
            name="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            className="h-[55px] w-[55px] float-left flex justify-center items-center rounded-full ml-6 mt-4 relative -top-1 cursor-pointer bg-[#795AF6] text-white text-2xl"
            name="="
            onClick={CalculateValue}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

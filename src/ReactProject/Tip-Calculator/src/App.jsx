import { useState } from "react";

function App() {
  const [bill_amount, setBillAmount] = useState(0);
  const [Counter, setCounter] = useState(1);
  const [tip_amount, setTipAmount] = useState(0);

  const tip_in_amount = (bill_amount / 100) * tip_amount;
  const tip_per_person = tip_in_amount / Counter;
  const total_amount = Number(bill_amount) + Number(tip_in_amount);

  let handleDecrement = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
    } else {
      setCounter(0);
    }
  };

  let handleIncrement = () => {
    setCounter(Counter + 1);
  };

  return (
    <div className="h-screen w-screen bg-[#090925]">
      <div className="h-[450px] w-[350px] bg-white rounded-lg absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 pl-6">
        <div className="h-[70px] flex items-center">
          <span className="text-xl">Bill Amount</span>
          <div className="p-1 bg-[#090925] rounded h-[45px] w-[100px] absolute right-6 text-xl pl-2">
            <label htmlFor="bill_amount_input" className="text-white">
              ${" "}
              <input
                type="number"
                id="bill_amount_input"
                className=" unset h-[30px] w-[60px] pl-1 text-center text-[#090925]"
                placeholder="0.00"
                onChange={(e) => setBillAmount(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="h-[110px] flex items-center">
          <span className="text-xl">Check Split</span>
          <button
            className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-[#090925] absolute right-6 cursor-pointer"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="absolute right-[75px]">{Counter}</span>
          <button
            className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-[#090925] absolute right-[95px] cursor-pointer"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div className="h-[70px] flex items-center">
          <span className="text-xl">Tip Amount</span>
          <span className="absolute right-7 text-2xl text-blue-900">
            {tip_amount}%
          </span>
          <span className="absolute right-7 mt-[60px] text-xl">
            $ {tip_in_amount.toFixed(2)}
          </span>
        </div>

        <input
          type="range"
          className="relative top-7 h-2 w-[295px] rounded-3xl bg-black"
          min="0"
          max="100"
          value={tip_amount}
          onChange={(e) => setTipAmount(e.target.value)}
        />

        <div className="h-20 w-[295px] absolute bottom-6 bg-[#090925] rounded text-white pt-2 pr-2 pb-0 pl-4">
          <p className="text-sm">
            Tip per Person{" "}
            <span className="absolute right-5">
              $ {tip_per_person.toFixed(2)}
            </span>
          </p>
          <p className="text-sm mt-2">
            Total Amount
            <span className="absolute right-5">
              $ {total_amount.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useState } from "react";
import QrCodeIcon from "@mui/icons-material/QrCode";

function App() {
  const [InputValue, setInputValue] = useState("");
  const [isActive, setisActive] = useState(false);
  const [word, setWord] = useState("");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${word}`
    ),
      [word];
  });

  let handleClick = () => {
    if (InputValue != "") {
      setisActive(true);
      setWord(InputValue);
    }
  };

  return (
    <div className="w-full h-screen bg-[#090925]">
      <div
        className="h-[220px] w-[350px] p-2 bg-white absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded transition-all duration-75"
        style={{ height: isActive ? "440px" : "" }}
      >
        <h3 className="mt-2 ml-8 text-xl">Qr Code Generator</h3>
        <div
          className="h-[200px] w-[90%] border-2 border-solid border-gray-100 rounded relative top-[120px] left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center invisible transition-all duration-75"
          style={{ visibility: isActive ? "visible" : "" }}
        >
          <div className="h-[150px] w-[150px]">
            <img className="h-full w-full" src={qrCode} alt="qr" />
          </div>
        </div>
        <input
          type="text"
          className="h-[50px] w-[285px]  border-2 border-solid border-gray-100 rounded pl-2 relative -top-[140px] left-2/4 -translate-x-2/4 -translate-y-2/4 text-sm transition-all duration-75"
          style={{ top: isActive ? "88px" : "" }}
          placeholder="Enter text or url"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="h-12 w-[300px] bg-[#090925] absolute bottom-0 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded text-white flex justify-center items-center text-sm cursor-pointer transition-all duration-75"
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;

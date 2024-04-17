import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Home from "./components/Home";

function App() {
  const [welcome, setWelcome] = useState("");
  const localName = localStorage.getItem("name");
  const handle = useFullScreenHandle();

  return (
    <>
      <FullScreen handle={handle}>
        <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 w-[100%] grid place-items-center h-[100vh] text-white p-4">
          <div className="bg-[#0E46A3] mx-auto w-[100%] md:w-[50%] rounded-lg shadow-2xl px-4 md:px-8 py-6 md:py-8">
            {welcome.length < 1 && localName.length == 0 ? (
              <Welcome fullView={handle} setWelcome={setWelcome} />
            ) : (
              <Home setWelcome={setWelcome} />
            )}
          </div>
        </div>
      </FullScreen>
    </>
  );
}

export default App;

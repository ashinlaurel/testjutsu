import React, { useState } from "react";
import { Jutsu } from "react-jutsu";

const Main = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return call ? (
    <Jutsu
      containerStyles={{ width: "100%", height: "1000px" }}
      roomName={room}
      userName={name}
      loadingComponent={<p>loading ...</p>}
    />
  ) : (
    <div className="flex flex-col bg-gray-900 items-center justify-center w-full h-screen ">
      <form className="flex flex-col items-center justify-center">
        <input
          className="my-2 px-2 rounded shadow "
          id="room"
          type="text"
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          className="my-2 px-2 rounded shadow "
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="px-2 my-2 text-xl bg-gray-200 rounded"
          onClick={handleClick}
          type="submit"
        >
          Join
        </button>
      </form>
    </div>
  );
};

export default Main;

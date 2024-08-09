import React from "react";
import CreateRoomForm from "./create-room";

const CreateRoomPage = () => {
  return (
    <div className="flex flex-col justify-center container px-16 py-36">
      <h2 className="text-3xl font-bold italics">Create Your Room</h2>
      <CreateRoomForm />
    </div>
  );
};

export default CreateRoomPage;

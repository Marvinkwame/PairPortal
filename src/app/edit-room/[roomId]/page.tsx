import React from "react";
import EditPageForm from "./EditPageForm";
import { getRoomById } from "@/hooks/room";

interface EditPageProps {
  params: { roomId: string };
}

const EditPage = async ({ params: { roomId } }: EditPageProps) => {
  const room = await getRoomById(roomId);

  if (!room) {
    return <div>No Room Found</div>;
  }

  return (
    <div className="flex flex-col justify-center container px-16 py-36">
      <h2 className="text-3xl font-bold italics">{`Edit ${room.name} Room`}</h2>
      <EditPageForm room={room} />
    </div>
  );
};

export default EditPage;

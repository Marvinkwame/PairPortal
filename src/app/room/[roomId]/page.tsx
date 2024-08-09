import { getRoomById } from "@/hooks/room";
import React from "react";

interface RoomPageProps {
  params: { roomId: string };
}

const RoomPage = async ({ params: { roomId } }: RoomPageProps) => {
  const room = await getRoomById(roomId);

  return (
    <div className="py-36 px-24">
      <h2>{room?.name}</h2>
    </div>
  );
};

export default RoomPage;

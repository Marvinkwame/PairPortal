import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import UserRoomCard from "./user-room-card";
import { unstable_noStore } from "next/cache";
import { getUserRooms } from "@/hooks/room";
import RoomTools from "@/components/RoomTools";
import { splitTools } from "../../lib/utils";

const YourRoomPage = async () => {
  unstable_noStore(); //doesnt cache the data on this page so every data here is fresh
  const myRooms = await getUserRooms();

  return (
    <div className="py-36 px-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Your Rooms</h2>

        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {myRooms.map((myRoom) => {
          return <UserRoomCard key={myRoom.id} myRoom={myRoom} />;
        })}
      </div>
    </div>
  );
};

export default YourRoomPage;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import UserRoomCard from "./user-room-card";
import { unstable_noStore } from "next/cache";
import { getUserRooms } from "@/hooks/room";
import Image from "next/image";

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

      {myRooms.length === 0 && (
        <div className="grid place-items-center mt-8">
          <Image
            src="/images/create.svg"
            alt="Nothing found"
            width={250}
            height={250}
          />
          <p className="mt-8 font-bold">
            {" "}
            Have haven&apos;t you created a room? Go ahead and create one room.
            Invite your buddies too.
          </p>
        </div>
      )}
    </div>
  );
};

export default YourRoomPage;

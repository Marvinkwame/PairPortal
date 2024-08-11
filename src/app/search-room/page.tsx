import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { getRoom } from "@/hooks/room";
import UserRoomCard from "../your-room/user-room-card";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

interface SearchRoomProps {
  searchParams: { search: string };
}

const SearchRoom = async ({ searchParams: { search } }: SearchRoomProps) => {
  unstable_noStore();
  console.log(search);

  const searchRooms = await getRoom(search);
  return (
    <div className="py-36 px-24">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Find other rooms</h2>

        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>

      <SearchBar />

      <div className="mt-8 grid grid-cols-3 gap-4">
        {searchRooms.map((searchRoom) => {
          return <UserRoomCard key={searchRoom.id} myRoom={searchRoom} />;
        })}
      </div>

      {searchRooms.length === 0 && (
        <div className="grid place-items-center mt-8">
          <Image
            src="/images/Notfound.svg"
            alt="Nothing found"
            width={200}
            height={200}
          />
          <p className="mt-8 font-bold">{`No Rooms found. Try lowercase if you typed in uppercase and vice versa.`}</p>
        </div>
      )}
    </div>
  );
};

export default SearchRoom;

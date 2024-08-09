import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AllRooms = () => {
  return (
    <div className="py-36 px-24">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Find other rooms</h2>

        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
    </div>
  );
};

export default AllRooms;

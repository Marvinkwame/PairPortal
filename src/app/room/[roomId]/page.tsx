import { getRoomById } from "@/hooks/room";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import RoomTools from "@/components/RoomTools";
import { splitTools } from "@/lib/utils";
import VideoPlayerPortal from "./video-player";
import { room } from "../../../db/schema";

interface RoomPageProps {
  params: { roomId: string };
}

const RoomPage = async ({ params: { roomId } }: RoomPageProps) => {
  const room = await getRoomById(roomId);

  if (!room) {
    return (
      <div>
        No room found. Probably deleted or your network is not working properly.{" "}
      </div>
    );
  }

  return (
    <div className="py-36 px-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-screen">
        {/* TODO: Video goes here. */}
        <div className="col-span-3 border-2 p-4 rounded-lg  border-white">
          <div className="drop-shadow-xl p-6 bg-slate-700">
            
            <VideoPlayerPortal room={room} />
          </div>
        </div>

        {/* Room details go here */}
        <div className="col-span-1">
          <Card className="">
            <CardHeader>
              <CardTitle>{room?.name}</CardTitle>
              <CardDescription>{room?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {room?.gitHubRepository && (
                <div className="flex items-center gap-4 mb-6">
                  <FaGithub size={20} />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={room.gitHubRepository}
                    className="hover:underline"
                  >
                    GitHub Repo
                  </Link>
                </div>
              )}
              <RoomTools tags={splitTools(room.languages)} />
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;

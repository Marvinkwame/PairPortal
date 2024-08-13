import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Room } from "@/db/schema";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import RoomTools from "@/components/RoomTools";
import { splitTools } from "@/lib/utils";
import { deleteRoomAction, getOwner } from "./actions";
import { Pen } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Video } from "lucide-react";
import CardBottom from "./card-bottom";
import { getRoomOwner } from "@/hooks/room";

interface UserRoomCardProps {
  myRoom: Room;
}

const UserRoomCard = async ({ myRoom }: UserRoomCardProps) => {
  const owner = await getRoomOwner(myRoom.userId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{myRoom.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {myRoom.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        {myRoom.gitHubRepository && (
          <div className="flex items-center gap-4">
            <FaGithub size={30} />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={myRoom.gitHubRepository}
              className="hover:underline"
            >
              GitHub Repo
            </Link>
          </div>
        )}
        <p>Created by: {owner?.name} </p>
        <RoomTools tags={splitTools(myRoom.languages)} />
      </CardContent>
      <CardFooter>
        <CardBottom myRoom={myRoom} />
      </CardFooter>
    </Card>
  );
};

export default UserRoomCard;

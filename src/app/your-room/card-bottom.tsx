"use client";

import React from "react";
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
import { deleteRoomAction, getOwner } from "./actions";
import { Pen } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Video } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Room } from "@/db/schema";

interface CardBottomProps {
  myRoom: Room;
}

const CardBottom = ({ myRoom }: CardBottomProps) => {
  return (
    <div className="flex items-center flex-wrap justify-between gap-4">
      <Button asChild>
        <Link href={`/room/${myRoom.id}`} className="flex items-center gap-2">
          <Video size={15} />
          Join Room
        </Link>
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-red-700 text-white flex items-center gap-2"
          >
            <Trash2 size={15} />
            Delete Room
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your room from our fanastic app.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteRoomAction(myRoom.id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button asChild>
        <Link
          href={`/edit-room/${myRoom.id}`}
          className="flex gap-2 items-center"
        >
          <Pen size={15} className="" /> Edit
        </Link>
      </Button>
    </div>
  );
};

export default CardBottom;

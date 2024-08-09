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

interface UserRoomCardProps {
  myRoom: Room;
}

const UserRoomCard = ({ myRoom }: UserRoomCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{myRoom.name}</CardTitle>
        <CardDescription className="line-clamp-2">{myRoom.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
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
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between gap-4">
          <Button asChild>
            <Link href={`/room/${myRoom.id}`}>Join Room</Link>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="bg-red-700 text-white">
                Delete Room
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your room from our fanastic app.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserRoomCard;

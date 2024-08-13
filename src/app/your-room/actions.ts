"use server";

import { deleteUserRoom, getRoomById, getRoomOwner } from "@/hooks/room";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function deleteRoomAction(roomId: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("User not authenticated");
  }

  const room = await getRoomById(roomId);

  if (room?.userId !== session.user.id) {
    throw new Error("You are not the owner of this room");
  }

  await deleteUserRoom(roomId);

  revalidatePath("/your-room");
}


export async function getOwner(userId: string) {

 await getRoomOwner(userId);
}
"use server"
import { Room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { deleteUserRoom, editRoom, getRoomById } from "@/hooks/room";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editRoomFunction(roomData: Omit<Room, "userId">) {

    const session = await getSession();

  if (!session) {
    throw new Error("User not authenticated");
  }

  const room = await getRoomById(roomData.id);

  if (room?.userId !== session.user.id) {
    throw new Error("You are not the owner of this room");
  }


  await editRoom({ ...roomData, userId: session.user.id })


  revalidatePath("/your-room");
  revalidatePath(`/edit-room/${roomData.id}`);
  redirect("/your-room");
}
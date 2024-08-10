import { db } from "@/db";
import { Room, room, users } from "@/db/schema";
import { eq, like } from "drizzle-orm";
import { getSession } from "@/lib/auth";

export async function getUserRooms() {
  const session = await getSession();

  if (!session) {
    throw new Error("User is not authenticated");
  }

  const userRooms = await db.query.room.findMany({
    where: eq(room.userId, session.user.id),
  });

  return userRooms;
}

export async function getRoomById(roomId: string) {
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  });
}

export async function getRoom(searchTerm: string) {
  return await db.query.room.findMany({
    where: like(room.languages, `%${searchTerm}%`),
  });
}

export async function getRoomOwner(userId: string) {
  return await db.query.users.findFirst({
    where: eq(users.id, userId),
  })
}

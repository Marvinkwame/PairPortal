"use server"


import { db } from "@/db";
import { Room, room } from "@/db/schema"
import { getSession } from "@/lib/auth"
import { users } from '../../db/schema';

export const createRoomFunction = async (roomData: Omit<Room, "id" | "userId">) => {
    const session = await getSession();

    if(!session) {
        throw new Error("Log in to create a room")
    }

    await db.insert(room).values({ ...roomData, userId: session.user.id });

    

} 
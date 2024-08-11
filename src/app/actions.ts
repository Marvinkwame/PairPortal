"use server"


import { Room } from "@/db/schema";
import { deleteMyAccount } from "@/hooks/room";
import { getSession } from "@/lib/auth";


export async function deleteUserAccount() {
    const session = await getSession();

    if(!session) {
        throw new Error("User not authenticated");
    }

    await deleteMyAccount(session.user.id)
}
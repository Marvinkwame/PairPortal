import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const items = await db.query.room.findMany();

  return (
    <main className="min-h-screen flex flex-col px-24 py-36 items-center justify-between">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2 className="text-white text-2xl">{item.name}</h2>
          </div>
        );
      })}
      <Button asChild>
        <Link href="/create-room">Create your room</Link>
      </Button>
    </main>
  );
}

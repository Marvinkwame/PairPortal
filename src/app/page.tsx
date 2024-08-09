import { db } from "@/db";

export default async function Home() {
  const items = await db.query.testing.findMany()


  return (
    <h2>
      {items.map(item => {
        return (
          <div key={item.id}>
            <h2 className="text-white">{item.name}</h2>
          </div>
        )
      })}
    </h2>
  );
}

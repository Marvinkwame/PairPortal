import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {

  return (
    <main className="min-h-screen flex flex-col px-24 py-36 items-center justify-between">

      <h2>We&apos;re changing the way developers connect.</h2>
      <Button asChild>
        <Link href="/create-room">Create your room</Link>
      </Button>
    </main>
  );
}

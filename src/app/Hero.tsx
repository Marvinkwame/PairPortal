import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex items-center gap-8 justify-between mt-16">
        <div className="flex flex-col items-start  w-[70%] space-y-8">
          <h2 className="text-6xl font-bold">
            We&apos;re changing the <br /> way developers connect.
          </h2>
          <p className="text-xl leading-8">
            Level up your coding experience with our app that brings developers
            together. <br /> Pair program in real-time, share ideas, and solve problems
            faster with integrated <br /> live video using GetStream.io. Connect, code,
            and create with your team from anywhere!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Button asChild>
              <Link href="/create-room">Create your room</Link>
            </Button>
            <Button asChild>
              <Link href="/about">Learn-more</Link>
            </Button>
          </div>
        </div>

        <div>
          <Image
            src="/images/hero2.avif"
            alt="People coding"
            width={350}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

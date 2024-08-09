"use client";

import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const session = useSession();

  return (
    <header>
      {session.data ? (
        <div>
          <h1>Welcome {session.data.user?.name}</h1>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      ) : (
        <div>
          <h1>Hatake Kakashi</h1>
          <Button onClick={() => signIn("google")}>Sign In</Button>
        </div>
      )}
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

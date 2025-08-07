"use client";

import { Authenticated } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Navbar1 } from "@/components/ui/navbar-1";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <Hero />
      <Authenticated>
        <Content />
      </Authenticated>
    </>
  );
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <div>Authenticated content: {messages?.length}</div>;
}

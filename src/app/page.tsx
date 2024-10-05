"use client";

import Layout from "@/layouts/Layout";
import Hero from "./sections/hero";
import { MainBuild } from "./sections/main-build";
import ChatBot from "./sections/chatbot";
import LookBackGraph from "./sections/lookback";
import World from "./sections/world";

export default function Home() {
  return (
    <>
      <Layout withFooter withNavbar>
        <ChatBot />
        <Hero />
        <MainBuild />
        <LookBackGraph />
        <World />
      </Layout>
    </>
  );
}

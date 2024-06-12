
import Client from "@/components/part/Client";
import Grid from "@/components/part/Grid";
import Hero from "@/components/part/Hero";
import Approch from "@/components/part/Approch";
import Footer from "@/components/part/Footer";
import RecentProject from "@/components/part/RecentProject";
import { FloatingNav } from "@/components/ui/FlotingNavbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Work from "@/components/part/Work";
export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col
     overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProject/>
      <Client/>
      <Work/>
      <Approch/>
      <Footer/>
      </div>

    </main>
  );
}

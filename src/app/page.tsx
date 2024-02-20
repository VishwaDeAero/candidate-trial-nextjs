import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/herosection";
import TeamSection from "./components/teamsection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
    </>
  );
}

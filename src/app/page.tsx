import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/herosection";
import TeamSection from "./components/teamsection";
import ArticleSection from "./components/articlesection";
import CarouselSection from "./components/carouselsection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ArticleSection />
      <CarouselSection />
      <TeamSection />
    </>
  );
}

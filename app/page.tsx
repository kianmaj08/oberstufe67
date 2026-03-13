import { HeroSection } from "@/components/landing/HeroSection"
import { FeaturedScroll } from "@/components/landing/FeaturedScroll"
import { ProjectCards } from "@/components/landing/ProjectCards"
import { SiteNav } from "@/components/landing/SiteNav"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedScroll />
      <ProjectCards />
      <SiteNav />
      <Footer />
    </main>
  )
}

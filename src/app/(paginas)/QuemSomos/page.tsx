import Navbar from "@/components/Home/Navbar/Navbar"
import Footer from "@/components/Home/Footer/Footer"
import { HeroSection } from "@/components/QuemSomos/HeroSection"
export default function Home() {
  return (
    <>
      <header>
        <Navbar paginaAtiva="quem-somos" />
      </header>
      <main className={`min-h-screen`}>
        <HeroSection />
      </main>
      <Footer/>
    </>

  )
}

import Navbar from "@/components/Home/Navbar/Navbar"
import Footer from "@/components/Home/Footer/Footer"
export default function Home() {
  return (
    <>
      <header>
        <Navbar paginaAtiva="quem-somos" />
      </header>
      <main className={`min-h-screen`}>
        
      </main>
      <Footer/>
    </>

  )
}

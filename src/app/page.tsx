import Carrosel from "@/components/Home/Carrossel/Carrosel"
import Cover from "@/components/Home/Cover/Cover"
import Navbar from "@/components/Home/Navbar/Navbar"
import Resultados from "@/components/Home/Resultados/Resultados"
import Eventos from "@/components/Home/Eventos/Eventos"
import MentoriasCapacitacoes from "@/components/Home/MentoriasCapacitacoes/MentoriasCapacitacoes"
import NossaRede from "@/components/Home/NossaRede/NossaRede"
import Depoimentos from "@/components/Home/Depoimentos/Depoimentos"
import Contato from "@/components/Home/Contato/Contato"
import Parceiros from "@/components/Home/Parceiros/Parceiros"
import Footer from "@/components/Home/Footer/Footer"

export default function Home() {
  return (
    <>
      <header>
        <Navbar paginaAtiva="Home" />
      </header>

      <main className={`min-h-screen w-full`}>
        <Cover />
        <Carrosel />
        <Resultados />
        <Eventos />
        <MentoriasCapacitacoes />
        <NossaRede />
        <Depoimentos />
        <Parceiros />
        <Contato />

      </main>
      <Footer />
    </>
  )
}

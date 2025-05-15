import Carrosel from "@/components/Carrosel/Carrosel"
import Cover from "@/components/Cover/Cover"
import Navbar from "@/components/Navbar/Navbar"
import Resultados from "@/components/Resultados/Resultados"
import Eventos from "@/components/Eventos/Eventos"
import MentoriasCapacitacoes from "@/components/MentoriasCapacitacoes/MentoriasCapacitacoes"
import NossaRede from "@/components/NossaRede/NossaRede"

export default function Home() {
  return (
    <main className={`min-h-screen`}>
     <Navbar/>
     <Cover/>
     <Carrosel/>
     <Resultados/>
     <Eventos/>
     <MentoriasCapacitacoes/>
     <NossaRede/>
    </main>
  )
}

import Carrosel from "@/components/Carrosel/Carrosel"
import Cover from "@/components/Cover/Cover"
import Navbar from "@/components/Navbar/Navbar"
import Resultados from "@/components/Resultados/Resultados"
import Eventos from "@/components/Eventos/Eventos"

export default function Home() {
  return (
    <main className={`min-h-screen`}>
     <Navbar/>
     <Cover/>
     <Carrosel/>
     <Resultados/>
     <Eventos/>
    </main>
  )
}

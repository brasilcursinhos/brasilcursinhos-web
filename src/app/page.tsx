import Carrosel from "@/components/Carrosel/Carrosel"
import Cover from "@/components/Cover/Cover"
import Navbar from "@/components/Navbar/Navbar"
import Resultados from "@/components/Resultados/Resultados"

export default function Home() {
  return (
    <main className={`min-h-screen`}>
     <Navbar/>
     <Cover/>
     <Carrosel/>
     <Resultados/>
    </main>
  )
}

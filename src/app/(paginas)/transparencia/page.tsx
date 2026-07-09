import Navbar from "@/components/Home/Navbar/Navbar"
import Footer from "@/components/Home/Footer/Footer"

export default function Home() {
  return (
    <>
      <header>
        <Navbar paginaAtiva="transparencia" />
      </header>
      <main className={`min-h-screen`}>
        <section className="py-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[#3D4C62] text-2xl font-bold mb-10 text-center">Trasparência</h1>
            <p className="text-center mb-3">
              Este portal da Transparência tem como objetivos principais divulgar a seriedade e o impacto do trabalho da Brasil Cursinhos, assim como justificar como os recursos financeiros obtidos estão sendo utilizados no cumprimento de sua missão.
            </p>
            <p className="text-center mb-3">
            Sendo uma associação civil sem fins lucrativos de caráter sócio educativo, a Brasil Cursinhos depende da doação de recursos humanos (100% do trabalho executado é feito de forma voluntária não remunerada), de recursos financeiros e parcerias institucionais.
            </p>
            <p className="text-center">
            Só através de todas essas doações conseguimos atingir nossos objetivos, potencializando o Movimento de Cursinhos Universitários Populares e, consequentemente, ajudando a dar mais oportunidades aos jovens de baixa renda no país, na busca por uma vaga universitária.
            </p>
          </div>
        </section>
        <section className="bg-[#EEF9FA] py-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[#3D4C62] text-2xl font-bold mb-10 text-center">Prestação de contas</h1>
            <p className="text-center">
              A Prestação de Contas (PC) é uma exposição anual realizada em assembleia geral pelos dirigentes da BC, sobre a utilização dos recursos financeiros do ano calendário; espaço para maiores detalhamentos e explicações do que ocorreu no ano com relação a entradas e saídas financeiras da entidade.
            </p>
            <p className="mt-10 text-center">
              <a className="bg-[#109DAD] text-white px-4 mx-3 py-2 rounded-md text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/144ESRbnbDe3vP3TLz5otHBbp09Jb0G-B/view" target="_blank">2022</a>
              <a className="bg-[#109DAD] text-white px-4 mx-3 py-2 rounded-md text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/15O5Pq-iDYfWOwKaY0Ip3EOI9poZMIYMp/view" target="_blank">2023</a>
              <a className="bg-[#109DAD] text-white px-4 mx-3 py-2 rounded-md text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/1lDr1q_jkRoBPXY1gh69bWar9fA1tNr1I/view" target="_blank">2024</a>
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[#3D4C62] text-2xl font-bold mb-10 text-center">Demonstração do Resultado do Exercício</h1>
            <p className="text-center">
              Serão publicadas aqui as Demonstrações do Resultado do Exercício (DREs) anual da Brasil Cursinhos, elaboradas pelo contador da associação.
            </p>
            <p className="mt-10 text-center">
              <a className="bg-[#109DAD] text-white px-4 mx-3 py-2 rounded-md text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/144ESRbnbDe3vP3TLz5otHBbp09Jb0G-B/view" target="_blank">2022</a>
              <a className="bg-[#109DAD] text-white px-4 mx-3 py-2 rounded-md text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/15O5Pq-iDYfWOwKaY0Ip3EOI9poZMIYMp/view" target="_blank">2023</a>
              <a className="bg-[#109DAD] text-white px-4 mx-3 py-2 rounded-md text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/1lDr1q_jkRoBPXY1gh69bWar9fA1tNr1I/view" target="_blank">2024</a>
              <a className="bg-[#109DAD] text-white px-4 mx-3 py-2 rounded-md text-sm font-semibold cursor-pointer" href="https://drive.google.com/file/d/1jnDWQ_wBAXBXQOO2b3J7tOcH12CDNUWX/view" target="_blank">2025</a>
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </>

  )
}

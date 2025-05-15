import Image from "next/image"
import icone1 from "../Assets/images/mentorias.svg"
import icone2 from "../Assets/images/capacitacoes.svg"
import check from "../Assets/images/check.svg"

export default function MentoriasCapacitacoes() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start md:items-center mb-12 flex-col md:flex-row">
          <div className="text-left mb-4 md:mb-0">
            <h3 className="text-[#E16919] text-base font-semibold mb-2">
              Mentorias e capacitações
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3D4C62]">
              Ajudamos a estruturar e potencializar os cursinhos
            </h2>
          </div>
          <button className="bg-[#109DAD] text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer">
            Saiba mais sobre elas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Image className="mb-2" src={icone1} alt="Mentorias" width={40} height={40}/>
            <h4 className="text-[#3D4C62] font-semibold text-lg mb-4 flex items-center gap-2">
              Mentorias
            </h4>
            <ul className="text-[#6B7188] space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                <span>São personalizadas e individuais;</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                <span>Ajudam a solucionar questões específicas de cada cursinho e de<br/>seus voluntários;</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                <span>Permitem um diálogo próximo e particular, com a possibilidade<br/>de resolver problemas de forma prática.</span>
              </li>
            </ul>
          </div>

          <div>
            <Image className="mb-2" src={icone2} alt="Capacitações" width={40} height={40}/>
            <h4 className="text-[#3D4C62] font-semibold text-lg mb-4 flex items-center gap-2">
              Capacitações
            </h4>
            <ul className="text-[#6B7188] space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                <span>São oferecidas para um grupo de pessoas;</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                <span>Buscam orientar sobre temas importantes que influenciam na rotina<br/>do cursinho, como o desenvolvimento de lideranças, por exemplo;</span>
              </li>
              <li className="flex items-start gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                <span>Permitem que exista uma troca de conhecimento rica entre os participantes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

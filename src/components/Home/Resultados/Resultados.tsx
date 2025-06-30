import Image from "next/image";
import icone1 from "../Assets/imagens/resultados/ilustration_1.svg";
import icone2 from "../Assets/imagens/resultados/ilustration_2.svg";
import icone3 from "../Assets/imagens/resultados/ilustration_3.svg";

export default function Resultados() {
  return (
    <section className="py-20 bg-white text-center">
      <h3 className="text-[#E16919] font-semibold mb-2">O que já alcançamos</h3>
      <h2 className="text-2xl md:text-3xl font-bold text-[#3D4C62] mb-10">
        Fazemos parte de uma construção <br /> coletiva e plural
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center">
          <Image src={icone1} alt="icone" width={40} height={40} />
          <p className="text-[#109DAD] font-bold text-lg">mais de 20</p>
          <p className="text-sm text-[#6B7188]">cursinhos já fazem parte <br /> da nossa rede</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={icone2} alt="icone 2" width={40} height={40}/>
          <p className="text-[#109DAD] font-bold text-lg">mais de 60</p>
          <p className="text-sm text-[#6B7188]">voluntários estão com a <br /> gente nessa</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={icone3} alt="icone3" width={40} height={40}/>
          <p className="text-[#109DAD] font-bold text-lg">mais de 4000</p>
          <p className="text-sm text-[#6B7188]">alunos impactados pelo <br /> trabalho de toda a rede</p>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image";
import Evento1 from "../Assets/imagens/eventos/evento1.svg";
import Evento2 from "../Assets/imagens/eventos/evento2.svg";
import Evento3 from "../Assets/imagens/eventos/evento3.svg";
import Evento4 from "../Assets/imagens/eventos/evento4.svg";

const eventos = [
  {
    imagem: Evento1,
    titulo: "InovaCUP 2022",
    data: "21 e 22 de maio de 2022",
    local: "São Paulo, SP"
  },
  {
    imagem: Evento2,
    titulo: "EFOL 2021",
    data: "4 e 5 de dezembro de 2021",
    local: "São Paulo, SP"
  },
  {
    imagem: Evento3,
    titulo: "ENCUP 2021",
    data: "15 a 17 de outubro de 2021",
    local: "Evento online"
  },
  {
    imagem: Evento4,
    titulo: "EDL 2020",
    data: "7 a 9 de fevereiro de 2020",
    local: "São Paulo, SP"
  },
]

export default function Eventos() {
  return (
    <section className="bg-[#003A4D] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-[#E7F8FF]">Eventos</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-1 text-[#F4F7FC]">
              Facilitamos a conexão entre cursinhos por todo o Brasil
            </h2>
          </div>
          <button className="bg-[#109DAD] text-[#FFFFFF] px-4 py-2 rounded-md text-sm font-semibold cursor-pointer">
            Veja todos os eventos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventos.map((evento, index) => (
            <div key={index} className="bg-white text-[#003A4D] rounded-lg shadow-md overflow-hidden flex flex-col">
              <Image src={evento.imagem} alt={evento.titulo} className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#3D4C62]">{evento.titulo}</h3>
                  <p className="text-sm text-[#5F7691] ">{evento.data}</p>
                  <p className="text-sm text-[#5F7691]">{evento.local}</p>
                </div>
                <button className="mt-4 border border-[#109DAD] text-[#109DAD] px-3 py-1 rounded text-sm cursor-pointer">
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

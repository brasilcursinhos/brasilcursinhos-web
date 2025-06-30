'use client'

import Image from 'next/image'
import MapaBrasil from "../Assets/imagens/cover/mapa-brasil.svg";
import Pessoa1 from "../Assets/imagens/cover/pessoa1.svg";
import Pessoa2 from "../Assets/imagens/cover/pessoa2.svg";
import Pessoa3 from "../Assets/imagens/cover/pessoa3.svg";
import Pessoa4 from "../Assets/imagens/cover/pessoa4.svg";
import Pessoa5 from "../Assets/imagens/cover/pessoa5.svg";

export default function Cover() {
  return (
    <>
    <section className="flex items-center justify-center px-10 py-20 gap-20 bg-[#f2f9fb] overflow-hidden">
      <div className="relative">
        <Image 
          src={MapaBrasil}
          alt="Mapa do Brasil" 
          className="object-contain" 
          width={445.47}
          height={458.29}
        />

        <div className="absolute top-6 left-16">
          <Image src={Pessoa1} alt="Pessoa 1" width={104.97} height={104.78} className="rounded-full" />
        </div>

        <div className="absolute bottom-40 left-2">
          <Image src={Pessoa2} alt="Pessoa 2" width={100.82} height={100.64} className="rounded-full" />
        </div>

        <div className="absolute top-28 left-45">
          <Image src={Pessoa3} alt="Pessoa 3" width={109.95} height={109.75} className="rounded-full" />
        </div>

        <div className="absolute top-20 right-1 ">
          <Image src={Pessoa4} alt="Pessoa 4" width={107.85} height={107.65} className="rounded-full" />
        </div>

        <div className="absolute bottom-30 right-2">
          <Image src={Pessoa5} alt="Pessoa 5" width={100.12} height={99.95} className="rounded-full" />
        </div>
      </div>

      <div className="max-w-xl">
        <h1 className="text-[#3D4C62] text-4xl font-bold mb-4 leading-tight">
          Nós representamos, <br />
          desenvolvemos e integramos <br />
          os cursinhos populares do país
        </h1>
        <p className="text-[#5F7691] mt-4">
          Trazemos soluções para fortalecer e potencializar o Movimento <br/> dos Cursinhos Populares em todo o Brasil e democratizar o<br/> acesso ao Ensino Superior.
        </p>
      </div>
    </section>
    </>
  )
}
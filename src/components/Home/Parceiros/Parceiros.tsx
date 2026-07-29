"use client"

import Image from "next/image"
import slack_logo from "../Assets/imagens/Parceiros/slack.svg"
import datacamp_logo from "../Assets/imagens/Parceiros/datacamp.svg"
import oracle_logo from "../Assets/imagens/Parceiros/oracle.svg"
import arco_instituto_logo from "../Assets/imagens/Parceiros/arco_instituto.svg"
import letrus_logo from "../Assets/imagens/Parceiros/letrus.svg"
import barreto_dolabella_logo from "../Assets/imagens/Parceiros/barreto_dolabella.svg"
import multiplicando_sonhos_logo from "../Assets/imagens/Parceiros/multiplicando_sonhos.svg"
import google_logo from "../Assets/imagens/Parceiros/google.svg"
import eduqo_logo from "../Assets/imagens/Parceiros/eduqo.svg"
import fundacao_estudar_logo from "../Assets/imagens/Parceiros/fundação_estudar.svg"
import atados_logo from "../Assets/imagens/Parceiros/atados.svg"
import ensina_brasil_logo from "../Assets/imagens/Parceiros/ensina_brasil.svg"
import bain_company_logo from "../Assets/imagens/Parceiros/bain_and_company.svg"

import { useState } from "react";

const logos = [
    slack_logo,
    datacamp_logo,
    oracle_logo, arco_instituto_logo,
    letrus_logo,
    barreto_dolabella_logo,
    multiplicando_sonhos_logo,
    google_logo,
    atados_logo,
    eduqo_logo,
    fundacao_estudar_logo,
    ensina_brasil_logo,
    bain_company_logo,
];

const logosPorPagina = 4;


export default function Parceiros() {

    const totalPaginas = Math.ceil(logos.length / logosPorPagina);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const logosVisiveis = logos.slice(
        paginaAtual * logosPorPagina,
        paginaAtual * logosPorPagina + logosPorPagina
    );

    const paginaAnterior = () => {
        if (paginaAtual > 0) {
            setPaginaAtual(paginaAtual - 1);
        }
    }

    const proximaPagina = () => {
        if (paginaAtual < totalPaginas - 1) {
            setPaginaAtual(paginaAtual + 1);
        }

    }
    return (
        <>
            <section className="px-6 py-10 bg-[#EEF9FA]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h3 className="text-[#109DAD] font-semibold text-2xl mb-2">Parceiros e apoiadores</h3>
                            <h1 className="text-[#3D4C62] text-2xl font-bold mb-10">Quem incentiva e apoia o nosso trabalho</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-6">
                        {logosVisiveis.map((logo, index) => (
                            <div key={index} className="flex items-center justify-center h-20">
                                <Image
                                    src={logo}
                                    alt={`Logo ${index}`}
                                    width={120}
                                    height={60}
                                    className="object-contain mb-10"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-20">
                        <span className="text-sm font-medium text-[#3D4C62]">
                            {paginaAtual + 1} DE {totalPaginas}
                        </span>
                        <button
                            type="button"
                            onClick={paginaAnterior}
                            disabled={paginaAtual === 0}
                            className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#cfd8dc] bg-white text-[#3D4C62] transition-all duration-200 ${paginaAtual === 0 ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-[#109DAD] hover:text-white active:bg-[#109DAD] active:text-white"}`}
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={proximaPagina}
                            disabled={paginaAtual === totalPaginas - 1}
                            className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#cfd8dc] bg-white text-[#3D4C62] transition-all duration-200 ${paginaAtual === totalPaginas - 1 ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-[#109DAD] hover:text-white active:bg-[#109DAD] active:text-white"}`}
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
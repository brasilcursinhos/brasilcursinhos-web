// import Imagem1 from "../Assets/imagens/depoimentos/juliana.svg"
// import Imagem2 from "../Assets/imagens/depoimentos/joao.svg"
// import Imagem3 from "../Assets/imagens/depoimentos/gabriela.svg"
import ImagemFernanda from "../Assets/imagens/depoimentos/fernanda.png"
import Icone from "../Assets/imagens/depoimentos/icone.svg"
import Image from "next/image"
import Parceiros from "../Parceiros/Parceiros"

const depoimento = [
    {
        descricao: "Minha primeira experiência com a Brasil Cursinhos foi no EDL (Encontro de Líderes) de 2019 e desde então já sabia que eu gostaria de fazer parte da BC um dia! Ingressei de fato em 2021, como diretora de Gestão de Pessoas e no ano seguinte me tornei Presidente Organizacional, até agosto de 2023. Foram anos de muuuitas trocas, muitos aprendizados e contato com pessoas de diversos locais do pais! Fiz parte de uma equipe com pessoas que realmente queriam fazer a diferença de alguma forma. Um verdadeiro encontro cultural e de diferentes realidades que foi muitíssimo importante para minha trajetória pessoal e profissional. Agora, fazer parte da BC enquanto conselheira é uma forma de continuar acompanhando o trabalho gigante e necessário da galera que faz parte do movimento de cursinhos universitários populares!",
        autor: "Fernanda",
        imagem_autor: ImagemFernanda,
        icone: Icone,
        cargo_autor: "Presidente",
    },
    /* 
    {
        descricao: "Entrei na Brasil Cursinhos em 2017 e desde lá aprendi muito, conheci pessoas maravilhosas e fiz amigos que vou levar para a vida toda e consigo ver com muita facilidade todo o meu crescimento durante esse tempo.",
        autor: "Juliana Ferreira",
        imagem_autor: Imagem1,
        icone: Icone,
        cargo_autor: "Diretora do Financeiro",
    },
    {
        descricao: "Faz 3 anos que entrei na Brasil Cursinhos e foi uma das melhores decisões que tomei. É muito bom poder contribuir com a educação popular do país e, ao mesmo tempo, fazer parte de um time acolhedor e amigo.",
        autor: "João Queiroz",
        imagem_autor: Imagem2,
        icone: Icone,
        cargo_autor: "Diretor de Tecnologia",
    },
    {
        descricao: "A Brasil Cursinhos é um ambiente que você ensina e aprende demais. É um lugar que você consegue colocar em prática suas habilidades e impactar positivamente a vida das pessoas com isso. O time é incrível, diverso e formado por pessoas que sempre te ensinam o que sabem a cada dia.",
        autor: "Gabriela Becker",
        imagem_autor: Imagem3,
        icone: Icone,
        cargo_autor: "Assessora de Expansão",
    }
    */
]

export default function Depoimentos () {
    return (
        <>
        <section className="bg-[#EEF9FA] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-lg text-[#109DAD] font-medium">Depoimentos</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#3D4C62]">O que estão dizendo sobre nós</h2>
                    {/*<div className="flex gap-4">
                        <button className="bg-[#109DAD] text-[#FFFFFF] px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer">
                            Voluntários
                        </button>
                        <button className="bg-[#109DAD] text-[#FFFFFF] px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer">
                            Filiados
                        </button>
                    </div>*/}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {depoimento.map((depoimentoItem, index) => (
                        <div key={index} className="bg-white text-[#003A4D] rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
                            <Image src={depoimentoItem.icone} alt="Icone" className="w-6 h-6 mb-4" />
                            <p className="text-sm text-[#6B7188] mb-6">{depoimentoItem.descricao}</p>
                            <div className="flex items-center gap-3 mt-auto">
                                <Image src={depoimentoItem.imagem_autor} alt={`Foto de ${depoimentoItem.autor}`} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                            <p className="text-sm text-[#3D4C62] font-semibold">{depoimentoItem.autor}</p>
                            <p className="text-xs text-[#5F7691]">{depoimentoItem.cargo_autor}</p>
                        </div>
                        </div>
                        </div>
                    ))}
                </div>
                </div>
        </section>
        {/*<Parceiros/>*/}
        </>
    )
}

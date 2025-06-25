'use client';

import Logo from '../Navbar/Logo'
import Image from 'next/image'
import Facebook from '../Assets/imagens/footer/facebook.svg'
import Instagram from '../Assets/imagens/footer/instagram.svg'
import Linkedin from '../Assets/imagens/footer/linkedin.svg'
import Youtube from '../Assets/imagens/footer/youtube.svg'

export default function Footer() {
  return (
    <footer className="bg-[#EEF9FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-700 ">
        
        <div className="mt-5">
          <Logo/>
          <p className="mt-2 text-[#5F7691]">De aluno para aluno, transformamos a história.</p>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold mb-2">Quem somos</h3>
          <ul className="space-y-1 text-[#5F7691]">
            <li className="mb-5">Nossa história</li>
            <li className="mb-5">Missão, visão e valores</li>
            <li className="mb-5">Nossas áreas</li>
            <li className="mb-5">Nosso time</li>
            <li className="mb-5">Depoimentos</li>
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold mb-2">O que oferecemos</h3>
          <ul className="space-y-1 text-[#5F7691]">
            <li className="mb-5">Eventos</li>
            <li className="mb-5">Mentorias e capacitações</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Nossa rede</h4>
          <ul className="space-y-1 text-[#5F7691]">
            <li className="mb-3">Cursinhos filiados</li>
            <li className="mb-3">Mapa dos cursinhos</li>
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold mb-2">Faça parte</h3>
          <ul className="space-y-1 text-[#5F7691]">
            <li className="mb-3">Filiação de cursinhos</li>
            <li className="mb-3">Voluntariado</li>
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold mb-2 text-[#3D4C62]">Siga a gente nas nossas redes</h3>
          <div className="flex space-x-3 mb-4 mt-5">
            <a href="https://www.facebook.com/brasil.cursinhos" className="text-blue-600">
            <Image src={Facebook} alt="Facebook" width={32} height={32}/>
            </a>
            <a href="https://www.instagram.com/brasil.cursinhos/" className="text-blue-600">
            <Image src={Instagram} alt="Instagram" width={32} height={32}/>
            </a>
            <a href="https://www.linkedin.com/company/brasil-cursinhos/" className="text-blue-600">
            <Image src={Linkedin} alt="Linkedin" width={32} height={32}/>
            </a>
            <a href="https://www.youtube.com/@BrasilCursinhos" className="text-blue-600">
            <Image src={Youtube} alt="Youtube" width={32} height={32}/>
            </a>
          </div>
          <h4 className="font-semibold">Entre em contato</h4>
          <p>contato@brasilcursinhos.org</p>
        </div>
      </div>
    </footer>
  );
}

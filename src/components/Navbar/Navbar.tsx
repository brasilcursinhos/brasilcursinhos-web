'use client'

import Logo from './Logo'
import Link from 'next/link'
import { useState } from 'react'



export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(prev => (prev === menu ? null : menu))
    }

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <Logo />

      <ul className="flex items-center px-20 gap-10 text-gray-700">
        <li>
          <Link href="/QuemSomos" className="hover:text-[#109DAD] transition-colors">
            Quem somos
          </Link>
        </li>


        <li className="relative">
          <button
            onClick={() => toggleDropdown('oferecemos')}
            className="hover:text-[#109DAD] transition-colors flex items-center gap-1"
          >
            O que oferecemos
            <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openDropdown === 'oferecemos' && (
            <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-md p-2 z-10">
              <Link href="/Eventos" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                Eventos
              </Link>
              <Link href="/Mentorias" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                Mentorias e capacitações
              </Link>              
            </div>
          )}
        </li>


        <li>
          <Link href="/Rede" className="hover:text-[#109DAD] transition-colors">
            Nossa rede
          </Link>
        </li>
        <li className="relative" >
          <button
            onClick={() => toggleDropdown('faca-parte')}
            className="hover:text-[#109DAD] transition-colors flex items-center gap-1"
          >
            Faça parte
            <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openDropdown === 'faca-parte' && (
            <div className="absolute top-10 right-0 w-48 bg-white shadow-lg rounded-md p-2 z-10">
              <Link href="/processo-filiacao" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                Processo de filiação
              </Link>
              <Link href="/processo-voluntariado" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                Processo de voluntariado 
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

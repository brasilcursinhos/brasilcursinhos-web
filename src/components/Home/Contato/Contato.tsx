'use client'

import Image from 'next/image'
import Contato_image from "../Assets/imagens/contato/contato.svg"
import Sucesso from "../Assets/imagens/contato/sucesso.svg"

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { useState } from 'react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const handleSendAnotherMessage = () => {
    setForm({ nome: '', email: '', mensagem: '' });
  };
  const isFormValid = form.nome.trim() !== '' && form.email.trim() !== '' && form.mensagem.trim() !== '';


  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-20 gap-12 bg-[#fffff] text-[#5F7691]">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={Contato_image} alt="Ilustração de contato" className="max-w-md w-full h-auto" />
      </div>

      <div className="w-full lg:w-1/2 max-w-lg">
        <h2 className="text-[#E16919] text-xl font-semibold mb-1">Contato</h2>
        <h1 className="text-3xl font-bold text-[#3D4C62] mb-4">
          Vem conversar com a gente!
        </h1>
        <p className="text-[#5F7691] mb-6">
          Mande uma mensagem de email diretamente para a nossa gestão, ficaremos muito felizes com o contato.
        </p>

        <AlertDialog>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {[
              {
                label: 'Seu nome',
                name: 'nome',
                type: 'text',
                placeholder: 'Digite seu nome',
                required: true,
                as: 'input',
              },
              {
                label: 'Seu e-mail',
                name: 'email',
                type: 'email',
                placeholder: 'Digite seu e-mail',
                required: true,
                as: 'input',
              },
              {
                label: 'Sua mensagem',
                name: 'mensagem',
                placeholder: 'Escreva sua mensagem',
                required: true,
                as: 'textarea',
              },
            ].map((field, idx) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-[#5F7691] mb-1">
                  {field.label}<span className="text-[#E16919]">*</span>
                </label>
                {field.as === 'input' ? (
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                  />
                ) : (
                  <textarea
                    name={field.name}
                    className="w-full h-40 px-4 py-2 bg-transparent border border-gray-600 rounded-md resize-none focus:outline-none focus:border-teal-400"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
            <AlertDialogTrigger asChild disabled={!isFormValid}>
              <button className="bg-[#109DAD] text-[#FFFFFF] px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                Enviar Mensagem
              </button>
            </AlertDialogTrigger>
          </form>
          <AlertDialogContent className="flex flex-col items-center justify-center text-center ">
            <AlertDialogHeader>
              <div className="flex justify-center">
                <Image src={Sucesso} alt="Sucesso" width={80} height={80} />
              </div>

              <AlertDialogTitle className="text-[#3D4C62] text-center">
                Mensagem enviada com sucesso!
              </AlertDialogTitle>

              <AlertDialogDescription className="text-[#5F7691] text-center">
                Ficamos muito felizes com o seu contato e vamos responder assim que possível.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="flex justify-center">
              <AlertDialogAction className="bg-[#109DAD] hover:bg-[#0a7f8a] cursor-pointer" onClick={handleSendAnotherMessage}>
                Enviar outra mensagem
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  )
}

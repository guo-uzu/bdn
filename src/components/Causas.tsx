import React from 'react'
import Causa40Horas from "@assets/Causa40Horas.webp"
import CausaBuro from "@assets/CausaBuro.webp"
import CausaCancer from "@assets/CausaCancer.webp"
import CausaCuidado from "@assets/CausaCuidado.webp"
import CausaSilla from "@assets/CausaSilla.png"
import CausaVacaciones from "@assets/CausaVacaciones.png"
import CartModal from './CartModal'

export default function Causas() {
  const causas = [
    {
      title: "40 horas, ¡Ahora!",
      text: "La duración de la jornada laboral no ha cambiado en más de 100 años.",
      src: Causa40Horas.src
    },
    {
      title: "Todo contra el cáncer infantil",
      text: "El cáncer infantil es la primera causa de muerte por enfermedad en niños de 5 a 14 años.",
      src: CausaCancer.src
    },
    {
      title: "Derecho al Cuidado",
      text: "En México, en 7 de cada 10 hogares hay al menos una persona que requiere cuidados.",
      src: CausaCuidado.src
    },
    {
      title: "Que el buró no te quite el sueño",
      text: "¿Estar en el buró de crédito por deber 200 pesos del teléfono? ¿Te parece justo?",
      src: CausaBuro.src
    },
    {
      title: "Ley Silla",
      text: "El 45% de las personas en México trabaja de pie y sin descanso.",
      src: CausaSilla.src
    },
    {
      title: "Que el buró no te quite el sueño",
      text: "¡Haz tus maletas!",
      src: CausaVacaciones.src
    },
  ]

  return (
    <section id='Causas' className='bg-gray-bg px-2'>
      <h3 className='text-center font-montserrat font-black text-orange-400 text-2xl px-2 capitalize py-12'>nuestras causas</h3>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,290px))] gap-4 max-w-[1000px] mx-auto'>
        {
        causas.map(causa => (
          <CartModal src={causa.src} title={causa.title} text={causa.text} />
        ))
        }
      </div>
    </section>
  )
}

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
      src: Causa40Horas.src,
      modalText: [
        "¿Sabias que la duración de la jornada laboral no ha cambiado en más de 100 años?",
        "Vamos por la reducción de la jornada a 40 horas, para que tengas más tiempo para estar con los tuyos, descansar y recargar pilas.",
        "40 horas ¡Ahora!"
      ]
    },
    {
      title: "Todo contra el cáncer infantil",
      text: "El cáncer infantil es la primera causa de muerte por enfermedad en niños de 5 a 14 años.",
      src: CausaCancer.src,
      modalText: [
        "Así como en Jalisco y Nuevo León, queremos que todas las niñas y niños de México tengan tratamiento gratuito contra el cáncer.",
        "En la Bancada Naranja lo damos todo contra el cáncer infantil."
      ]
    },
    {
      title: "Derecho al Cuidado",
      text: "En México, en 7 de cada 10 hogares hay al menos una persona que requiere cuidados.",
      src: CausaCuidado.src,
      modalText: [
        "En la Bancada Naranja vamos por el derecho al cuidado en todo México, con estancias infantiles, escuelas de tiempo completo, casas de día, servicios médicos, capacitaciones, apoyos económicos y más.",
        ""
      ]
    },
    {
      title: "Que el buró no te quite el sueño",
      text: "¿Estar en el buró de crédito por deber 200 pesos del teléfono? ¿Te parece justo?",
      src: CausaBuro.src,
      modalText: [
        "El buró de crédito es injusto y abusivo.",
        "Queremos que el buró no te quite el sueño, por ello, en la Bancada Naranja proponemos que nadie acabé en el buró por una deuda menor a 8 mil pesos y que cuando pagues no tardes más de 10 días en salir."
      ]
    },
    {
      title: "Ley Silla",
      text: "El 45% de las personas en México trabaja de pie y sin descanso.",
      src: CausaSilla.src,
      modalText: [
        "El 45% de las personas en México trabaja de pie y sin descanso.",
        "Por eso, en la Bancada Naranja logramos que a partir del 17 de junio de 2025 sea obligatorio proveer sillas con respaldo en todos los centros de trabajo."
      ]
    },
    {
      title: "Mas vacaciones",
      text: "¡Haz tus maletas!",
      src: CausaVacaciones.src,
      modalText: [
        "¡Haz tus maletas!",
        "En la Bancada Naranja logramos duplicar los días de vacaciones desde el primer año de trabajo."
      ]
    },
  ]

  return (
    <section id='Causas' className='bg-gray-bg pt-16 pb-2 px-2'>
      <h3 className='text-center font-montserrat font-black text-orange-400 text-4xl max-[960px]:text-2xl px-2 capitalize pb-10'>nuestras causas</h3>
      <div className='grid justify-center grid-cols-3 max-[640px]:grid-cols-2  gap-4 max-w-[1000px] mx-auto'>
        {
        causas.map(causa => (
          <CartModal src={causa.src} title={causa.title} text={causa.text} modalText={causa.modalText}  />
        ))
        }
      </div>
    </section>
  )
}

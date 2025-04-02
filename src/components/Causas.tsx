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
      text: "¿Sabías que la duración de la jornada laboral no ha cambiado en más de 100 años?",
      src: Causa40Horas.src,
      modalText: [
        "¿Sabías que la duración de la jornada laboral no ha cambiado en más de 100 años?",
        "Vamos por la reducción de la jornada a 40 horas, para que tengas más tiempo para estar con los tuyos, descansar y recargar pilas.",
        "40 horas, ¡Ahora!"
      ],
      iniciativas: [
	      "https://gaceta.diputados.gob.mx/Gaceta/66/2024/oct/20241008-II-6.html#Iniciativa2",
	      "https://gaceta.diputados.gob.mx/PDF/66/2025/feb/20250212-II-6-1.pdf#page=2"
      ],
    },
    {
      title: "Todo contra el cáncer infantil",
      text: "Así como en Jalisco y Nuevo León, queremos que todas las niñas y niños de México tengan tratamiento gratuito contra el cáncer.",
      src: CausaCancer.src,
      modalText: [
        "Así como en Jalisco y Nuevo León, queremos que todas las niñas y niños de México tengan tratamiento gratuito contra el cáncer.",
        "En la Bancada Naranja lo damos todo contra el cáncer infantil."
      ],
      iniciativas: ["https://gaceta.diputados.gob.mx/Gaceta/66/2025/feb/20250212-II-6.html#Iniciativa1"]
    },
    {
      title: "Derecho al Cuidado",
      text: "En la Bancada Naranja vamos por el derecho al cuidado en todo México, con estancias infantiles, escuelas de tiempo completo, casas de día, servicios médicos, capacitaciones, apoyos económicos y más.",
      src: CausaCuidado.src,
      modalText: [
        "En la Bancada Naranja vamos por el derecho al cuidado en todo México, con estancias infantiles, escuelas de tiempo completo, casas de día, servicios médicos, capacitaciones, apoyos económicos y más.",
        "Porque los cuidados son un derecho, pero también son trabajo y deben ser valorados."
      ],
	iniciativas: ["https://gaceta.diputados.gob.mx/PDF/66/2024/oct/20241022-II-6-1.pdf#page=2"]
    },
    {
      title: "Que el buró no te quite el sueño",
      text: "El buró de crédito es injusto y abusivo. ",
      src: CausaBuro.src,
      modalText: [
        "El buró de crédito es injusto y abusivo.",
        "Queremos que el buró no te quite el sueño, por ello, en la Bancada Naranja proponemos que nadie acabé en el buró por una deuda menor a 8 mil pesos y que cuando pagues no tardes más de 10 días en salir."
      ],
      iniciativas: ["https://gaceta.diputados.gob.mx/PDF/66/2024/oct/20241030-II-6-1.pdf#page=2"]
    },
    {
      title: "Ley Silla",
      text: "El 45 % de las personas en México trabaja de pie y sin descanso.",
      src: CausaSilla.src,
      modalText: [
        "El 45 % de las personas en México trabaja de pie y sin descanso.",
        "Por eso, en la Bancada Naranja logramos que a partir del 17 de junio de 2025 sea obligatorio proveer sillas con respaldo en todos los centros de trabajo."
      ],
      iniciativas: ["https://gaceta.diputados.gob.mx/PDF/66/2024/oct/20241002-IV.pdf"],
      dofs: ["https://gaceta.diputados.gob.mx/PDF/66/2024/oct/DOF19DIC2024-VariosLeyFedTRabajoLeySilla.pdf"]
    },
    {
      title: "Más vacaciones",
      text: "¡Haz tus maletas!",
      src: CausaVacaciones.src,
      modalText: [
        "¡Haz tus maletas!",
        "En la Bancada Naranja logramos duplicar los días de vacaciones desde el primer año de trabajo."
      ],
      iniciativas: ["https://gaceta.diputados.gob.mx/Gaceta/65/2022/feb/20220210-II.html#Iniciativa4"],
      dofs: ["https://www.dof.gob.mx/nota_detalle.php?codigo=5675889&fecha=27/12/2022#gsc.tab=0"]
    },
  ]

  return (
    <section id='Causas' className='bg-gray-bg pt-16 pb-2 px-2'>
      <h3 className='text-center font-montserrat font-black text-orange-400 text-4xl max-[960px]:text-2xl px-2 uppercase pb-10'>nuestras causas</h3>
      <div className='grid justify-center grid-cols-3 max-[640px]:grid-cols-2  gap-4 max-w-[1000px] mx-auto'>
        {
        causas.map(causa => (
          <CartModal src={causa.src} title={causa.title} text={causa.text} modalText={causa.modalText} iniciativas={causa.iniciativas} dofs={causa.dofs}/>
        ))
        }
      </div>
    </section>
  )
}

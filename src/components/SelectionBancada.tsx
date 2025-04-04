import React, { useState } from 'react'
import DiputadoIvonneOrtega from "@assets/DiputadoIvonneOrtega.webp"
import DiputadoLauraBllesteros from "@assets/DiputadoLauraBallesteros.webp"
import DiputadoRaulLozano from "@assets/DiputadoRaulLozano.webp"
import DiputadoTecutliGomez from "@assets/DiputadoTecutliGomez.webp"

import DiputadoAlfredoLozoya from "@assets/DiputadoAlfredoLozoya.webp"
import DiputadoAnayeliMunoz from "@assets/DiputadoAnayeliMunoz.webp"
import DiputadoArmandoRuiz from "@assets/DiputadoArmandoRuiz.webp"
import DiputadoClaudiaRuizMassieu from "@assets/DiputadoClaudiaRuizMassieu.webp"
import DiputadoClaudiaSalas from "@assets/DiputadoClaudiaSalas.webp"
import DiputadoFatimaGarcia from "@assets/DiputadoFatimaGarcia.webp"
import DiputadoFranciscoFarias from "@assets/DiputadoFranciscoFarias.webp"
import DiputadoGibranRamirez from "@assets/DiputadoGibranRamirez.webp"
import DiputadoGildardoPerez from "@assets/DiputadoGildardoPerez.webp"
import DiputadoGloriaNunez from "@assets/DiputadoGloriaNunez.webp"
import DiputadoGustavoDeHoyos from "@assets/DiputadoGustavoDeHoyos.webp"
import DiputadoHugoLuna from "@assets/DiputadoHugoLuna.webp"
import DiputadoIraisReyes from "@assets/DiputadoIraisReyes.webp"
import DiputadoJuanZamperio from "@assets/DiputadoJuanZamperio.webp"
import DiputadoJuanZavala from "@assets/DiputadoJuanZavala.webp"
import DiputadoLauraHernandez from "@assets/DiputadoLauraHernandez.webp"
import DiputadoMackyGonzalez from "@assets/DiputadoMackyGonzalez.webp"
import DiputadoMiguelSanchez from "@assets/DiputadoMiguelSanchez.webp"
import DiputadoPabloVazquez from "@assets/DiputadoPabloVazquez.webp"
import DiputadoPaolaLongoria from "@assets/DiputadoPaolaLongoria.webp"
import DiputadoPatriciaFloresElizondo from "@assets/DiputadoPatriciaFloresElizondo.webp"
import DiputadoPatriciaMercado from "@assets/DiputadoPatriciaMercado.webp"
import DiputadoSergioGil from "@assets/DiputadoSergioGil.webp"

import FacebookLogo from "@assets/FacebookLogo.svg"
import InstagramLogo from "@assets/InstagramLogo.svg"
import XLogo from "@assets/XLogo.svg"

export default function SelectionBancada() {
    const diputados = [
        {
            name: "Ivonne Ortega",
            position: "Coordinadora de la Bancada Naranja",
            state: "Yucatan",
            imageSrc: DiputadoIvonneOrtega,
            socialMedia: {
                facebook: "https://www.facebook.com/IvonneOrtegaP",
                instagram: "https://www.instagram.com/ivonneop/",
                x: "https://x.com/IvonneOP"
            }
        },
        {
            name: "Tecutli Gómez",
            position: "Vicecoordinador de la Bancada Naranja",
            state: "Jalisco",
            imageSrc: DiputadoTecutliGomez,
            socialMedia: {
                facebook: "https://www.facebook.com/tecutligomezmc",
                instagram: "https://www.instagram.com/tecutli_gomez/",
            }
        },
        {
            name: "Raúl Lozano",
            position: "Vicecoordinador de la Bancada Naranja",
            state: "NuevoLeon",
            imageSrc: DiputadoRaulLozano,
            socialMedia: {
                facebook: "https://www.facebook.com/LozanoRaul",
                instagram: "https://www.instagram.com/raullozanocaballero/",
                x: "https://x.com/RaulLozanoC"
            }
        },
        {
            name: "Laura Ballesteros",
            position: "Secretaria de la Mesa Directiva",
            state: "CiudadDeMexico",
            imageSrc: DiputadoLauraBllesteros,
            socialMedia: {
                facebook: "https://www.facebook.com/LauraBallesterosMX",
                instagram: "https://www.instagram.com/lauraballesterosm/",
                x: "https://x.com/LBallesterosM"
            }
        },
        {
            name: "Patricia Mercado",
            position: "Presidenta de la Comisión de Movilidad",
            state: "Sonora",
            imageSrc: DiputadoPatriciaMercado,
            socialMedia: {
                facebook: "https://www.facebook.com/PatriciaMercadoCastro",
                instagram: "https://www.instagram.com/patriciamercadocastro/",
                x: "https://x.com/Pat_MercadoC"
            }
        },
        {
            name: "Claudia Salas Rodríguez",
            position: "Presidenta de la Comisión de Zonas Metropolitanas",
            state: "Jalisco",
            imageSrc: DiputadoClaudiaSalas,
            socialMedia: {
                facebook: "https://www.facebook.com/ClaudiaSalasGDL",
                instagram: "https://www.instagram.com/claudiasalasgdl/",
                x: "https://x.com/ClaudiaSalasGDL"
            }
        },
        {
            name: "Paola Longoria",
            position: "Presidenta de la Comisión del Deporte",
            state: "NuevoLeon",
            imageSrc: DiputadoPaolaLongoria,
            socialMedia: {
                facebook: "https://www.facebook.com/PaolaLongoriaOficial",
                instagram: "https://www.instagram.com/paolongoria/",
                x: "https://x.com/paolongoria"
            }
        },

        // Aqui los siguientes 
        {
            name: "Anayeli Muñoz",
            position: "Diputada Ciudadana",
            state: "Aguascalientes",
            imageSrc: DiputadoAnayeliMunoz,
            socialMedia: {
                facebook: "https://www.facebook.com/AnayeliMunoz15",
                instagram: "https://www.instagram.com/anayeli.munoz/",
                x: "https://x.com/AnayeliMunoz"
            }
        },
        {
            name: "Gustavo de Hoyos Walther",
            position: "Diputado Ciudadano",
            state: "BajaCalifornia",
            imageSrc: DiputadoGustavoDeHoyos,
            socialMedia: {
                facebook: "https://www.facebook.com/Gdehoyoswalther",
                instagram: "https://www.instagram.com/gdehoyoswalther/",
                x: "https://x.com/gdehoyoswalther"
            }
        },
        {
            name: "Francisco Farias",
            position: "Diputado Ciudadano",
            state: "Campeche",
            imageSrc: DiputadoFranciscoFarias,
            socialMedia: {
                facebook: "https://www.facebook.com/franciscobbfariasmx",
                instagram: "https://www.instagram.com/franciscobbfariasmx/?hl=es",
                x: "https://x.com/bbfariasmx"
            }
        },
        {
            name: "Alfredo Lozoya",
            position: "Diputado Ciudadano",
            state: "Chihuahua",
            imageSrc: DiputadoAlfredoLozoya,
            socialMedia: {
                facebook: "https://www.facebook.com/AlfredoLozoyaMX",
                instagram: "https://www.instagram.com/alfredolozoyamx/",
                x: "https://x.com/AlfredoLozoyaMX"
            }
        },
        {
            name: "Macky González",
            position: "Diputada Ciudadana",
            state: "CiudadDeMexico",
            imageSrc: DiputadoMackyGonzalez,
            socialMedia: {
                facebook: "https://www.facebook.com/mackygmx",
                instagram: "https://www.instagram.com/macky.mx/",
                x: "https://x.com/macky_mx?lang=es"
            }
        },
        {
            name: "Gibrán Ramírez",
            position: "Diputado Ciudadano",
            state: "CiudadDeMexico",
            imageSrc: DiputadoGibranRamirez,
            socialMedia: {
                facebook: "https://www.facebook.com/gibranramirezr",
                instagram: "https://www.instagram.com/gibranramirezreyes/",
                x: "https://x.com/gibranrr"
            }
        },
        {
            name: "Claudia Ruiz Massieu",
            position: "Diputada Ciudadana",
            state: "CiudadDeMexico",
            imageSrc: DiputadoClaudiaRuizMassieu,
            socialMedia: {
                facebook: "https://www.facebook.com/RuizMassieu",
                instagram: "https://www.instagram.com/cruizmassieu/",
                x: "https://x.com/ruizmassieu"
            }
        },
        {
            name: "Juan Zavala",
            position: "Diputado Ciudadano",
            state: "CiudadDeMexico",
            imageSrc: DiputadoJuanZavala,
            socialMedia: {
                facebook: "https://web.facebook.com/jzavalagt1",
                instagram: "https://www.instagram.com/jzavalagt1/",
                x: "https://x.com/JZavalaGt"
            }
        },
        {
            name: "Paty Flores Elizondo",
            position: "Diputada Ciudadana",
            state: "Durango",
            imageSrc: DiputadoPatriciaFloresElizondo,
            socialMedia: {
                facebook: "https://www.facebook.com/PatyFloresElizondo",
                instagram: "https://www.instagram.com/patyfloreselizond/",
                x: "https://x.com/Paty_FloresE"
            }
        },
        {
            name: "Laura Hernández",
            position: "Diputada Ciudadana",
            state: "EstadoDeMexico",
            imageSrc: DiputadoLauraHernandez,
            socialMedia: {
                facebook: "https://www.facebook.com/DipLauraDDHH",
                instagram: "https://www.instagram.com/diplauraddhh/",
                x: "https://x.com/DipLauraDDHH"
            }
        },
        {
            name: "Gildardo Pérez",
            position: "Diputado Ciudadano",
            state: "EstadoDeMexico",
            imageSrc: DiputadoGildardoPerez,
            socialMedia: {
                facebook: "https://www.facebook.com/GildardoPerezGabino",
                instagram: "https://www.instagram.com/gildardoperezgabino/",
                x: "https://x.com/gildardoperezg"
            }
        },
        {
            name: "Armando Ruiz",
            position: "Diputado Ciudadano",
            state: "EstadoDeMexico",
            imageSrc: DiputadoArmandoRuiz,
            socialMedia: {
                facebook: "https://www.facebook.com/armandoruizenmovimient0",
                instagram: "https://www.instagram.com/armandoruizmc/"
            }
        },
        {
            name: "Juan Ignacio Samperio",
            position: "Diputado Ciudadano",
            state: "EstadoDeMexico",
            imageSrc: DiputadoJuanZamperio,
            socialMedia: {
                facebook: "https://www.facebook.com/IgnacioSamperioM?mibextid=LQQJ4d",
                instagram: "https://www.instagram.com/juansamperiomc/",
                x: "https://x.com/JuanSamperioMC"
            }
        },
        {
            name: "Hugo Luna",
            position: "Diputado Ciudadano",
            state: "Jalisco",
            imageSrc: DiputadoHugoLuna,
            socialMedia: {
                facebook: "https://www.facebook.com/HugoLunaV",
                instagram: "https://www.instagram.com/hugolunav/",
                x: "https://x.com/HugoLunaV"
            }
        },
        {
            name: "Pablo Vázquez Ahued",
            position: "Diputado Ciudadano",
            state: "Jalisco",
            imageSrc: DiputadoPabloVazquez,
            socialMedia: {
                instagram: "https://www.instagram.com/pablo_vah_/",
                x: "https://x.com/Pablo_VAh"
            }
        },
        {
            name: "Gloria Núñez",
            position: "Diputada Ciudadana",
            state: "Nayarit",
            imageSrc: DiputadoGloriaNunez,
            socialMedia: {
                facebook: "https://www.facebook.com/share/162NBEokit/",
                instagram: "https://www.instagram.com/gloria_nayarit/",
                x: "https://x.com/GloriaNunezs"
            }
        },
        {
            name: "Iraís Reyes",
            position: "Diputada Ciudadana",
            state: "NuevoLeon",
            imageSrc: DiputadoIraisReyes,
            socialMedia: {
                facebook: "https://www.facebook.com/IraisReyesT",
                instagram: "https://www.instagram.com/irais_reyes/",
                x: "https://x.com/irais_reyes"
            }
        },
        {
            name: "Miguel Sánchez",
            position: "Diputado Ciudadano",
            state: "NuevoLeon",
            imageSrc: DiputadoMiguelSanchez,
            socialMedia: {
                facebook: "https://www.facebook.com/miguelsanchezrv",
                instagram: "https://www.instagram.com/miguelsanchezrv/"
            }
        },
        {
            name: "María de Fátima García León",
            position: "Diputada Ciudadana",
            state: "Oaxaca",
            imageSrc: DiputadoFatimaGarcia,
            socialMedia: {
                facebook: "https://www.facebook.com/profile.php?id=100057963133866",
                instagram: "https://www.instagram.com/ma_defatima/"
            }
        },
        {
            name: "Sergio Gil",
            position: "Diputado Ciudadano",
            state: "Veracruz",
            imageSrc: DiputadoSergioGil,
            socialMedia: {
                facebook: "https://www.facebook.com/SergioGilRu",
                instagram: "https://www.instagram.com/sergiogilru/",
                x: "https://x.com/SergioGilRu"
            }
        }
    ]

    const [cardsToDisplay, setCardsToDisplay] = useState(4)
    const [select, setSelect] = useState("all")

    const handleSelect = (e: any) => {
        setSelect(e.target.value)
        setCardsToDisplay(4)
    }
    const diputadosFiltrados = select === "all" ? diputados : diputados.filter(d => d.state === select)
    let diputadosToDisplay = diputadosFiltrados.slice(0, cardsToDisplay)
    
    const changeLengthDisplay = () => {
        setCardsToDisplay(cardsToDisplay + 4)
    }


    return (
        <section id='BancadaNaranja' className='py-12 px-2'>
            <div className='max-w-[1000px] mx-auto font-montserrat'>
                <div className=''>
                    <select className='bg-gray-bg drop-shadow-md my-6 p-2 selection:border-0 focus:border-0' name="estados" id="estados" onChange={handleSelect} value={select}>
                        <option value="all">Estados</option>
                        <option value="Aguascalientes">Aguascalientes</option>
                        <option value="BajaCalifornia">Baja California</option>
                        <option value="Campeche">Campeche</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="CiudadDeMexico">Ciudad de México</option>
                        <option value="Durango">Durango</option>
                        <option value="EstadoDeMexico">Estado de México</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="NuevoLeon">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatan">Yucatán</option>
                    </select>
                </div>
                <div className={`grid justify-center gap-2 font-montserrat ${ diputadosToDisplay.length < 4 ? "grid-cols-[repeat(auto-fit,minmax(200px,250px))]" : "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"}  mx-auto max-[425px]:grid-cols-2`}>
                    {
                        diputadosToDisplay.map((diputado, index) => (
                            <div key={index} className='relative flex drop-shadow-md flex-col rounded-xl w-full bg-white '>
                                <img className='rounded-t-xl' src={diputado.imageSrc.src} alt="" />
                                <div className='flex flex-col p-2 mt-3'>
                                    <h3 className='text-black font-bold text-md max-[375px]:text-center'>{diputado.name}</h3>
                                    <div className='flex max-[425px]:flex-col'>
                                        <p className='text-gray-texts font-light text-xs max-[425px]:text-center'>{diputado.position}</p>
                                        <div className='flex justify-center'>
                                            {
                                                diputado.socialMedia.facebook && (
                                                    <a target='_blank' href={diputado.socialMedia.facebook}><img className='min-w-[30px]' src={FacebookLogo.src} alt="" /></a>
                                                )
                                            }
                                            {
                                                diputado.socialMedia.x && (
                                                    <a target='_blank' href={diputado.socialMedia.x}><img className='min-w-[30px]' src={XLogo.src} alt="" /></a>

                                                )
                                            }
                                            {
                                                diputado.socialMedia.instagram && (
                                                    <a target='_blank' href={diputado.socialMedia.instagram}><img className='min-w-[30px]' src={InstagramLogo.src} alt="" /></a>

                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    diputadosToDisplay.length !== diputadosFiltrados.length ? 
                    <button className='cursor-pointer flex gap-2 my-5 items-center text-gray-texts' onClick={changeLengthDisplay}>
                    Ver más
                    <svg
                        className='rounded'
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="100%" height="100%" fill='#ff7c00' />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                        />
                        <path
                            d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
                            fill="white"
                        />
                    </svg>
                </button>
                : ""  
                }
                
            </div>
        </section>
    )
}

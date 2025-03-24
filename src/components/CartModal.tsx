import { useState } from 'react'
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"

export default function CartModal({ src, title, text, modalText }: { src: string, title: string, text: string, modalText: string[] }) {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='flex font-montserrat flex-col items-center p-4 gap-2 bg-white rounded-2xl'>
            <img className='max-w-[300px] w-full h-auto rounded-2xl' src={src} alt="" />
            <div className='flex flex-col flex-1 gap-2'>
                <h4 className='font-black text-orange-bnd text-md text-center'>{title}</h4>
                <p className='flex-1 text-sm text-gray-texts text-center line-clamp-4'>{text}</p>
            </div>
            <div className='flex w-full justify-end'>
                <button onClick={onOpenModal} className='cursor-pointer flex gap-2 items-center text-gray-texts'>
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
                <Modal 
                    
                    open={open}
                    onClose={onCloseModal}
                    center
                >
                    <h2 className='font-bold text-orange-bnd text-xl font-montserrat pb-4'>{title}</h2>
                    <div className='flex flex-col text-sm gap-2'>
                    {
                        modalText.map(text => <p className='font-montserrat text-md font-light text-gray-texts'>{text}</p>)
                    }
                    </div>
                </Modal>
            </div>
        </div>
    )
}

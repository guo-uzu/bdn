import BancadaLogo from "@assets/BancadaLogo.svg"

const Header = () => {
    const menu = [
        {
            name: "Link",
            href: "#"
        },
        {
            name: "Link",
            href: "#"
        },
        {
            name: "Link",
            href: "#"
        }
    ]
    return (
         <header>
            <div className="flex items-center justify-between p-4">
                <img className="w-[8rem]" src={BancadaLogo.src} alt="Bancada Logo" />
                
                <div className="flex flex-col gap-1">
                    {
                        menu.map(() => <div className="bg-orange-400 h-1 w-8"></div>)
                    }
                </div>
            </div>
         </header>
    )
}

export default Header
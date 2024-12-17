import { NavLink } from "../constant/data"


const Footer = () => {
  return (
    <footer className="sections mt-[120px] bg-footer bg-no-repeat bg-cover bg-center">
        <div>
            <div className="flex flex-wrap text-white-100 justify-between pb-12 mb-12 items-center border-b border-browns-100">
                <img src="/coffeelogo.svg" className="w-[87px] h-[99px]" alt="" />
                <div className="flex items-center font-semibold text-xl gap-5">
                    <p className="text-browns-100">Follow us</p>
                    <div className="flex gap-5">
                        <a href=""><img src="/facebook.png"  className="w-[30px] h-[30px]" alt="" /></a>
                        <a href=""><img src="/whatsapp.png" className="w-[30px] h-[30px]" alt="" /></a>
                        <a href=""><img src="/pinterest.png" className="w-[30px] h-[30px]" alt="" /></a>
                        <a href=""><img src="/instagram.png" className="w-[30px] h-[30px]" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="flex gap-y-5 justify-between items-center flex-wrap mt-10">
                <div>
                    <h4 className="font-semibold text-browns-100 mb-5 text-2xl">About Us</h4>
                    <div className="text-white-100 grid gap-2 font-semibold">
                        <p>(456) 789-12301</p>
                        <p>info@modrino.co.uk</p>
                        <p>South 13th street</p>
                        <p>New york America</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-browns-100 text-2xl mb-5">Explore</h4>
                    {
                        NavLink.map(nav=>{
                            return(
                                <div key={nav.name} className="">
                                    
                                    <a href="" className="text-white-100 font-semibold">{nav.name}</a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="grid gap-5">
                    <h4 className="font-semibold text-browns-100 text-2xl mb-5">Recent News</h4>
                    <div className="flex gap-5">
                        <img src="/footerimg1.png" alt="" />
                        <div className="text-white-100">
                            <span className="text-browns-100">June 14, 2024</span>
                            <p>Puff pastry bliss</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <img src="/footerimg2.png" alt="" />
                        <div className="text-white-100">
                            <span className="text-browns-100">June 14, 2024</span>
                            <p>Puff pastry bliss</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-10 text-white-200 mb-5">&copy; 2024 Bake House. All rights reserved</p>
    </footer>
  )
}

export default Footer
import logo from '../assets/coffeelogo.svg'
import { NavLink } from '../constant/data'

const Navbar = () => {
  return (
    <nav className='left-[20px] md:left-[100px] absolute pt-5'>
        <div className=' flex items-center gap-32'>
            <img src={logo}  alt="" width={87} height={99}  className='cursor-pointer'/>
            <div className='hidden md:flex gap-10'>
                {
                    NavLink.map(nav=>{
                        return(
                            <div key={nav.name}>
                                <a href="" className='font-semibold text-[22px] text-white-100 transition-all duration-300 hover:text-browns-100'>{nav.name}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar
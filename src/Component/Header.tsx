import Navbar from "./Navbar"


const Header = () => {
  return (
    <header className="px-5  md:px-[100px] relative bg-banner h-screen w-full bg-cover  bg-no-repeat">
        <Navbar/>
        <div className="pt-[150px] lg:pt-[200px] w-[80%] md:w-1/2 grid items-start justify-start h-full">
            <div className="text-left">
                <span className="text-browns-100 text-[24px] font-semibold leading-normal">Delicious Cafe</span>
                <h2 className="text-white-100 text-[42px]  lg:text-[74px] font-normal">Sweet Treats, Perfect Eats</h2>
            </div>
            <div className="flex max-sm:flex-col gap-5 text-left">
                <button className="generalButton w-fit text-white-100 transition-all duration-300 bg-browns-200 hover:bg-transparent hover:text-browns-100" type="button">Shop Now</button>
                <button className="generalButton w-fit border border-browns-200 text-browns-100 transition-all duration-300 bg-transparent hover:bg-browns-200 hover:text-white-100" type="button">Learn More</button>
            </div>
        </div>
    </header>
  )
}

export default Header
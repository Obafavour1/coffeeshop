import { NavLink } from "../constant/data"


const Footer = () => {
  return (
    <footer className="sections">
        <div>
            <div className="flex justify-between items-center border-b border-browns-100">
                <img src="/coffeelogo.svg" alt="" />
                <div className="flex gap-5">
                    <p>Follow us</p>
                    <div className="flex gap-5">
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10">
                <div>
                    <h4>About Us</h4>
                    <p>(456) 789-12301</p>
                    <p>info@modrino.co.uk</p>
                    <p>South 13th street</p>
                    <p>New york America</p>
                </div>
                <div>
                    {
                        NavLink.map(nav=>{
                            return(
                                <div key={nav.name}>
                                    <a href="">{nav.name}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <p className="mt-10">&copy; 2024 Bake House. All rights reserved</p>
    </footer>
  )
}

export default Footer

import './App.css'
import About from './Component/About'
import Footer from './Component/Footer'
import Header from './Component/Header'
import More from './Component/More'
import Order from './Component/Order'
import Product from './Component/Product'
// import Navbar from './Component/Navbar'

function App() {
  
  return (
    <main className='maxContainer w-full h-full'>
      {/* <Navbar/> */}
      <Header/>
      <Product/>
      <Order/>
      <More/>
      <About/>
      <Footer/>
    </main>
  )
}

export default App

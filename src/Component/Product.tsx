import { Products } from "../constant/data"


const Product = () => {
  return (
    <section className="sections">
        <div className="">
            <div>
                <h3 className="h3 text-center">Top Products</h3>
            </div>
            <div className="grid mt-5 lg:mt-10 gap-5 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl md:p-7 ">
                {
                   Products.map(product=>{
                    return(
                      <div key={product.price} className="grid w-full text-white-100 items-center justify-center bg-product bg-no-repeat pb-5 rounded-xl bg-cover bg-center">
                        <img src={product.img} width={226} height={223} alt="" />
                        <div className="w-full">
                          <div className="flex w-full  justify-between items-center">
                            <p className="text-2xl font-semibold">${product.price}</p>
                            <p className="rounded-full border px-[10px] text-white-100 ">i</p>
                          </div>
                          <div className="flex  mt-8 justify-between items-center">
                            <p className="text-lg font-medium">{product.text}</p>
                            <button className="p-2 rounded-md bg-browns-200 text-lg font-semibold" type="button">Add</button>
                          </div>
                        </div>
                      </div>
                    )
                   }) 
                }
            </div>
        </div>
    </section>
  )
}

export default Product
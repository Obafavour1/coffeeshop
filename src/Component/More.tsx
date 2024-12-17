

const More = () => {
  return (
    <section className="sections">
        <div>
            <h3 className="mb-10 h3 text-center">Explore More</h3>
            <div>
                <div className="border-b-2 mb-10 border-gray-200 ">
                    <div className="flex flex-wrap text-white-200 text-md md:text-2xl  justify-between md:w-1/2 mx-auto">
                        <button type="button">Cake</button>
                        <button type="button">Muffins</button>
                        <button type="button">Croissant</button>
                        <button type="button">Bread</button>
                        <button type="button">Tart</button>
                        <button type="button">Favorite</button>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-5">
                    <img src='/morecake1.svg' className="w-[360px] h-[350px]" alt="Cake" />
                    <img src="/morecake2.svg" className="w-[360px] h-[350px]" alt="" />
                    <img src="/morecake3.svg" className="w-[360px] h-[350px]" alt="" />
                    <img src="/morecake4.svg" className="w-[360px] h-[350px]" alt="" />
                    <img src="/morecake5.svg" className="w-[360px] h-[350px]" alt="" />
                    <img src="/morecake6.svg" className="w-[360px] h-[350px]" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default More
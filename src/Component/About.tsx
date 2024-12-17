

const About = () => {
  return (
    <section className="sections relative mt-[100px] pb-[100px] min-h-[400px] bg-about bg-no-repeat object-contain md:bg-cover md:bg-center">
      <div className="bg-black/20  absolute w-full h-full left-0 top-0"></div>
        <div>
            <div className="w-full z-30 text-center lg:w-[300px] mx-auto">
                <h3 className="text-browns-200 font-medium text-[48px]">About us</h3>
                <p className="my-8 text-white-100">Suspendisse ac rhoncus nisi, eu tempor urna. Curabitur vel bibenjgg</p>
                <button className="brownButton" type="button">Read More</button>
            </div>
        </div>
    </section>
  )
}

export default About
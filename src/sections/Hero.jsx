import hero from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className=" flex flex-col mt-[4.31rem] items-center text-center gap-[3.12rem] ">
      <div className=' flex flex-col gap-5 items-center'>
        <h1 className="text-black text-[1.75rem] font-[800] ">Make your dream<br/>business goal come true</h1>
        <p className="text-grey text-[0.875rem] font-[400] ">when you need us for improve your business,<br/>then come with us to help your business have reach<br/>it, you just sit and feel that goal.</p>
        <button className=' w-[9.13rem] h-[2.38rem] bg-primary rounded-[1.5rem] py-[0.625rem] px-[2.1875rem] text-[#FFF] font-quicksand text-[0.75rem] font-bold shadow-[0px_4px_8px_0px_rgba(55,_125,_255,_0.50)]'>
          Start Project
        </button>
      </div>
      <div>
        <img src={hero} alt="Hero" className=' w-[22.16rem] h-[15.7rem] '/>
      </div>
    </section>
  )
}

export default Hero
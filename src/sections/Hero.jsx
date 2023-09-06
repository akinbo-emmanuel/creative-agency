import hero from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className="mt-[4.31rem] content-center justify-center text-center">
      <div className='flex flex-col gap-5 '>
        <h1 className="text-black text-center text-[1.75rem] font-[800] ">Make your dream<br/>business goal come true</h1>
        <p className="text-grey">when you need us for improve your business,<br/>then come with us to help your business have reach<br/>it, you just sit and feel that goal.</p>
        <button>
          Start Project
        </button>
      </div>
      <div>
        <img src={hero} alt="Hero" />
      </div>
    </section>
  )
}

export default Hero
import logo from '../assets/logo.svg';
import hamburger from '../assets/ham.svg'


const Nav = () => {
  return (
    <header className='flex justify-center mt-[2.5rem] '>
      <nav className=' w-[21.25rem] h-[2.06rem] inline-flex items-center justify-center gap-[13.75rem] '>
        <img src={logo} alt="Our logo" className='w-[5.68rem] h-[2.06rem]'/>
        <button className='h-full'>
          <img src={hamburger} alt="Hamburger menu" className='w-[1.8rem] h-[1.56rem]'/>
        </button>
      </nav>
    </header>
  )
}

export default Nav
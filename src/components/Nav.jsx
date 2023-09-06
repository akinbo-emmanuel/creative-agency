import logo from '../assets/logo.svg';
import hamburger from '../assets/ham.svg'


const Nav = () => {
  return (
    <header className='w-[21.25rem] mt-[2.5rem] mx-[1.56rem] h-[2.06rem]'>
      <nav className='inline-flex content-center justify-center flex-row gap-[13.75rem] h-full'>
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="Our logo" className='w-[5.68rem] h-[2.06rem]'/>
          </a>
        </div>
        <div className="content-center">
          <button className='h-full'>
            <img src={hamburger} alt="Hamburger menu" className='w-[1.8rem] h-[1.56rem]'/>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
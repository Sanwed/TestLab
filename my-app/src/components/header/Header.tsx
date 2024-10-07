import {Link} from "react-router-dom";
import logoSrc from '../../assets/images/logo.svg'
import logoDarkSrc from '../../assets/images/logo-dark.svg'
import {useAppDispatch, useAppSelector} from "../../hooks/customHooks";
import {closeNav, toggleNav} from "../../store/navSlice";
import {useCallback, useEffect} from "react";
import classNames from "classnames";
import Navbar from "./Navbar";

function Header() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.nav.isOpen);

  const handleNavToggle = useCallback(() => dispatch(toggleNav()), [dispatch]);
  const handleNavClose = useCallback(() => dispatch(closeNav()), [dispatch])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen)
  }, [isOpen])

  return (
    <header className={classNames('w-full lg:bg-transparent', {
      'sm:fixed sm:h-screen sm:bg-white': isOpen,
      'sm:h-auto': !isOpen
    })}>
      <div className='max-w-container mx-auto items-center w-full
          sm:grid sm:grid-cols-2 sm:pl-4 sm:pt-1 sm:pb-4
          lg:flex lg:static lg:justify-between lg:py-2 lg:px-10 lg:bg-transparent'>
        <Link to='/' className='w-32 block'>
          <img src={isOpen ? logoDarkSrc : logoSrc} alt="Логотип" width='120' height='24' />
        </Link>
        <button onClick={handleNavToggle} aria-expanded={isOpen}
          className={classNames('w-16 h-16 bg-transparent relative sm:ml-auto lg:hidden ' +
            'before:absolute before:w-5 before:h-0.5 before:top-1/2 before:left-1/2 before:-translate-x-1/2 ' +
            'after:absolute after:w-5 after:h-0.5 after:top-1/2  after:left-1/2 after:-translate-x-1/2',
            {
              'before:-rotate-45 after:rotate-45 after:bg-black before:bg-black': isOpen,
              'after:bg-white before:bg-white before:translate-y-1 after:-translate-y-1': !isOpen
            }
          )}
        />
        <Navbar isOpen={isOpen} handleNavToggle={handleNavClose} />
      </div>
    </header>
  )
}

export default Header;

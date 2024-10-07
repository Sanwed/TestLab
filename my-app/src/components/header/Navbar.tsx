import {Link} from "react-router-dom";
import React from "react";
import classNames from "classnames";

interface NavbarProps {
  isOpen: boolean;
  handleNavToggle: () => void;
}

interface NavLinkProps {
  to: string,
  children: React.ReactNode,
  onClick: (evt: React.MouseEvent<HTMLAnchorElement>) => void
}

function NavLink({to, children, onClick}: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className='
        block
        sm:w-full sm:border-y sm:border-y-light-gray sm:text-gray sm:py-4 sm:text-lg sm:leading-8
        lg:border-none lg:text-white lg:text-base hover:border-b-[1px]'>
      {children}
    </Link>
  )
}

function Navbar({isOpen, handleNavToggle}: NavbarProps) {

  const handleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    handleNavToggle()
    const targetId = evt.currentTarget.getAttribute('href')!;
    const targetElement = document.querySelector(targetId.slice(1));

    if (targetElement) {
      targetElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  return (
    <nav className={classNames('lg:block', {
      'sm:col-span-full': isOpen,
      'sm:hidden': !isOpen
    })}
    >
      <ul className='lg:flex lg:flex-wrap lg:gap-6'>
        <li>
          <NavLink to='#about' onClick={handleLinkClick}>Как это работает</NavLink>
        </li>
        <li>
          <NavLink to='#third' onClick={handleLinkClick}>3-й блок</NavLink>
        </li>
        <li>
          <NavLink to='#third' onClick={handleLinkClick}>Вопросы и ответы</NavLink>
        </li>
        <li>
          <NavLink to='#third' onClick={handleLinkClick}>Форма</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;

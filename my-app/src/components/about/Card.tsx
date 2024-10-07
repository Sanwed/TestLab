import {AboutCardType} from "../../types/types";

function Card({imageSrc, title, description}: AboutCardType) {
  return (
    <li className='sm:grid sm:mb-8 sm:gap-x-4 sm:grid-cols-[56px,1fr] md:mb-0 lg:block lg:max-w-[280px]'>
      <div className='sm:row-span-3 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px] lg:mb-4'>
        <img
          className='block'
          src={imageSrc}
          alt={title}
          width='72'
          height='72'
          loading='lazy' />
      </div>
      <h3 className='font-semibold text-base leading-6 mb-1 text-black'>{title}</h3>
      <p className='text-dark-gray text-sm leading-6'>{description}</p>
    </li>
  )
}

export default Card

import {ReviewType} from "../../types/types.tsx";

function Review({imageSrc, name, city, description}: ReviewType) {
  return (
    <div className='shrink-0 transition-shadow rounded-lg shadow-base hover:shadow-hov bg-white sm:p-5 sm:pb-7 sm:min-h-[340px] sm:max-w-[288px] xs:max-w-[340px]'>
      <div className='grid grid-cols-[44px,1fr] gap-x-4 gap-y-1 mb-5'>
        <div className='row-span-2 w-11 h-11 rounded-full'>
          <img src={imageSrc} alt="" width='44' height='44' />
        </div>
        <h3 className='font-semibold text-black text-base leading-6'>{name}</h3>
        <span className='text-dark-gray text-xs leading-4'>{city}</span>
      </div>
      <p className='text-sm leading-6 text-black'>{description}</p>
    </div>
  )
}

export default Review

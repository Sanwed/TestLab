import {useAppDispatch} from "../../hooks/customHooks";
import {toggleHidden} from "../../store/faqSlice";
import {FaqCardType} from "../../types/types";
import {useCallback} from "react";
import classNames from "classnames";

function FaqCard({title, description, isHidden, order}: FaqCardType) {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => dispatch(toggleHidden(order as number - 1)), [dispatch])

  return (
    <div className='border-extra-light-gray border-t-2'>
      <button onClick={handleClick}
        className='w-full group flex justify-between gap-5 cursor-pointer focus:outline-0 md:py-4 lg:items-center lg:py-6'
        tabIndex={0}>
        <h3
          className='text-left group-hover:text-primary group-focus:text-primary transition-colors text-lg leading-8 font-semibold text-black'>{title}</h3>
        <div
          className={classNames('shrink-0 transition-all group-hover:border-primary group-focus:border-primary w-6 h-6 rounded-full border-black border-2 relative',
            {
              'rotate-45': !isHidden
            })}>
          <div
            className='group-hover:bg-primary group-focus:bg-primary transition-colors absolute rounded-full w-3 h-0.5 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          <div
            className='group-hover:bg-primary group-focus:bg-primary transition-colors absolute rounded-full h-3 w-0.5 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
      </button>
      <div className={classNames('sm:mb-4', {
        'hidden': isHidden
      })}>
        <p className='text-dark-gray sm:text-base sm:leading-7 sm:mr-12 md:text-lg md:leading-8'>{description}</p>
      </div>
    </div>
  )
}

export default FaqCard

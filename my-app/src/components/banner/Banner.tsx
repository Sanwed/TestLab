import {changeButtonText} from "../../store/buttonSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/customHooks";
import {useCallback} from "react";

const BUTTON_TEXTS = {
  text1: 'Проще простого!',
  text2: 'Действительно'
}

function Banner() {
  const dispatch = useAppDispatch()
  const buttonText = useAppSelector(state => state.button.buttonText)

  const handleClick = useCallback(() => {
    dispatch(changeButtonText(buttonText === BUTTON_TEXTS.text1 ? BUTTON_TEXTS.text2 : BUTTON_TEXTS.text1))
  }, [dispatch, buttonText])

  return (
    <div className="w-full">
      <div className='flex justify-between w-full max-w-container mx-auto bg-transparent sm:px-4 xs:py-10 md:px-10'>
        <div className='text-center mx-auto sm:pt-16 sm:pb-[129px] sm:max-w-[288px] md:pt-72 md:pb-[398px] md:max-w-[500px] lg:max-w-[800px] lg:pt-52 lg:pb-64'>
          <h1
            className='text-white font-semibold sm:text-[24px] sm:leading-8 sm:mb-2.5 md:mb-4 md:text-xl md:leading-10 lg:text-3xl lg:max-w-[800px] lg:leading-[64px]'>Говорят,
            никогда не поздно сменить профессию</h1>
          <p className='text-white sm:mb-6 md:text-base md:leading-7 md:mb-10 lg:text-lg lg:leading-8 lg:mb-[92px]'>Сделай круто
            тестовое задание и у тебя получится</p>
          <button
            onClick={handleClick}
            className='transition-colors rounded py-5 px-10 font-semibold text-[20px] leading-6 text-black bg-light-gray hover:outline-1 hover:outline-mid-gray hover:bg-white'
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner

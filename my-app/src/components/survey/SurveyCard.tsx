import {SurveyCardType} from "../../types/types.tsx";

function SurveyCard({title, description}: SurveyCardType) {
  return (
    <div className='sm:mb-5'>
      <h3 className='font-semibold text-black text-lg leading-8 sm:mb-3 md:mb-11 lg:mb-4'>{title}</h3>
      <p className='text-black text-base leading-7'>{description}</p>
    </div>
  )
}

export default SurveyCard

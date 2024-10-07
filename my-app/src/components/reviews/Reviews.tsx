import {ReviewType} from "../../types/types.tsx";

import reviewSrc1 from '../../assets/images/review-1.png';
import reviewSrc2 from '../../assets/images/review-2.png';
import defaultSrc from '../../assets/images/default-review.png';
import Slider from "./Slider.tsx";
import {useEffect, useState} from "react";

const reviews: ReviewType[] = [
  {
    id: 1,
    imageSrc: reviewSrc1 || defaultSrc,
    name: 'Константинов Михаил Павлович',
    city: 'Санкт-Петербург',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы '
  },
  {
    id: 2,
    imageSrc: reviewSrc2 || defaultSrc,
    name: 'Иван Иванов',
    city: 'Санкт-Петербург',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
  },
  {
    id: 3,
    imageSrc: defaultSrc,
    name: 'Артем Корнилов',
    city: 'Самара',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
  },
  {
    id: 4,
    imageSrc: defaultSrc,
    name: 'Александр',
    city: 'Тольятти',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
  },
  {
    id: 5,
    imageSrc: defaultSrc,
    name: 'Алексей',
    city: 'Самара',
    description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
  },
]

function Reviews() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='bg-extra-light-gray'>
      <div className='w-full max-w-container mx-auto sm:px-4 sm:py-7 md:pb-10 lg:p-10 lg:pb-11 lg:pt-14'>
        <h2 className='font-semibold text-black sm:text-[24px] sm:mb-6 sm:leading-8 lg:text-2xl lg:leading-[56px] md:text-2xl md:leading-[56px] text-center lg:mb-8'>Отзывы</h2>
        <Slider slidesToShow={width >= 1296 ? 3 : width >= 768 ? 2 : 1} slidesData={reviews} />
      </div>
    </section>
  )
}

export default Reviews

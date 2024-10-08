import FaqCard from "./FaqCard";
import {FaqCardType} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../hooks/customHooks";
import {useEffect} from "react";
import {setSlides} from "../../store/faqSlice";

const faqData: FaqCardType[] = [
  {
    id: 1,
    title: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
    description: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    isHidden: true,
  },
  {
    id: 2,
    title: 'Прототип нового сервиса - это как трубный призыв?',
    description: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    isHidden: true,
  },
  {
    id: 3,
    title: 'Частокол на границе продолжает удивлять?',
    description: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    isHidden: true,
  },
  {
    id: 4,
    title: 'Очевидцы сообщают, что слышали грохот грома грядущих изменений?',
    description: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    isHidden: true,
  },
  {
    id: 5,
    title: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
    description: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    isHidden: true,
  },
  {
    id: 6,
    title: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
    description: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    isHidden: true,
  },
  {
    id: 7,
    title: 'Высококачественный прототип будущего проекта обнадёживает?',
    description: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    isHidden: true,
  },
]


function Faq() {
  const dispatch = useAppDispatch()
  const slides = useAppSelector((state) => state.faq.cards)

  useEffect(() => {
    dispatch(setSlides(faqData))
  }, [dispatch])

  return (
    <section className='bg-white' id='faq'>
      <div className='w-full max-w-container mx-auto sm:px-4 sm:py-14 md:px-5 md:py-14 lg:px-10 lg:py-20'>
        <h2 className='text-center font-semibold text-black sm:text-[24px] sm:leading-8 sm:mb-7 md:text-2xl md:leading-[56px] lg:text-2xl lg:leading-[56px] lg:mb-10'>Вопросы и ответы</h2>
        <div className='flex flex-col lg:px-28'>
          {slides.map((card) => (
            <FaqCard key={card.id}  {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq

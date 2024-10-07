import aboutSrc1 from '../../assets/images/about-icon-1.svg'
import aboutSrc2 from '../../assets/images/about-icon-2.svg'
import aboutSrc3 from '../../assets/images/about-icon-3.svg'
import aboutSrc4 from '../../assets/images/about-icon-4.svg'
import {AboutCardType} from "../../types/types";
import Card from "./Card";

const Cards: AboutCardType[] = [
  {
    imageSrc: aboutSrc1,
    title: 'Прочитай задание внимательно',
    description: 'Думаю у тебя не займет это больше двух-трех минут'
  },
  {
    imageSrc: aboutSrc2,
    title: 'Изучи весь макет заранее',
    description: 'Подумай как это будет работать на разных разрешениях и при скролле'
  },
  {
    imageSrc: aboutSrc3,
    title: 'Сделай хорошо',
    description: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
  },
  {
    imageSrc: aboutSrc4,
    title: 'Получи предложение',
    description: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
  },
]

function About() {
  return (
    <section id='about' className='w-full bg-white'>
      <div className='w-full max-w-container mx-auto sm:px-4 sm:pb-0 sm:pt-14 md:pb-10 lg:p-10 lg:pt-20'>
        <h2 className='font-semibold text-black text-2xl leading-[56px] text-center
          sm:text-[24px] sm:mb-6 sm:leading-8
          xs:mb-7
          md:text-2xl md:leading-[56px] md:mb-10
          lg:mb-16'>Как это работает</h2>
        <ul className='w-full gap-8 md:grid md:grid-cols-2 lg:flex lg:flex-wrap'>
          {Cards.map((card, index) => (
            <Card
              key={card.title + index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About;

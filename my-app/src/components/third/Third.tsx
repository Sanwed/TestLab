import thirdSrc from '../../assets/images/third.png'

function Third() {
  return (
    <section id='third' className='w-full bg-white'>
      <div
        className='flex items-center w-full gap-6 max-w-container mx-auto sm:flex-col-reverse sm:px-4 sm:pt-7 sm:pb-14 md:flex-row md:px-5 md:pt-7 md:pb-14 lg:p-10 lg:pb-20'>
        <div>
          <h2
            className='font-semibold text-black sm:text-center sm:mb-7 sm:text-[20px] sm:leading-6 md:text-left md:mb-4 lg:text-xl lg:leading-10'>Круто,
            Я
            дошел до третьего блока</h2>
          <p className='sm:text-center md:text-left mb-7 text-dark-gray text-base leading-7'>63% опрошенных пользовались
            кредитами из-за того, что
            не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
          <p className='sm:text-center md:text-left text-dark-gray text-base leading-7'>Доступ к заработанным деньгам
            помогает отказаться от
            кредитов и экономить деньги на процентах и штрафах.</p>
        </div>
        <div className='shrink-0 sm:mb-0 md:mb-0 md:w-[351px] md:h-[265px] lg:w-[592px] lg:h-[448px]'>
          <img src={thirdSrc} alt="" width='592' height='448' />
        </div>
      </div>
    </section>
  )
}

export default Third

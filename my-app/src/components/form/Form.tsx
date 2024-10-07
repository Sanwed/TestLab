import {useAppDispatch, useAppSelector} from "../../hooks/customHooks.tsx";
import {checkErrors, setValues} from "../../store/formSlice.tsx";
import {validateNameInput, validatePhoneInput} from "../../utils/utils.tsx";
import {ChangeEvent, FormEvent} from "react";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path fill="#fff" d="M0 8.51 5.48 14 16 3.49 14.49 2l-9.01 9-3.99-3.99L0 8.51Z" />
    </svg>
  )
}

function SuccessIcon() {
  return (
    <div className='w-5 h-5 rounded-full bg-success flex justify-center items-center'>
      <CheckIcon />
    </div>
  )
}

function ErrorIcon() {
  return (
    <div className='w-5 h-5 rounded-full bg-error relative'>
      <div className='absolute w-3 h-0.5 bg-white top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 rotate-45'></div>
      <div className='absolute w-3 h-0.5 bg-white top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 -rotate-45'></div>
    </div>
  )
}

function PostForm() {
  const dispatch = useAppDispatch()
  const errors = useAppSelector((state) => state.form.errors)
  const values = useAppSelector((state) => state.form.values)

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target as HTMLInputElement;
    if (name === 'name') {
      dispatch(checkErrors([name, validateNameInput(value)]))
      dispatch(setValues([name, value]))
    }
    if (name === 'phone') {
      dispatch(checkErrors([name, validatePhoneInput(value)]))
      dispatch(setValues([name, value]))
    }
  }

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (Object.keys(errors).length === 0) {
      console.log('Форма отправлена')
    }
  }

  return (
    <section className='bg-white' id='form'>
      <div className='sm:py-14 sm:px-4 md:px-5 md:py-14 lg:py-20 w-full max-w-container mx-auto'>
        <h2
          className='text-center font-semibold text-black sm:text-[24px] sm:leading-8 sm:mb-8 md:mb-6 md:text-2xl md:leading-[56px] lg:mb-11'>Отправь
          форму</h2>
        <form onSubmit={handleFormSubmit} action="#" method='post' className='max-w-[800px] mx-auto'>
          <div className='sm:flex sm:flex-col sm:gap-5 md:grid md:grid-cols-2 gap-8 lg:items-start'>
            <label className='relative focus-within'>
              <input
                onChange={handleInputChange}
                maxLength={30}
                type="text"
                required
                name='name'
                className={`w-full transition-all text-black text-lg leading-8 rounded px-4 pt-7 pb-1 bg-extra-light-gray border-2 border-transparent
                  placeholder:text-mid-gray placeholder:text-lg placeholder:leading-8 placeholder:opacity-0 placeholder:transition-all
                  ${errors['name'] && 'border-error focus:border-error'}
                  focus:border-mid-gray focus:outline-0 focus:placeholder:opacity-100 peer`}
                placeholder='Текст' />
              <span
                className={`absolute transition-all text-dark-gray left-4 cursor-text peer-focus:text-sm peer-focus:leading-6 peer-focus:top-2
                  ${values['name'] ? 'text-sm leading-6 top-2' : 'text-lg leading-8 top-4'}
                `}>Имя</span>
              {errors['name'] ?
                <span className='absolute left-0 -bottom-5 text-sm leading-4 text-error'>{errors['name']}</span> : ''}
              <span className='w-5 h-5 rounded-full absolute right-4 top-1/2 -translate-y-1/2'>
                {errors['name'] && values['name'] ? <ErrorIcon /> : values['name'] ? <SuccessIcon /> : ''}
              </span>

            </label>
            <label className='relative focus-within'>
              <input
                onChange={handleInputChange}
                type='text'
                name='phone'
                required
                maxLength={20}
                className={`w-full transition-all text-black text-lg leading-8  rounded px-4 pt-7 pb-1 bg-extra-light-gray border-2 border-transparent
                  ${errors['phone'] && 'border-error focus:border-error'}
                  placeholder:transition-all placeholder:text-mid-gray placeholder:text-lg placeholder:leading-8 placeholder:opacity-0
                  focus:border-mid-gray focus:outline-0 focus:placeholder:opacity-100 peer`}
                placeholder='89656969066' />
              <span
                className={`absolute transition-all text-dark-gray left-4 cursor-text peer-focus:text-sm peer-focus:leading-6 peer-focus:top-2
                  ${values['phone'] ? 'text-sm leading-6 top-2' : 'text-lg leading-8 top-4'}
                `}>Телефон</span>
              {errors['phone'] ?
                <span className='absolute left-0 -bottom-5 text-sm leading-4 text-error'>{errors['phone']}</span> : ''}
              <span className='w-5 h-5 rounded-full absolute right-4 top-1/2 -translate-y-1/2'>
                {errors['phone'] && values['phone'] ? <ErrorIcon /> : values['phone'] ? <SuccessIcon /> : ''}
              </span>
            </label>
            <label className='focus-within flex items-center gap-4 cursor-pointer'>
              <input type="checkbox" name='agree' className='hidden peer' />
              <span
                className='transition-colors w-6 h-6 border-mid-gray border-2 rounded peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center'>
                <CheckIcon />
              </span>
              <span className='text-black text-base leading-6 select-none'>Согласен</span>
            </label>
            <button
              className='w-full bg-primary text-white text-[20px] leading-6 font-semibold p-5 rounded transition-colors hover:bg-hover'>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PostForm

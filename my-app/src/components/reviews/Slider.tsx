import {ReviewType} from "../../types/types.tsx";
import Review from "./Review.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/customHooks.tsx";
import {nextSlide, prevSlide, setSlide, setSlides, setVisibleSlides} from "../../store/reviewSlice.tsx";
import {useEffect} from "react";
import {useSwipeable} from "react-swipeable";

function ArrowIcon() {
  return (
    <svg className='transition-colors fill-mid-gray group-hover:fill-primary' width="32" height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.8387 2.27597C24.0816 2.0245 24.216 1.6877 24.2129 1.3381C24.2099 0.988509 24.0697 0.654093 23.8225 0.406882C23.5753 0.159671 23.2408 0.0194457 22.8912 0.0164078C22.5417 0.0133699 22.2049 0.147762 21.9534 0.39064L11.0574 11.2866C9.80757 12.5368 9.10547 14.2322 9.10547 16C9.10547 17.7677 9.80757 19.4631 11.0574 20.7133L21.9534 31.6093C22.2049 31.8522 22.5417 31.9866 22.8912 31.9835C23.2408 31.9805 23.5753 31.8403 23.8225 31.5931C24.0697 31.3459 24.2099 31.0114 24.2129 30.6618C24.216 30.3122 24.0816 29.9754 23.8387 29.724L12.9427 18.828C12.1928 18.0779 11.7716 17.0606 11.7716 16C11.7716 14.9393 12.1928 13.9221 12.9427 13.172L23.8387 2.27597Z"
      />
    </svg>
  )
}

function Slider({slidesToShow, slidesData}: { slidesToShow: number, slidesData: ReviewType[] }) {
  const dispatch = useAppDispatch();
  const slides = useAppSelector((state) => state.review.slides);
  const visibleSlides = useAppSelector((state) => state.review.visibleSlides)
  const activeSlide = useAppSelector((state) => state.review.activeSlide)

  useEffect(() => {
    dispatch(setSlides(slidesData));
  }, [dispatch, slidesData])

  useEffect(() => {
    dispatch(setVisibleSlides(slidesToShow));
  }, [slides]);

  const handleNextSlide = () => dispatch(nextSlide());
  const handlePrevSlide = () => dispatch(prevSlide());

  const handleDotClick = (index: number) => dispatch(setSlide(index));

  const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  return (
    <div>
      <div className='relative sm:mb-10 md:mb-14 lg:mb-8'>
        <div
          className='flex gap-8 mx-16 justify-center'
          {...handlers}
        >
          {visibleSlides.map((item, index) => (
            <Review key={item.id + index} {...item} />
          ))}
        </div>
        <div className='w-full absolute top-1/2 -translate-y-1/2 flex justify-between items-center'>
          <button onClick={handlePrevSlide} className='sm:hidden lg:block w-8 h-8 group'>
            <ArrowIcon />
          </button>
          <button onClick={handleNextSlide} className='sm:hidden lg:block w-8 h-8 rotate-180 group'>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4'>
        {slidesData.map((item, index) => (
          <button
            key={'nav-slide-btn' + item.id}
            className={`w-2 h-2 ${activeSlide === index + 1 ? 'bg-primary' : 'bg-mid-gray'} rounded-full`}
            onClick={() => handleDotClick(index + 1)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Slider

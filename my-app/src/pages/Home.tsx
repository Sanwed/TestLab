import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import Third from "../components/third/Third";
import Reviews from "../components/reviews/Reviews";
import Faq from "../components/faq/Faq";
import Survey from "../components/survey/Survey";
import PostForm from "../components/form/Form";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <div className='bg-no-repeat bg-cover bg-center sm:bg-banner-tablet lg:bg-banner-desktop'>
        <Header />
        <Banner />
      </div>
      <main>
        <About />
        <Third />
        <Reviews />
        <Faq />
        <Survey />
        <PostForm />
        <Footer />
      </main>
    </>
  )
}

export default Home

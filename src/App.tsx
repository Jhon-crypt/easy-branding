import Header from './components/header/header'
import Hero from './components/hero/hero'
import Hero2 from './components/hero/hero2'
import Hero3 from './components/hero/hero3'
import CallToActionSection from './components/section/callToActionSection'
import './App.css'

function App() {

  return (
    <>
      <div data-scroll-container>
        <div
          style={{
            backgroundColor: '#FFDE59',
            borderRadius: "0% 100% 8% 92% / 100% 0% 100% 0%"
          }}
          className='mb-5'
        >
          <Header />
          <Hero />
        </div>
        <Hero2 />
        <Hero3 />
        <CallToActionSection />
      </div>
    </>
  )
}

export default App

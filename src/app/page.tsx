import About from '@/components/About'
import Footer from '@/components/Footer/footer'
import HowPlay from '@/components/HowPlay/HowPlay'
import Navbar from '@/components/Navbar/navbar'
import PlayHome from '@/components/PlayNow'


export default function Home() {
  return (
    <>
      <main>
        <PlayHome/>
        <About/>
        <HowPlay/>
        <Footer/>
      </main>
    </>
    
  )
}

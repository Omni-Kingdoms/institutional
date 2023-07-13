import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/navbar'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-1">
          <Navbar/>

          <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="top-0 left-0 w-3/5 pb-6">
              <h1 className="text-2xl font-bold">TRAIN, CRAFT</h1>
              <h1 className="text-2xl font-bold">BATTLE & EARN</h1>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <p className='pb-20'> Welcome to Omni Kingdoms, a medieval land where danger and wonder intertwine. Here, every choice you make shapes your destiny in this grand tale of swords and sorcery.</p>
              <Link passHref href={"/home"}>
                <button
                  className="w-64 px-3 py-2 rounded bg-white text-black"
                >
                  Play
                  {/* <FaArrowRight size={20} color="black"/> */}
                </button>
              </Link>
            </div>
          </div>

        </div>
        <div>

        </div>
        <div> 
          <Footer/>
        </div>
      </main>
    </>
    
  )
}

import { Link } from 'react-router-dom'

import araguaney from '../../assets/homeAssets/araguaney.webp'
import ecologia from '../../assets/homeAssets/ecologia.png'
import pemon from '../../assets/homeAssets/pemon.png'
import NavBar from './NavBar'

const Home = () => {
  return (
    <>
      {/* MainPage */}
      <div className='flex flex-col w-full h-screen bg-[antiquewhite]'>
        <NavBar />
        <div className='flex w-full h-full'>
          <div className='flex items-center justify-center w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-500 relative'>
            <img
              src={araguaney}
              className='w-full h-full object-cover mix-blend-overlay absolute'
            />
            <div className='w-3/5 text-white text-center'>
              <h2 className='font-bold text-5xl pb-9'>
                Calcula tu huella ecológica!
              </h2>
              <p className='text-2xl pb-7'>
                Determina el impacto que tienen tus actividades cotidianas con
                el ambiente
              </p>
              <Link
                to='/form'
                className='py-2 px-8 rounded-xl text-2xl font-semibold tracking-wide bg-GreenPalette cursor-pointer inline-flex items-center justify-center isolate transition hover:bg-[#2db946] hover:shadow-xl outline-none ring-GreenPalette ring-offset-2 focus-visible:ring-2 focus:scale-[0.95] disabled:bg-green-500/50 disabled:cursor-not-allowed disabled:shadow'
              >
                Calcular!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is the Ecological Footprint? */}
      <div className='w-full h-screen bg-[#734035]'>
        <div className='flex w-full h-full items-center justify-around'>
          <div className='text-white w-1/3'>
            <h2 className='w-96 text-5xl font-bold pb-16'>
              ¿Qué es la huella ecológica?
            </h2>
            <p className='text-3xl pb-7'>
              Es la medida de cómo nuestras actividades cotidianas afectan al
              medio ambiente
            </p>
          </div>
          <div className='flex w-[550px] h-[550px] items-center justify-center rounded-full bg-[#A95A5A]'>
            <img src={ecologia} className='w-[400px] h-[400px]' />
          </div>
        </div>
      </div>

      {/* What is the meaning of Yarapë? */}
      <div className='w-full h-screen bg-[#FEE45A]'>
        <div className='flex w-full h-full items-center justify-around'>
          <div className='flex w-[550px] h-[550px] items-center justify-center rounded-full bg-[#FFF8B2]'>
            <img src={pemon} className='w-[400px] h-[400px]' />
          </div>
          <div className='text-black w-1/2'>
            <h2 className='text-5xl font-bold pb-16'>¿Qué significa Yarapë?</h2>
            <p className='text-3xl pb-7'>
              La palabra Yarapë proviene del dialecto pemón, una de las lenguas
              indígenas más habladas en Venezuela. En este idioma, Yarapë
              significa madre tierra y es una expresión que simboliza la
              conexión profunda e íntima que la cultura pemón tiene con la
              naturaleza.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

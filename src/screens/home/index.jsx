import { Link } from 'react-router-dom'
import clsx from 'clsx'

import h1 from '../../../assets/homeAssets/h1.png'
import h2 from '../../../assets/homeAssets/h2.jpeg'
import h3 from '../../../assets/homeAssets/h3.jpg'
import NavBar from './NavBar'

const Home = () => {
  return (
    <>
      {/* MainPage */}
      <div className={clsx('flex flex-col h-screen relative')}>
        <NavBar />
        <div className={clsx('flex w-full h-full')}>
          <div
            className={clsx(
              'flex flex-col items-center justify-around w-full h-full relative'
            )}
          >
            <img
              src={h1}
              className={clsx('w-full h-full object-cover absolute -z-10')}
            />
            <div
              className={clsx(
                'flex flex-col items-center w-4/5 text-white text-center '
              )}
            >
              <h2 className={clsx('font-bold text-4xl pb-9')}>
                Calculadora de Huella Ecológica
              </h2>
              <p className={clsx('text-xl font-medium pb-7')}>
                Determina el impacto que tienen tus actividades cotidianas con
                el ambiente
              </p>
            </div>
            <Link
              to='/form'
              className={clsx(
                'text-white py-2 px-8 rounded-xl text-2xl font-semibold tracking-wide bg-GreenPalette cursor-pointer inline-flex items-center justify-center transition ',
                '',
                'hover:bg-[#2db946] hover:shadow-xl outline-none ring-GreenPalette ring-offset-2 focus-visible:ring-2 focus:scale-[0.95]',
                'disabled:bg-green-500/50 disabled:cursor-not-allowed disabled:shadow'
              )}
            >
              Empezar!
            </Link>
          </div>
        </div>
      </div>

      {/* What is the Ecological Footprint? */}
      <div
        className={clsx(
          'flex w-full h-screen bg-[#734035] items-center justify-center relative overflow-hidden'
        )}
      >
        <div
          className={clsx(
            'w-[100vh] h-screen rounded-full border-4 border-white absolute',
            'md:w-full md:h-[100vw]'
          )}
        />
        <div
          className={clsx(
            'flex flex-col w-full h-full items-center justify-around',
            'md:flex-row-reverse'
          )}
        >
          <div
            className={clsx(
              'w-4/5 h-[80vw] rounded-full overflow-hidden',
              'md:w-2/5 md:h-[40vw]'
            )}
          >
            <img
              src={h2}
              className={clsx(
                'w-full h-full object-cover object-center rounded-full'
              )}
            />
          </div>
          <div
            className={clsx(
              'flex flex-col text-white text-center w-3/4',
              'md:w-[30vw] md:text-left'
            )}
          >
            <h2 className={clsx('text-4xl font-bold pb-16')}>
              ¿Qué es la huella ecológica?
            </h2>
            <p className={clsx('text-3xl pb-7')}>
              Es la medida de cómo nuestras actividades cotidianas afectan al
              medio ambiente
            </p>
          </div>
        </div>
      </div>

      {/* What is the meaning of Yarapë? */}
      <div
        className={clsx(
          'flex w-full h-screen bg-[#FEE45A] items-center justify-center relative overflow-hidden'
        )}
      >
        <div
          className={clsx(
            'w-[100vh] h-screen rounded-full border-4 border-black absolute',
            'md:w-full md:h-[100vw]'
          )}
        />
        <div
          className={clsx(
            'flex flex-col w-full h-full items-center justify-around',
            'md:flex-row'
          )}
        >
          <div
            className={clsx(
              'w-4/5 h-[80vw] rounded-full overflow-hidden',
              'md:w-2/5 md:h-[40vw]'
            )}
          >
            <img
              src={h3}
              className={clsx(
                'w-full h-full object-cover object-center rounded-full'
              )}
            />
          </div>
          <div
            className={clsx(
              'flex flex-col text-black text-center w-3/4',
              'md:w-[30vw] md:text-left'
            )}
          >
            <h2 className={clsx('text-4xl font-bold pb-16')}>
              ¿Qué significa Yarapë?
            </h2>
            <p className={clsx('text-3xl font-semibold pb-7')}>
              En dialecto pemón Yarapë tiene como significado Madre Tierra
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

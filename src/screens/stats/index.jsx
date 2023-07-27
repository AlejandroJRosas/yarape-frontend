import { useState, useEffect } from 'react'
import clsx from 'clsx'
import logo from '../../../assets/logo.png'
import DoughnutChart from '../../charts/doughnut'
import getSurveyedQuantity from '../../services/stats/getSurveyedQuantity'
import getUcabVsNonUcab from '../../services/stats/getAvgUcabVsNonUcab'
import getAvgCampusVs from '../../services/stats/getAvgCampusVs'
import getAvgStdVsWrk from '../../services/stats/getAvgStdVsWrk'
import getMostPickedOptions from '../../services/stats/getMostPickedOptions'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button'

export const Stats = () => {
  const [surveyedQuantity, setSurveyedQuantity] = useState()
  const [ucabVsNonUcab, setUcabVsNonUcab] = useState()
  const [avgCampusVs, setAvgCampusVs] = useState()
  const [avgStdVsWrk, setAvgStdVsWrk] = useState()

  // Most Picked Options

  const [q1, setQ1] = useState()
  const [q2, setQ2] = useState()
  const [q3, setQ3] = useState()
  const [q4, setQ4] = useState()
  const [q5, setQ5] = useState()
  const [q6, setQ6] = useState()
  const [q7, setQ7] = useState()
  const [q8, setQ8] = useState()
  const [q9, setQ9] = useState()
  const [q10, setQ10] = useState()
  const [q11, setQ11] = useState()
  const [q12, setQ12] = useState()
  const [q13, setQ13] = useState()
  const [q14, setQ14] = useState()
  const [q15, setQ15] = useState()
  const [q16, setQ16] = useState()
  const [q17, setQ17] = useState()
  const [q18, setQ18] = useState()
  const [q19, setQ19] = useState()
  const [q20, setQ20] = useState()
  const [q21, setQ21] = useState()

  const fetchStatsInfo = async () => {
    try {
      const surveyedQuantityResponse = await getSurveyedQuantity()
      setSurveyedQuantity(surveyedQuantityResponse)
      const ucabVsNonUcabResponse = await getUcabVsNonUcab()
      setUcabVsNonUcab(ucabVsNonUcabResponse)
      const avgCampusVsResponse = await getAvgCampusVs()
      setAvgCampusVs(avgCampusVsResponse)
      const avgStdVsWrkResponse = await getAvgStdVsWrk()
      setAvgStdVsWrk(avgStdVsWrkResponse)

      const q1Response = await getMostPickedOptions(1, 1)
      setQ1(q1Response)
      const q2Response = await getMostPickedOptions(1, 2)
      setQ2(q2Response)
      const q3Response = await getMostPickedOptions(1, 3)
      setQ3(q3Response)
      const q4Response = await getMostPickedOptions(2, 1)
      setQ4(q4Response)
      const q5Response = await getMostPickedOptions(2, 2)
      setQ5(q5Response)
      const q6Response = await getMostPickedOptions(2, 3)
      setQ6(q6Response)
      const q7Response = await getMostPickedOptions(2, 4)
      setQ7(q7Response)
      const q8Response = await getMostPickedOptions(2, 5)
      setQ8(q8Response)
      const q9Response = await getMostPickedOptions(3, 1)
      setQ9(q9Response)
      const q10Response = await getMostPickedOptions(3, 2)
      setQ10(q10Response)
      const q11Response = await getMostPickedOptions(3, 3)
      setQ11(q11Response)
      const q12Response = await getMostPickedOptions(3, 4)
      setQ12(q12Response)
      const q13Response = await getMostPickedOptions(4, 1)
      setQ13(q13Response)
      const q14Response = await getMostPickedOptions(4, 2)
      setQ14(q14Response)
      const q15Response = await getMostPickedOptions(5, 1)
      setQ15(q15Response)
      const q16Response = await getMostPickedOptions(5, 2)
      setQ16(q16Response)
      const q17Response = await getMostPickedOptions(6, 1)
      setQ17(q17Response)
      const q18Response = await getMostPickedOptions(6, 2)
      setQ18(q18Response)
      const q19Response = await getMostPickedOptions(6, 3)
      setQ19(q19Response)
      const q20Response = await getMostPickedOptions(7, 1)
      setQ20(q20Response)
      const q21Response = await getMostPickedOptions(7, 2)
      setQ21(q21Response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStatsInfo()
  }, [])

  return (
    <>
      <Link
        to='/'
        tabIndex={-1}
        className='absolute md:right-[85%] bottom-[75%] md:bottom-[80%] rounded-full border-2 hover:border-GreenPalette hover:animate-pulse'
      >
        <Button
          size={'default'}
          isEnabled={true}
          buttonType={'button'}
          onHome={true}
          onClick={() => location.reload}
        >
          {'<'}
        </Button>
      </Link>
      <div className={clsx('flex flex-col items-center justify-center')}>
        <img src={logo} />
        <p
          className={clsx(
            'm-0 font-bold text-gray-600 text-5xl px-6 py-7 subpixel-antialiased'
          )}
        >
          Yarapë
        </p>
      </div>
      <div className='flex flex-col h-full bg-gray-300 items-center'>
        <label className='text-xl md:text-3xl font-medium text-center p-8'>
          Vista Estadística
        </label>
        {/* todos los recuadros */}
        <div className='flex flex-col items-center justify-center md:flex-wrap md:flex-row border-2 border-black w-11/12 p-4 mb-4'>
          <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
            <label className='text-lg'>
              Cantidad de Encuestados: {surveyedQuantity?.total}
            </label>
            <DoughnutChart data={surveyedQuantity} label={'Cantidad'} />
          </div>
          <div className='flex flex-wrap md:gap-8 flex-row justify-around text-center mt-8'>
            <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
              <label className='text-lg'>UCAB vs No UCAB</label>
              <DoughnutChart data={ucabVsNonUcab} label={'Promedio'} />
            </div>
            <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
              <label className='text-lg'>UCAB Guayana vs UCAB Caracas</label>
              <DoughnutChart data={avgCampusVs} label={'Promedio'} />
            </div>
            <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
              <label className='text-lg'>Estudiantes vs Trabajadores</label>
              <DoughnutChart data={avgStdVsWrk} label={'Promedio'} />
            </div>
          </div>

          {/* Preguntas */}
          <div className='flex flex-col text-center'>
            <label className='text-xl md:text-3xl font-medium text-center p-8'>
              Opciones más elegidas por pregunta
            </label>
            <div className='flex flex-wrap flex-row items-center justify-around'>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 1: {q1?.items[0].description}
                </label>
                <DoughnutChart data={q1} label={'Cantidad'} />
              </div>

              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 2: {q2?.items[0].description}
                </label>
                <DoughnutChart data={q2} label={'Cantidad'} />
              </div>

              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 3: {q3?.items[0].description}
                </label>
                <DoughnutChart data={q3} label={'Cantidad'} />
              </div>

              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 4: {q4?.items[0].description}
                </label>
                <DoughnutChart data={q4} label={'Cantidad'} />
              </div>

              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 5: {q5?.items[0].description}
                </label>
                <DoughnutChart data={q5} label={'Cantidad'} />
              </div>

              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 6: {q6?.items[0].description}
                </label>
                <DoughnutChart data={q6} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 7: {q7?.items[0].description}
                </label>
                <DoughnutChart data={q7} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 8: {q8?.items[0].description}
                </label>
                <DoughnutChart data={q8} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 9: {q9?.items[0].description}
                </label>
                <DoughnutChart data={q9} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 10: {q10?.items[0].description}
                </label>
                <DoughnutChart data={q10} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 11: {q11?.items[0].description}
                </label>
                <DoughnutChart data={q11} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 12: {q12?.items[0].description}
                </label>
                <DoughnutChart data={q12} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 13: {q13?.items[0].description}
                </label>
                <DoughnutChart data={q13} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 14: {q14?.items[0].description}
                </label>
                <DoughnutChart data={q14} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 15: {q15?.items[0].description}
                </label>
                <DoughnutChart data={q15} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 16: {q16?.items[0].description}
                </label>
                <DoughnutChart data={q16} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 17: {q17?.items[0].description}
                </label>
                <DoughnutChart data={q17} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 18: {q18?.items[0].description}
                </label>
                <DoughnutChart data={q18} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 19: {q19?.items[0].description}
                </label>
                <DoughnutChart data={q19} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 20: {q20?.items[0].description}
                </label>
                <DoughnutChart data={q20} label={'Cantidad'} />
              </div>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 w-11/12 my-2 md:my-0 p-8 md:w-80'>
                <label className='text-lg text-center'>
                  Pregunta 21: {q21?.items[0].description}
                </label>
                <DoughnutChart data={q21} label={'Cantidad'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

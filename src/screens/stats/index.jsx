import { useState, useEffect } from 'react'
import clsx from 'clsx'
import logo from '../../../assets/logo.png'
import DoughnutChart from '../../charts/doughnut'
import getSurveyedQuantity from '../../services/stats/getSurveyedQuantity'
import getUcabVsNonUcab from '../../services/stats/getAvgUcabVsNonUcab'
import getAvgCampusVs from '../../services/stats/getAvgCampusVs'
import getAvgStdVsWrk from '../../services/stats/getAvgStdVsWrk'
import getMostPickedOptions from '../../services/stats/getMostPickedOptions'

export const Stats = () => {
  const [surveyedQuantity, setSurveyedQuantity] = useState()
  const [ucabVsNonUcab, setUcabVsNonUcab] = useState()
  const [avgCampusVs, setAvgCampusVs] = useState()
  const [avgStdVsWrk, setAvgStdVsWrk] = useState()

  // Most Picked Options

  const [q1, setQ1] = useState()

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
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStatsInfo()
  }, [])

  return (
    <>
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
        <label className='text-xl md:text-3xl font-medium text-center py-4'>
          Vista Estadística
        </label>
        {/* todos los recuadros */}
        <div className='flex flex-col items-center justify-center md:flex-wrap md:flex-row border-2 border-black w-11/12 p-4 mb-4'>
          <div className='flex flex-col items-center justify-center border-2 border-black w-full my-2 md:my-0 py-4 md:w-80'>
            <label className='text-lg'>
              Cantidad de Encuestados: {surveyedQuantity?.total}
            </label>
            <DoughnutChart data={surveyedQuantity} label={'Cantidad'} />
          </div>
          <div className='flex flex-col items-center justify-center border-2 border-black w-full my-2 md:my-0 py-4 md:w-80'>
            <label className='text-lg'>UCAB vs No UCAB</label>
            <DoughnutChart data={ucabVsNonUcab} label={'Promedio'} />
          </div>
          <div className='flex flex-col items-center justify-center border-2 border-black w-full my-2 md:my-0 py-4 md:w-80'>
            <label className='text-lg'>UCAB Guayana vs UCAB Caracas</label>
            <DoughnutChart data={avgCampusVs} label={'Promedio'} />
          </div>
          <div className='flex flex-col items-center justify-center border-2 border-black w-full my-2 md:my-0 py-4 md:w-80'>
            <label className='text-lg'>Estudiantes vs Trabajadores</label>
            <DoughnutChart data={avgStdVsWrk} label={'Promedio'} />
          </div>
          <div className='flex flex-col items-center justify-center border-2 border-black w-full my-2 md:my-0 py-4 md:w-80'>
            <label className='text-lg text-center'>
              Pregunta 1: ¿En qué tipo de casa vives?
            </label>
            <DoughnutChart data={q1} label={'Promedio'} />
          </div>
        </div>
      </div>
    </>
  )
}

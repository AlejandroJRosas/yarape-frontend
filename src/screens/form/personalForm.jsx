import { useState, useContext } from 'react'
import clsx from 'clsx'
import { Button } from '../../components/button'
import leafBackImg from '../../../assets/categories/leafBack.avif'
import { formContext } from '../../context/formContext'

export const PersonalForm = ({ onNext }) => {
  const { name, setName, isUcabMember, setIsUcabMember } =
    useContext(formContext)

  const [isUcabMemberB1, setIsUcabMemberB1] = useState(false)
  const [isUcabMemberB2, setIsUcabMemberB2] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleIsUcabMemberChange = (event) => {
    setIsUcabMember(event)
    setIsUcabMemberB1(false)
    setIsUcabMemberB2(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setName(name)
    onNext()
  }

  const useIsEnabledButton = () => {
    if (name !== '' && isUcabMember !== null) return true
  }
  const isEnabledButton = useIsEnabledButton()

  return (
    <div
      className={clsx(
        'flex flex-col h-screen w-screen items-center justify-center'
      )}
    >
      <div
        className='bg-cover w-full h-full flex flex-col items-center justify-center'
        style={{ backgroundImage: `url(${leafBackImg})` }}
      >
        <form
          onSubmit={handleSubmit}
          className={clsx(
            'flex flex-col bg-gray-100 rounded-xl text-black w-3/4 md:w-1/3 items-center text-lg font-medium px-4 py-10'
          )}
        >
          <label className='text-xl' htmlFor='name'>
            Hola! ¿Cuál es tu nombre?
          </label>
          <input
            type='text'
            name='name'
            placeholder='Ingresa tu nombre'
            onChange={handleNameChange}
            className='px-2'
          />
          <section className='flex flex-col items-center py-4 text-xl'>
            ¿Formas parte de la UCAB?
            <div className='flex flex-row pt-4'>
              <Button
                buttonState={isUcabMemberB1}
                setButton={setIsUcabMemberB1}
                onClick={() => handleIsUcabMemberChange(true)}
                isEnabled={true}
                size={'small'}
                buttonType={'button'}
                className={'mx-1'}
              >
                Si
              </Button>
              <Button
                buttonState={isUcabMemberB2}
                setButton={setIsUcabMemberB2}
                onClick={() => handleIsUcabMemberChange(false)}
                isEnabled={true}
                size={'small'}
                buttonType={'button'}
                className={'mx-1'}
              >
                No
              </Button>
            </div>
          </section>
          <Button
            buttonState={null}
            isEnabled={isEnabledButton}
            size={'large'}
            buttonType={'submit'}
            onHome={true}
            className='mt-10'
          >
            Siguiente
          </Button>
        </form>
      </div>
    </div>
  )
}

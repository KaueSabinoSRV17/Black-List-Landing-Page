import { useEffect, useState } from 'react'
import { Member, getAllDocsFromCollection } from './backend/database'


export default function App() {
  
  const [members, setMembers] = useState<Member[]>()

  async function getMembers() {
    const members = await getAllDocsFromCollection('members')
    setMembers(members)
  }

  useEffect(() => {
    getMembers()
  })
  

  return (
    <form className='flex flex-col w-fit mx-auto'>
      <legend>Tem interesse em nos contratar?</legend>

      <label className='flex flex-col w-fit'>
        Seu nome...
        <input type="text" className='border-black border' />
      </label>

      <label className='flex flex-col w-fit'>
        Seu e-mail...
        <input type="text" className='border-black border'/>
      </label>

      <label className='flex flex-col w-fit'>
        Seu telefone...
        <input type="text" className='border-black border' />
      </label>

      <button className='bg-green-300'>
        Enviar
      </button>

    </form>
  )
}
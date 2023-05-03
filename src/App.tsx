import { FormEvent, useEffect, useState } from 'react'
import { Member, getAllDocsFromCollection } from './backend/database'
import { Contact } from './backend/types'
import { sendEmail } from './backend/functions'


export default function App() {
  
  const [members, setMembers] = useState<Member[]>()
  const [contact, setContact] = useState<Contact>({name: '', email: '', phone: '', observation: ''})

  async function getMembers() {
    const members = await getAllDocsFromCollection('members')
    setMembers(members)
  }

  useEffect(() => {
    getMembers()
  })
  
  function handleInput(event: FormEvent) {
    const input = event.target as HTMLInputElement
    const key = input.name
    const value = input.value

    setContact({...contact, [key]: value})
  }

  async function handleForm(event: FormEvent) {
    event.preventDefault()
    await sendEmail(contact)
  }

  return (
    <form className='flex flex-col w-fit mx-auto' onSubmit={handleForm}>
      <legend>Tem interesse em nos contratar?</legend>

      <label className='flex flex-col w-fit'>
        Seu nome...
        <input type="text" className='border-black border' name='name' onInput={handleInput} />
      </label>

      <label className='flex flex-col w-fit'>
        Seu e-mail...
        <input type="text" className='border-black border' name='email' onInput={handleInput} />
      </label>

      <label className='flex flex-col w-fit'>
        Seu telefone...
        <input type="text" className='border-black border' name='phone' onInput={handleInput} />
      </label>

      <label className="flex flex-col w-fit">
        <input type="text" className="border-black border" name='observation' onInput={handleInput} />
      </label>

      <button className='bg-green-300'>
        Enviar
      </button>

    </form>
  )
}
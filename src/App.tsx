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
    <main>
      <header className='text-white'>
        <h1>BLACKLIST</h1>
      </header>
    </main>
  )
}
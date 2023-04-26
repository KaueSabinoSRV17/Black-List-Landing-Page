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
  

  return members?.map(member => {
    return (
      <ul key={member.email}>
        <li>{member.name}</li>
        <li>{member.email}</li>
        <li>{member.cellphone}</li>
        <li>{member.instrument}</li>
        <li>{member.bio}</li>
      </ul>
    )
  })
}
import { useState } from 'react'
import { app } from './../firebaseconfig'
import { getFirestore, collection, getDocs } from 'firebase/firestore'


export default function App() {

  const [members, setMembers] = useState<any[]>()

  const db = getFirestore(app)
  const documentsReference = collection(db, 'members')
  const documents = getDocs(documentsReference)
  documents.then(docs => docs.forEach(doc => console.log(doc.data())))
  

  return (
    <h1>Firebase is on!</h1>
  )
}
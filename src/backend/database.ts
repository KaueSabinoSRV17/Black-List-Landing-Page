import { app } from './../../firebaseconfig'
import { getFirestore, collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore'

const DATABASE = getFirestore(app)

const converter = {
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as Member,
  toFirestore: (data: Member) => data
}

export async function getAllDocsFromCollection(collectionId: string): Promise<Member[]> {
  const documentsReference = collection(DATABASE, collectionId).withConverter(converter)
  const documentsSnapshot = await getDocs(documentsReference)
  const documents = documentsSnapshot.docs.map(doc => doc.data())

  return documents
}

export interface Member {
  name: string,
  instrument: string,
  email: string,
  cellphone: number,
  bio: string
}
import { app } from '../../firebaseconfig'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { Contact } from './types'

const FUNCTIONS = getFunctions(app)

export async function sendEmail(contact: Contact) {
  const functionCallable = httpsCallable(FUNCTIONS, 'sendEmailCallable')
  await functionCallable(contact)
}

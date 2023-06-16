import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

import firebaseConfig from 'config/firebase'

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export const setValue = async (collection: string, document: string, value: any) => {
  await set(ref(database, `${collection}/${document}`), value)
}

export default database

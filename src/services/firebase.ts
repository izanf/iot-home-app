import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

import firebaseConfig from 'config/firebase'

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

type ValueType = string | number | boolean

export const setValue = async (collection: string, document: string, value: ValueType) => {
  await set(ref(database, `${collection}/${document}`), value)
}

export default database

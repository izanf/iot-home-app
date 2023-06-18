import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

import firebaseConfig from 'config/firebase'

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export const setValue = async (path: string[], value: boolean) => {
  await set(ref(database, `rooms/${path.join('/')}/status`), value)
}

export default database

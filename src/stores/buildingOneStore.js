import { getDatabase, ref } from '@firebase/database'
import { reactive } from 'vue'

const db = getDatabase()

export const $b1 = reactive({
	
			name: db.ref(`/schools/${id}/name`),
			entryIds: db.ref(`/schools/${id}/entries`),
			entries: db.ref('/entries')
})

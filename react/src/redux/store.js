import { configureStore } from '@reduxjs/toolkit'

import higherEducationSlice from './education/higherEducationSlice '
import generalEducationSlice from './education/generalEducationSlice'
import historySlice from './about/history/historySlice'

const store = configureStore({
  reducer: {
    generalEducation: generalEducationSlice,
    higherEducation: higherEducationSlice,
    history: historySlice,
    


  }
})

export default store

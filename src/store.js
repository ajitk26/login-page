import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { OtpAuthApi } from './services/OtpAuthApi'

export const store = configureStore({
  reducer: {
    [OtpAuthApi.reducerPath]: OtpAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(OtpAuthApi.middleware),
})

setupListeners(store.dispatch)
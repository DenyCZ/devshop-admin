import { defu } from 'defu'
import type { UseFetchOptions } from '#app'

export function useFetchData<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const userAuth = useCookie('token')
  // const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: 'http://localhost:3333',

    // set user token if connected
    headers: userAuth.value
      ? { Authorization: `Bearer ${userAuth.value}` }
      : {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      // throw new myBusinessError()
    },
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}

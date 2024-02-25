export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')

  /* const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const { getUser } = useAuthStore(); */

  if (to.query && to.query.token)
    token.value = to.query.token as string

  // getUser();

  /* if (token.value) {
      authenticated.value = true;
    } */

  // if token exists and url is /auth/login redirect to homepage
  /*if (token.value && to?.name === 'login')
    return navigateTo('/')

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'login') {
    abortNavigation()
    return navigateTo('/login')
  }*/
})

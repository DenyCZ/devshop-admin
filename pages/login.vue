<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

definePageMeta({
  title: 'Login',
  description: 'Login to your account',
  layout: 'blank',
})

const formSchema = toTypedSchema(z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(6).max(50),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  const { data, error } = await useFetchData<{ token: string }>('/api/v1/login', {
    method: 'POST',
    body: JSON.stringify(values),
  })

  const err = toValue(error)
  const dat = toValue(data)

  if (err !== null) {
    console.error(err)
    return
  }

  if (dat !== null) {
    const tokenCookie = useCookie('token')
    tokenCookie.value = dat.token
    await navigateTo('/')
  }
})
</script>

<template>
</template>

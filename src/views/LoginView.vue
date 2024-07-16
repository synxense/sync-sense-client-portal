<script setup lang="ts">
import router from '@/router'

const username = ref('user@example.com')
const password = ref('password')

function login() {
  router.push({ name: 'userLorem' })
}
</script>

<template lang="pug">
Card.mx-auto.max-w-sm
  CardHeader
    CardTitle.text-2xl
      | Login
    CardDescription
      | Enter your email below to login to your account
  CardContent
    .grid.gap-4
      .grid.gap-2
        Label(for='email') Email
        Input#email(type='email' placeholder='Username' required='required' v-model="username" readonly)
      .grid.gap-2
        .flex.items-center
          Label(for='password') Password
          a.ml-auto.inline-block.text-sm.underline(href='#')
            | Forgot your password?
        Input#password(type='password' required='required' v-model="password" readonly)
      Button.w-full(type='submit' @click="login")
        | Login
      Button.w-full(variant='outline')
        | Login with Google
    .mt-4.text-center.text-sm
      | Don&apos;t have an account?
      a.underline(href='#')
        | Sign up

</template>

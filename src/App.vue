<script setup lang="ts">
import {
  ChevronDown,
  Home,
  MessageCircleMore,
  Calendar,
  FileText,
  User,
  UserPlus,
  LogOut
} from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const frontendMenu = [
  {
    description: 'SyncSense',
    children: ['Il nostro metodo', 'Chi siamo', 'Recensioni', 'FAQ', 'Blog', 'Contatti']
  },
  {
    description: 'Aree di intervento',
    children: ['Ansia', 'Depressione', 'Crescita personale', 'Relazioni', 'Tutte le aree']
  },
  {
    description: 'Psicologi',
    children: ['I nostri psicologi', 'Lavora con noi', 'Auditorium']
  },
  {
    description: 'Aziende',
    children: []
  }
]

const layout = ref<'Frontend' | 'Login' | 'User' | string>('Frontend')
const route = useRoute()

watch(
  () => route.meta?.layout,
  (val) => {
    layout.value = val?.toString() ?? ''
  },
  {
    immediate: true
  }
)
</script>

<template lang="pug">

div(class="flex min-h-screen w-full flex-col")


	template(v-if="layout === 'Login'")
		div(class="h-screen flex flex-col justify-center")
			RouterView


	template(v-else-if="layout === 'User'")
		div(class="h-screen flex flex-col")
			div
				div.flex
					img(src="./assets/logo.svg" style="height: 3rem;")
					h1(class="text-3xl ms-3") Welcome to SyncSense
			div.flex.grow
				div(class="bg-secondary min-w-52")
					div.flex.flex-col.gap-3
						Button(variant="outline" class="justify-start")
							Home
							span.ms-2 Home
						Button(variant="outline" class="justify-start")
							MessageCircleMore
							span.ms-2 Chat
						Button(variant="outline" class="justify-start")
							Calendar
							span.ms-2 Il tuo percorso
						Button(variant="outline" class="justify-start")
							FileText
							span.ms-2 Le tue fatture
						Button(variant="outline" class="justify-start")
							User
							span.ms-2 Profilo
						Button(variant="outline" class="justify-start")
							UserPlus
							span.ms-2 Invita un amico/a
						RouterLink(to="/" class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start")
							LogOut
							span.ms-2 Esci
				div(class="grow p-4")
					RouterView


	template(v-else="layout === 'Frontend'")
		header(class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6")
			nav(class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-full")

				div(class="flex items-center gap-5")
					RouterLink(to="/")
						img(src="./assets/logo.svg" style="height: 3rem;")


					template(v-for="item in frontendMenu")
						template(v-if="item.children.length > 0")
							DropdownMenu
								DropdownMenuTrigger
									div.flex
										span {{ item.description }}
										ChevronDown.ms-3
								DropdownMenuContent
									DropdownMenuItem(v-for="child in item.children")
										RouterLink.grow(:to="{ name: 'lorem', params: { title: child } }") {{ child }}

						template(v-else)
							RouterLink(:to="{ name: 'lorem', params: { title: item.description } }") {{ item.description }}


				div(class="flex items-center gap-5 justify-end grow")
					RouterLink(class="rounded-full bg-primary text-primary-foreground py-3 px-4" to="/login") Accedi

		div.p-4
			RouterView

</template>

<style lang="scss"></style>

<template>
    <div class="shadow-md">
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img class="w-10 h-10 rounded-full" src="@/assets/avatar.png" alt="logo"/>
                <span class="ml-3 text-xl">{{ labels.website }}</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <router-link
                        class="mr-5 hover:text-gray-900 cursor-pointer"
                        v-for="(item, index) in computedHeader"
                        :key="index"
                        :to="item.link"
                    >
                        {{ item.label }}
                    </router-link>
                </nav>
            </div>
        </header>
    </div>
</template>
  
<script>
export default {
    name: 'HeaderVue',
    data() {
        return {
            labels: {
                website: 'Website',
                home: 'Home',
                news: 'News',
                profile: 'Profile'
            }
        }
    },
    computed: {
        computedHeader() {
            return [
                {
                    label: this.labels.home,
                    link: {name: 'home'}
                },
                {
                    label: this.labels.news,
                    link: {name: 'news'}
                },
                {
                    label: this.labels.profile,
                    link: {name: 'profile'}
                }
            ];
        }
    }
}
</script>

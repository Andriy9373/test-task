<template>
    <section
        class="text-gray-600 body-font"
    >
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
            <div
                v-for="(item, index) in news"
                :key="index"
                class="p-4 md:w-1/3"
            >
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="item.urlToImage" alt="blog">
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ item.author }}</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ item.title }}</h1>
                    <p class="leading-relaxed mb-3">{{ item.description }}</p>
                    <p class="leading-relaxed mb-3">{{ item.content }}</p>
                    <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" :href="item.url" target="_blank">
                        <span>{{ labels.learn_more }}</span>
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{{ new Date(item.publishedAt).toLocaleString() }}</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'NewsPage',
    data() {
        return {
            labels: {
                learn_more: 'Learn More'
            }
        }
    },
    computed: {
        ...mapState(['news'])
    },
    methods: {
        ...mapActions(['getNews'])
    },
    mounted() {
        this.getNews();
    }
}
</script>

<template>
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">{{ labels[404] }}</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{{ labels.something_missing }}</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{{ labels.we_cant_find_that_page }}</p>
            <router-link :to="{name: 'home'}" class="inline-flex font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">{{ labels.back_to_homepage }}</router-link>
        </div>   
    </div>
</section>
</template>
  
<script>
export default {
    name: '404',
    data() {
        return {
            labels: {
                404: '404',
                something_missing: 'Something\'s missing.',
                we_cant_find_that_page: 'Sorry, we can\'t find that page. You\'ll find lots to explore on the home page.',
                back_to_homepage: 'Back to Homepage'
            }
        }
    }
}
</script>


<!-- <template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        PIDASNFOSDGNOSDAG
        <div class="text-center">
            <h1 class="display-1 fw-bold">{{labels[404] }}</h1>
            <p class="fs-3"> <span class="text-danger">{{ labels.opps }}</span> {{ labels.page_not_found }}</p>
            <p class="lead">
                {{ labels.page_doesnt_exist }}
              </p>
            <router-link :to="{name: 'posts'}" class="btn btn-dark">{{ labels.posts }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: '404Vue',
    data() {
        return {
            labels: {
                '404': '404',
                opps: 'Opps!',
                page_not_found: 'Page not found.',
                page_doesnt_exist: 'The page you’re looking for doesn’t exist.',
                posts: 'Posts'
            }
        }
    }
}
</script> -->
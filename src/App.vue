<template>
    <div>
        <CustomAlert/>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CustomAlert from '@/components/CustomAlert';

export default {
    name: 'App',
    components: {
        Header,
        CustomAlert
    }
}
</script>
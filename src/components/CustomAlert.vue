<template>
    <div class="alert-content fixed top-6 right-6 w-70 select-none z-1000">
        <div
            class="flex bg-red-100 mb-4 border border-red-400 text-red-700 px-4 py-3 rounded"
            role="alert"
            v-for="(item, index) in alerts" :key="index"
        >
            <span class="block sm:inline">{{ item.message }}</span>
            <span>
                <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    @click="closeAlert(item)"
                >
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                </svg>
            </span>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'CustomAlert',
    computed: {
        ...mapState(['alerts'])
    },
    methods: {
        ...mapActions(['removeAlert']),
        closeAlert(value) {
            this.removeAlert(value);
        }
    }
}
</script>
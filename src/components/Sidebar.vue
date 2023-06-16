<script>
    import Button from '@/common/Button.vue';
    import { RouterLink } from 'vue-router';

    export default {
        name: 'Sidebar',
        components: { Button, RouterLink },
        data() {
            return {
                imageURL: 'https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU='
            }
        }
    }
</script>

<template>
    <aside class="sidebar">
        <div class="sidebar-elements">
                <RouterLink to="/tasks" class="sidebar-elements-logo">
                    <v-icon name="io-logo-web-component" scale="1.5"/>
                </RouterLink>
        </div>
        <div class="sidebar-footer">
           <img :src="imageURL" alt="" class="sidebar-footer-image">
       </div>
    </aside>
</template>

<style scoped>
   @import '@/styles/components/sidebar.css';
</style>
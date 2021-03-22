<template>
    <CategoryComponent>
        <template v-slot:category-sidebar-blurb>
            Agriculture blurb goes here.
        </template>
        <template v-slot:page-content>
            Content here.
        </template>
    </CategoryComponent>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    import CategoryComponent from '@/components/category-component'

    export default {
        name: 'Agriculture',
        components: {CategoryComponent},
        props: [],
        data() {
            return {
                sidebarActive: false
            }
        },
        mounted() {
            console.log("Agriculture mounted.");
        },
    }

</script>


<template>
    <div class="h-100 blue-background-color">
        <b-row class="h-100">
            <b-col cols="3" class="mt-4">
                <div class="pl-4">
                    <div class="text-white"><h2>Harmful Algal Blooms</h2></div>
                    <div class="text-white">
                        <slot name="category-sidebar-blurb"></slot>
                    </div>
                </div>
                <div id="sidebar" class="mt-2">
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="w-75 pt-3 pb-3 text-left user-button"><h3>RESIDENTS</h3></b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="w-75 pt-3 pb-3 text-left user-button"><h3>POND OWNERS</h3></b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="w-75 pt-3 pb-3 text-left user-button"><h3>WATER UTILITIES</h3></b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="w-75 pt-3 pb-3 text-left user-button"><h3>AGRICULTURE</h3></b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col cols="9" class="blue-background-color h-100">
                <b-row class="h-75">
                    <b-col>
                        <slot name="page-content"></slot>
                    </b-col>
                </b-row>
                <b-row class="h-25">
                    <b-col>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'CategoryComponent',
        components: {
        },
        data () {
            return {
            }
        },
        mounted() {
            console.debug("category-component mounted called.")
        },
        methods: {
        }

    }

</script>

<style scoped>
    .user-button {
        background-color: #1483b7;
        color: #ffff;
    }

</style>

<style>

</style>

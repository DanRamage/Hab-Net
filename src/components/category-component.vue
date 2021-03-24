
<template>
    <div class="blue-background-color h-100">
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
                            <b-button class="w-75 pt-3 pb-3 text-left user-button" href="/Residents"><h3>RESIDENTS</h3></b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="w-75 pt-3 pb-3 text-left user-button" href="/PondOwners"><h3>POND OWNERS</h3></b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="w-75 pt-3 pb-3 text-left user-button" href="/WaterUtilities"><h3>WATER UTILITIES</h3></b-button>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col>
                            <b-button class="w-75 pt-3 pb-3 text-left user-button" href="/Agriculture"><h3>AGRICULTURE</h3></b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col cols="9"
                   class="blue-background-color"
                   :style="{'background-size': 'contain','background-image': `url(${require('@/assets/images/background-habs.jpg')})`}">
                <b-row class="h-75">
                    <b-col class="h-100">
                        <slot name="page-content"></slot>
                    </b-col>
                </b-row>
                <b-row class="h-25">
                    <b-col>
                        <HABSFooter footer_class_prop="h-100 blue-background-color align-items-baseline"></HABSFooter>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import HABSFooter from '@/components/habs-footer'

    //let background_image = require('@/assets/images/background-habs.jpg');
    export default {
        name: 'CategoryComponent',
        props: ['category_column_background_prop'],
        components: {
            HABSFooter
        },
        data () {
            return {
                backgroundimage: {backgroundImage: "url('assets/images/HABsImage1.png')"}
            };
        },
        computed: {
            category_column_background() {
                return this.category_column_background_prop;
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
    .text-responsive {
        font-size: calc(100% + 1vw + 1vh);
    }
    /*
    Extra small devices (portrait phones, less than 544px)
    No media query since this is the default in Bootstrap because it is "mobile first"
    */
    h3 {font-size:0.5rem;} /*1rem = 16px*/
    /*
    ####################################################
    M E D I A  Q U E R I E S
    ####################################################
    */

    /*
    ::::::::::::::::::::::::::::::::::::::::::::::::::::
    Bootstrap 4 breakpoints
    */
    /* Small devices (landscape phones, 544px and up) */
    @media (min-width: 544px) {
        h3 {font-size:0.75rem;} /*1rem = 16px*/
    }

    /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
    @media (min-width: 768px) {
        h3 {font-size:1rem;} /*1rem = 16px*/
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        h3 {font-size:1.5rem;} /*1rem = 16px*/
    }

    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
        h3 {font-size:1.75rem;} /*1rem = 16px*/
    }



</style>

<style>
</style>

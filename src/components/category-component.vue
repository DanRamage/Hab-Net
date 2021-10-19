
<template>
    <div class="blue-background-color h-100">
        <b-row class="h-100">
            <b-col id="sidebar" md="3" cols="4" class="mt-4">
                <div class="pl-4">
                    <div class="text-white"><h3>Harmful Algal Blooms</h3></div>
                    <div class="text-white">
                        <slot name="category-sidebar-blurb"></slot>
                    </div>
                </div>
                <b-navbar id="categorySidebar" toggleable="lg" type="dark" variant="info">

                    <b-navbar-toggle ref="navbarToggleButton" target="nav-collapse"></b-navbar-toggle>

                    <b-collapse ref="sideNavCollapse" id="nav-collapse"  is-nav>

                        <b-nav v-if="!sidebarCollapsed" ref="categorySidebarNav" vertical pills>
                            <b-nav-item>
                                <b-button class="w-100 pt-3 pb-3 text-left user-button" href="/Residents"><h3>RESIDENTS</h3></b-button>
                            </b-nav-item>
                            <b-nav-item>
                                <b-button class="w-100 pt-3 pb-3 text-left user-button" href="/PondOwners"><h3>POND OWNERS</h3></b-button>
                            </b-nav-item>
                            <b-nav-item>
                                <b-button class="w-100 pt-3 pb-3 text-left user-button" href="/WaterUtilities"><h3>WATER UTILITIES</h3></b-button>
                            </b-nav-item>
                            <b-nav-item>
                                <b-button class="w-100 pt-3 pb-3 text-left user-button" href="/Agriculture"><h3>AGRICULTURE</h3></b-button>
                            </b-nav-item>
                        </b-nav>
                        <b-nav v-else vertical>
                            <b-nav-item class="ml-2">
                                <h3>RESIDENTS</h3>
                            </b-nav-item>
                            <b-nav-item class="ml-2">
                                <h3>POND OWNERS</h3>
                            </b-nav-item>
                            <b-nav-item class="ml-2">
                                <h3>WATER UTILITIES</h3>
                            </b-nav-item>
                            <b-nav-item class="ml-2">
                                <h3>AGRICULTURE</h3>
                            </b-nav-item>

                        </b-nav>
                    </b-collapse>
                </b-navbar>
                <!--
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
                -->
            </b-col>
            <b-col md="9" cols="8"
                   class="blue-background-color"
                   :style="{'background-size': 'contain','background-image': `url(${require('@/assets/images/background-habs.jpg')})`}">
                <b-row :class="getContentClass">
                    <b-col class="h-100">
                        <slot name="page-content"></slot>
                    </b-col>
                </b-row>
                <b-row v-if="!sidebarCollapsed" class="h-15">
                    <b-col>
                        <HABSFooter footer_class_prop="h-100 footer-color align-items-baseline"></HABSFooter>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <!--This component sends us an event when a change in media size is detected -->
        <MQDetector @mqChanged="onMQCategoryChange"></MQDetector>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import HABSFooter from '@/components/habs-footer'
    import MQDetector from '@/components/mq_detector'

    import {MD} from '@/constants'

    //let background_image = require('@/assets/images/background-habs.jpg');
    export default {
        name: 'CategoryComponent',
        props: ['category_column_background_prop'],
        components: {
            HABSFooter, MQDetector
        },
        data () {
            return {
                backgroundimage: {backgroundImage: "url('assets/images/HABsImage1.png')"},
                sidebarCollapsed: false
            };
        },
        computed: {
            category_column_background() {
                return this.category_column_background_prop;
            },
            getContentClass() {
                if(!this.sidebarCollapsed) {
                    return("h-85");
                }
                else {
                    return("h-100");
                }
            }
        },
        mounted() {
            console.debug("category-component mounted called.")
            this.$nextTick(()=> {
                if(this.checkRefVisibility('categorySidebarNav') === false)
                {
                    this.sidebarCollapsed = true;
                }
            });


        },
        methods: {
            checkRefVisibility(ref_name) {
                if(ref_name in this.$refs)
                {
                    let rect = this.$refs[ref_name].getBoundingClientRect();
                    if(rect !== undefined)
                    {
                        if(rect.height === 0 && rect.width === 0)
                            return(false);
                        else
                            return(true);
                    }
                }
                return(false);
            },

            onMQCategoryChange(mqType, mqTypeVal) {
                if(mqTypeVal <= MD)
                {
                    this.sidebarCollapsed = true;
                }
                else
                {
                    this.sidebarCollapsed = false;
                }
                console.debug("onMQCategoryChange event: " + mqType + "val: " + mqTypeVal + " sidebar state: " + this.sidebarCollapsed);
            }
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
    .h-15 {
        height: 15% !important;
    }
    .h-85 {
        height: 85% !important;
    }

    /*
    Extra small devices (portrait phones, less than 544px)
    No media query since this is the default in Bootstrap because it is "mobile first"
    */
    h3 {font-size:0.90rem;} /*1rem = 16px*/
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
        h3 {font-size:0.90rem;} /*1rem = 16px*/
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
    #categorySidebar .nav-link {
        padding-top: 0.5rem !important;
        padding-right: 1rem !important;
        padding-bottom: 0.5rem !important;
        padding-left: 0rem !important;
        color: white;
    }
    #sidebar {
        background-color: #074281 !important;

    }
    #sidebar .bg-info {
        background-color: #074281 !important;
        border-color: #074281;
    }
    .footer-color {
        background-color: #074281 !important;

    }

</style>

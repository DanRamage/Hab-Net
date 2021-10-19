<template>
    <div class="container-fluid h-100">
        <b-row id="habs-header" class="blue-background-color" :class="getHeaderRowClass">
            <b-col class="text-white text-center my-auto">
                <h1>HARMFUL ALGAL BLOOMS</h1>
                <h4><i>This site maintained by SCHABNET for the exploration and education of</i> <b>Harmful Algal Blooms(HABs).</b></h4>
            </b-col>
        </b-row>
        <b-row class="h-70">
            <!--
            <div class="col-sm-4 col-md-3 sidebar sidebar-background-color" >
            -->
            <b-col id="habssidebar" cols="4" class="overflow-auto sidebar sidebar-background-color">
                <b-navbar id="sideNavBar" toggleable="lg" type="dark" variant="info">

                    <b-navbar-toggle ref="navbarToggleButton" target="nav-collapse"></b-navbar-toggle>

                    <b-collapse ref="sideNavCollapse" id="nav-collapse"  is-nav>
                        <ul ref="mainSideMenu" class="nav nav-sidebar d-inline text-left">
                            <!--When we are on small format, we hide the menu buttons and put them
                            in sidebar here-->
                            <li v-if="sidebarCollapsed" class="mt-3 mb-3">
                                <a href="Residents">
                                    <h3>Residents</h3>
                                </a>
                            </li>
                            <li v-if="sidebarCollapsed" class="mt-3 mb-3">
                                <a href="PondOwners">
                                    <h3>Pond Owners</h3>
                                </a>
                            </li>
                            <li v-if="sidebarCollapsed" class="mt-3 mb-3">
                                <a href="WaterUtilities">
                                    <h3>Water Utilities</h3>
                                </a>
                            </li>
                            <li v-if="sidebarCollapsed" class="mt-3 mb-3">
                                <a href="Agriculture">
                                    <h3>Agriculture</h3>
                                </a>
                            </li>
                            <li class="mt-3 mb-3">
                                <a href="">
                                    <h3>HABs Monitoring in
                                        South Carolina</h3>
                                </a>
                            </li>
                            <li class="mt-3 mb-3">
                                <a href="">
                                    <h3>Report an Algal
                                        Bloom</h3>
                                </a>
                            </li>
                            <li class="mt-3 mb-3">
                                <a href="">
                                    <h3>Additional Resources</h3>
                                </a>
                            </li>
                            <li class="mt-3 mb-3">
                                <a href="">
                                    <h3>About SCHABNET</h3>
                                </a>
                            </li>
                        </ul>
                    </b-collapse>
                </b-navbar>
            </b-col>
            <b-col id="content" cols="8"
                   class="text-black"
                   :style="{'background-size': 'contain', 'background-image': `url(${require('@/assets/images/background-habs.jpg')})`}">
                <b-row id="" class="h-75 content-section">
                    <b-col>
                        <h1>Content here</h1>
                    </b-col>
                </b-row>
                <b-row v-if="!sidebarCollapsed" id="" class="h-25 button-section">
                    <b-col cols="3" class="">
                        <b-button class="user-button h-100 w-100" v-b-hover="resident_button_hover" href="/Residents">
                            <h3 v-if="!resident_button_hover_state">RESIDENTS</h3>
                            <h3 v-else>residents hover text</h3>
                        </b-button>
                    </b-col>
                    <b-col cols="3">
                        <b-button class="user-button h-100 w-100" v-b-hover="pondowners_button_hover" href="/PondOwners">
                            <h3 v-if="!pondowners_button_hover_state">POND OWNERS</h3>
                            <h3 v-else>pond owners hover text</h3>
                        </b-button>
                    </b-col>
                    <b-col cols="3">
                        <b-button class="user-button h-100 w-100" v-b-hover="waterutils_button_hover" href="/WaterUtilities">
                            <h3 v-if="!waterutils_button_hover_state">WATER UTILITIES</h3>
                            <h3 v-else>water utilities hover text</h3>
                        </b-button>
                    </b-col>
                    <b-col cols="3">
                        <b-button class="user-button h-100 w-100" v-b-hover="agriculture_button_hover" href="/Agriculture">
                            <h3 v-if="!agriculture_button_hover_state">AGRICULTURE</h3>
                            <h3 v-else>agriculture hover text</h3>
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <!--
        <b-row v-if="!sidebarCollapsed" class="h-15">
        -->
        <b-row class="h-15">
            <b-col sm="3" class="blue-background-color"></b-col>

            <b-col>
                <HABSFooter footer_class_prop="h-100 blue-background-color align-items-baseline"></HABSFooter>
            </b-col>
        </b-row>

        <!--This component sends us an event when a change in media size is detected -->
        <MQDetector @mqChanged="onMQChange"></MQDetector>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import HABSFooter from '@/components/habs-footer'
    import MQDetector from '@/components/mq_detector'

    //import {XS} from '@/constants'
    //import {SM} from '@/constants'
    import {MD} from '@/constants'
    //import {LG} from '@/constants'
    //import {XLG} from '@/constants'

    export default {
        name: 'HomePage',
        components: {
            HABSFooter, MQDetector
        },
        data () {
            return {
                resident_button_hover_state: false,
                pondowners_button_hover_state: false,
                waterutils_button_hover_state: false,
                agriculture_button_hover_state: false,
                sidebarCollapsed: false
            }
        },
        mounted() {
            console.debug("HomePage mounted called.");
            this.$nextTick(()=> {
                /*
                let rect = this.$refs["mainSideMenu"].getBoundingClientRect();
                if(rect !== undefined)
                {
                    if(rect.height === 0 && rect.width === 0) {
                        console.debug("Sidebar shown.");
                        self.sidebarCollapsed = false;
                    }
                    else {
                        console.debug("Sidebar collapsed.");
                        self.sidebarCollapsed = true;
                    }
                }*/
                if(self.checkRefVisibility("mainSideMenu") === false)
                {
                    console.debug("Sidebar collapsed.");
                    self.sidebarCollapsed = true;
                }
                else {
                    console.debug("Sidebar shown.");
                }
            });
            this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                if(collapseId == 'nav-collapse')
                {
                    this.$root.sidebarCollapsed = !this.$root.sidebarCollapsed;
                }
                console.log('collapseId:', collapseId);
                console.log('isJustShown:', isJustShown);
            });
            /*
            this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                console.log('collapseId:', collapseId)
                console.log('isJustShown:', isJustShown)
            })
            */


        },
        methods: {
            onMQChange(mqType, mqTypeVal) {
              console.debug("onMWQChange event: " + mqType + "val: " + mqTypeVal);
              if(mqTypeVal <= MD)
              {
                  this.sidebarCollapsed = true;
              }
              else
              {
                  this.sidebarCollapsed = false;
              }
            },
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
            resident_button_hover(is_hovered) {
                if(is_hovered) {
                    console.debug("resident_button_hover hovered")
                }
                else{
                    console.debug("resident_button_hover not hovered")
                }
                this.resident_button_hover_state = is_hovered;
            },
            pondowners_button_hover(is_hovered) {
                if(is_hovered) {
                    console.debug("pondowners_button_hover hovered")
                }
                else{
                    console.debug("pondowners_button_hover not hovered")
                }
                this.pondowners_button_hover_state = is_hovered;
            },
            waterutils_button_hover(is_hovered) {
                if(is_hovered) {
                    console.debug("waterutils_button_hover hovered")
                }
                else{
                    console.debug("waterutils_button_hover not hovered")
                }
                this.waterutils_button_hover_state = is_hovered;
            },
            agriculture_button_hover(is_hovered) {
                if(is_hovered) {
                    console.debug("agriculture_button_hover hovered")
                }
                else{
                    console.debug("agriculture_button_hover not hovered")
                }
                this.agriculture_button_hover_state = is_hovered;
            },
        },
        computed: {
            getHeaderRowClass() {
                if(!this.sidebarCollapsed)
                {
                    return("h-15");
                    //return("h-15");
                }
                else {
                    return("h-15");
                }
            },
        }

    }
</script>

<style scoped>

    #habs-header {
        /*height: 150px;*/
    }
    #habssidebar {
        /*
        height: 400px;
        width: 400px;
        */
    }
    #habssidebar li {
    }
    #habssidebar ul.nav li a, ul.nav li a:visited {
        font-size: 1.5rem;
        color: #ffff !important;
    }

    #habssidebar ul.nav li a:hover, ul.nav li a:active {
        color: #ffff !important;
    }

    #habssidebar ul.nav li.active a {
        color: #ffff !important;
    }
    ul.dropdown-menu {
        background-color: yellow;
    }
    .dropdown .btn-primary {
        background-color: #1483b7;
        border-color: #1483b7;

    }
    .user-button {
        background-color: #074281;
        opacity: 0.80;
        color: #ffff;
    }
    .user-button-col {
        bottom:0;
    }
    .h-15 {
        height: 15% !important;
    }
    .h-30 {
        height: 30% !important;
    }
    .h-70 {
        height: 70% !important;
    }
    .h-85 {
        height: 85% !important;
    }
    .content-section {
        height: 80% !important;
    }
    .button-section {
        height: 20% !important;
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
    body, html {
        height: 100%;
        background-color: rgba(0, 61, 126, .1) !important;
    }
    #habssidebar .btn-primary {
        background-color: #1483b7;
        border-color: #1483b7;
        font-size: 1.5rem;
    }

    #habssidebar .bg-info {
        background-color: #1483b7 !important;
        border-color: #1483b7;
    }

</style>

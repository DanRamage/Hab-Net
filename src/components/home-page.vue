<template>
    <div class="container-fluid h-100">
        <div id="habs-header" class="">
            <b-row class="blue-background-color">
                <b-col class="text-white text-center my-auto">
                    <h1>HARMFUL ALGAL BLOOMS</h1>
                    <h4><i>This site maintained by SCHABNET for the exploration and education of</i> <b>Harmful Algal Blooms(HABs).</b></h4>
                </b-col>
            </b-row>
        </div>
        <b-row class="h-75">
            <!--
            <div class="col-sm-4 col-md-3 sidebar sidebar-background-color" >
            -->
            <b-col id="habssidebar" cols="4" class="sidebar sidebar-background-color">
                <!--
                    <b-dropdown dropright text="What are
                            Harmful Algal Blooms
                            (HABs)?" variant="primary" class="m-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown dropright text="HABs Monitoring in
                                South Carolina" variant="primary" class="m-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown dropright text="Report an Algal
                                Bloom" variant="primary" class="m-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown dropright text="Additional Resources" variant="primary" class="m-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown dropright text="About SCHABNET" variant="primary" class="m-2">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here</b-dropdown-item>
                    </b-dropdown>
                    -->
                <ul class="nav nav-sidebar d-inline text-left">
                    <li class="mt-3 mb-3"><a href="">
                    </a>
                    </li>
                    <li class="mt-3 mb-3">
                        <a href="">
                            HABs Monitoring in
                            South Carolina
                        </a>
                    </li>
                    <li class="mt-3 mb-3">
                        <a href="">
                            Report an Algal
                            Bloom
                        </a>
                    </li>
                    <li class="mt-3 mb-3">
                        <a href="">
                            Additional Resources
                        </a>
                    </li>
                    <li class="mt-3 mb-3">
                        <a href="">
                            About SCHABNET
                        </a>
                    </li>
                </ul>
            </b-col>
            <b-col id="content" cols="8" class="text-black sidebar-background-color">
                <b-row id="" class="h-75 content-section">
                    <b-col>
                        <h1>Content here</h1>
                    </b-col>
                </b-row>
                <b-row id="" class="h-25 button-section">
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
        <b-row>
            <b-col sm="3" class="blue-background-color"></b-col>
            <b-col>
                <HABSFooter></HABSFooter>
            </b-col>
        </b-row>
        <!--
        <b-row class="h-25 blue-background-color">
            <b-col></b-col>
            <b-col sm="2" class="">
                <img src="@/assets/images/usc_log_white.svg" alt="" width="150" height="150">
            </b-col>
            <b-col sm="2" class="">
                <img src="@/assets/images/umces-logo-blk_white.svg" alt="" width="150" height="150">
            </b-col>
            <b-col sm="2" class="">
                <img src="@/assets/images/secoora_logo_white.svg" alt="" width="150" height="80">
            </b-col>
        </b-row>
        -->
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import HABSFooter from '@/components/habs-footer'

    export default {
        name: 'HomePage',
        components: {
            HABSFooter
        },
        data () {
            return {
                resident_button_hover_state: false,
                pondowners_button_hover_state: false,
                waterutils_button_hover_state: false,
                agriculture_button_hover_state: false
            }
        },
        mounted() {
            console.debug("HomePage mounted called.")
        },
        methods: {
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
        background-color: #2d5b92;
        color: #ffff;
    }
    .user-button-col {
        bottom:0;
    }
    .content-section {
        height: 80% !important;
    }
    .button-section {
        height: 20% !important;
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
</style>

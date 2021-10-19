<template>
    <b-row :class="footer_class_prop">
        <b-col sm="2" cols="2">
            <a href="https://scdhec.gov/" title="SC DHEC" target="_blank">
                <img class="img-responsive d-block mx-auto" src="@/assets/images/SCDHEC_logo.png" alt="" width="100%" height="100%">
            </a>
        </b-col>
        <b-col sm="2" cols="2" class="">
            <img class="img-responsive d-block mx-auto" src="@/assets/images/OHHC2I_logo.png" alt="" width="100%" height="100%">
        </b-col>
        <b-col sm="2" cols="2" class="">
            <img class="img-responsive d-block mx-auto" src="@/assets/images/HABNet_logo.png" alt="" width="100%" height="100%">
        </b-col>
        <b-col sm="2" cols="2" class="">
            <a href="https://sc.edu" title="USC" target="_blank">
                <img class="img-responsive d-block mx-auto" src="@/assets/images/usc_logo.svg" alt="" width="100%" height="100%">
            </a>
        </b-col>
        <b-col sm="2" cols="2" class="">
            <a href="https://secoora.org" title="Secoora" target="_blank">
                <img class="img-responsive d-block mx-auto" src="@/assets/images/secoora_logo.svg" alt="" width="50%" height="50%">
            </a>
        </b-col>
        <b-col sm="2" cols="2" class="">
            <a href="https://www.umces.edu/" title="UMCES" target="_blank">
                <img class="img-responsive d-block mx-auto" src="@/assets/images/umces_logo.svg" alt="" width="100%" height="100%">
            </a>
        </b-col>
    </b-row>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'HABSFooter',
        props: ['footer_class_prop'],
        components: {
        },
        data () {
            return {
            }
        },
        mounted() {
            console.debug("HABSFooter mounted called.")
        },
        computed: {
            footer_class() {
                return this.footer_class_prop;
            }
        },
        methods: {
        }

    }

</script>

<style scoped>

</style>

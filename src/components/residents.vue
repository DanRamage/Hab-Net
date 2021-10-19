<template>
        <CategoryComponent>
        <template v-slot:category-sidebar-blurb>
            Residents blurb goes here.
        </template>
        <template v-slot:page-content>
            <div id="page_items" class="mt-5 page-items">
                <ItemDropdown item_class_prop="h-25"
                              item_header_class_prop="text-white item-color-one"
                              item_dropdown_prop="text-white category-item">
                    <template v-slot:item-header-text>
                        <h3>What Do HABs Look Like?</h3>
                    </template>
                    <template v-slot:item-content >
                        This is the blurb content
                    </template>
                </ItemDropdown>
                <ItemDropdown item_class_prop="h-25"
                              item_header_class_prop="item-header text-white item-color-two"
                              item_dropdown_prop="text-white category-item">
                    <template v-slot:item-header-text>
                        <h3>What are the Health Impacts of HABS on People and Pets?</h3>
                    </template>
                    <template v-slot:item-content >
                        This is the blurb content
                    </template>
                </ItemDropdown>
                <ItemDropdown item_class_prop="h-25"
                              header_text_justify="left"
                              item_header_class_prop="text-white"
                              item_dropdown_prop="text-white category-item">
                    <template v-slot:item-header-text >
                        <h3>How Can I Limit My Family's and Pet's Exposure to HABs?</h3>
                    </template>
                    <template v-slot:item-content>
                        This is the blurb content
                    </template>
                </ItemDropdown>
                <ItemDropdown item_class_prop="h-25"
                              header_text_justify="left"
                              item_header_class_prop="item-header text-white"
                              item_dropdown_prop="text-white category-item">
                    <template v-slot:item-header-text >
                        <h3>Who Should I Notify If I Suspect a Harmful Algal Bloom in the Water?</h3>
                    </template>
                    <template v-slot:item-content>
                        This is the blurb content
                    </template>
                </ItemDropdown>
            </div>
        </template>
    </CategoryComponent>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    import CategoryComponent from '@/components/category-component'
    import ItemDropdown from '@/components/info-dropdown'

    export default {
        name: 'Residents',
        components: {CategoryComponent, ItemDropdown},
        props: [],
        data() {
            return {
                sidebarActive: false
            }
        },
        mounted() {
            console.log("Residents mounted.");
        },
        methods: {

        }
    }

</script>

<style scoped>
    .page-items {
        align-items: center;
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
    .item-header {
        margin-left: 30%;
    }
    .item-color-one {
        background-color: rgba(13,32,43,0.70);}
    .item-color-two {
        background-color: rgba(30,55,65,0.50);
    }
</style>

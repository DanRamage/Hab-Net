<template>
    <CategoryComponent>
        <template v-slot:category-sidebar-blurb>
            Residents blurb goes here.
        </template>
        <template v-slot:page-content>
            <div id="page_items" class="mt-5 page-items">
                <ItemDropdown item_class_prop="h-25" item_header_class_prop="text-white item-color-one">
                    <template v-slot:item-header-text>
                        What Do HABs Look Like?
                    </template>
                    <template v-slot:item-content >
                        This is the blurb content
                    </template>
                </ItemDropdown>
                <ItemDropdown item_class_prop="h-25" item_header_class_prop="item-header text-white item-color-two">
                    <template v-slot:item-header-text>
                        What are the Health Impacts of HABS on People and Pets?
                    </template>
                    <template v-slot:item-content >
                        This is the blurb content
                    </template>
                </ItemDropdown>
                <ItemDropdown item_class_prop="h-25" header_text_justify="left" item_header_class_prop="text-white">
                    <template v-slot:item-header-text >
                        How Can I Limit My Family's and Pet's Exposure to HABs?
                    </template>
                    <template v-slot:item-content>
                        This is the blurb content
                    </template>
                </ItemDropdown>
                <ItemDropdown item_class_prop="h-25" header_text_justify="left" item_header_class_prop="item-header text-white">
                    <template v-slot:item-header-text >
                        Who Should I Notify If I Suspect a Harmful Algal Bloom in the Water?
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
    }

</script>

<style scoped>
    .page-items {
        align-items: center;
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

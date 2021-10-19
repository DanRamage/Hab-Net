<template>
    <div :style="background_color" class="mt-4 mb-4" :class="item_class_prop">
        <div
             v-on:click="item_clicked"
             :class="item_header_class_prop"
             :style="item_header_text_justify">
            <h2>
                <slot name="item-header-text">
                    This is the item header
                </slot>
            </h2>
        </div>
        <div v-show=dropdown_opened class="" :class="item_dropdown_prop">
            <slot name="item-content">
                Content for the Item goes here.
            </slot>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'ItemDropdown',
        props: ['background_color', 'header_text_justify', 'item_class_prop', 'item_header_class_prop', 'item_dropdown_prop'],
        components: {
        },
        data () {
            return {
                dropdown_opened: false
            }
        },
        mounted() {
            console.debug("DropdownItem mounted called.")
        },
        computed: {
            item_class() {
                return this.item_class_prop;
            },
            item_header_class() {
                return this.item_header_class_prop;
            },
            item_header_text_justify() {
                var text_align = 'text-align: ' + this.header_text_justify;
                console.debug(text_align);
                return text_align
            }
        },
        methods: {
            item_clicked() {
                console.debug("item_clicked");
                this.dropdown_opened = !this.dropdown_opened;
            }
        }

    }

</script>

<style scoped>
</style>

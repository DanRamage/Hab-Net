<template>
    <!-- This gives us the ability to know when the media queries/breaks occur -->
    <span ref="mq_detector" id="mq-detector">
            <span ref="visible_xs" class="d-block d-sm-none">
            </span>
            <span ref="visible_sm" class="d-none d-sm-block d-md-none">
            </span>
            <span ref="visible_md" class="d-none d-md-block d-lg-none">
            </span>
            <span ref="visible_lg" class="d-none d-lg-block d-xl-none">
            </span>
            <span ref="visible_xlg" class="d-none d-xl-block">
            </span>
        </span>

</template>

<script>
    import {XS} from '@/constants'
    import {SM} from '@/constants'
    import {MD} from '@/constants'
    import {LG} from '@/constants'
    import {XLG} from '@/constants'

    export default {
        name: 'MQDetector',
        data() {
            return {
                currMqIdx: -1,
                mqSelectors: undefined,
                mqTypes: ['xs', 'sm', 'md', 'lg', 'xlg'],
                mqTypeVals: [XS, SM, MD, LG, XLG]
            }
        },
        mounted() {
            this.mqSelectors = [
                this.$refs.visible_xs,
                this.$refs.visible_sm,
                this.$refs.visible_md,
                this.$refs.visible_lg,
                this.$refs.visible_xlg
            ];
            window.addEventListener("resize", this.resizeHandler);

        },
        destroyed() {
            window.removeEventListener("resize", this.resizeHandler);
        },

        methods: {
            resizeHandler() {
                console.log("mq_detector resizeHandler");
                for (var i = 0; i < this.mqSelectors.length; i++) {
                    //if(this.mqSelectors[i].offsetLeft > 0)
                    if(this.mqSelectors[i].getBoundingClientRect().width > 0)
                    {
                        if (this.currMqIdx != i) {
                            this.currMqIdx = i;
                            this.$emit("mqChanged", this.mqTypes[i], this.mqTypeVals[i]);
                            break;
                        }
                    }
                }
            },
        }
    }
</script>

<template>
    <div>
        <Card class="card-shadow">
        <Foo/>
            <p slot="title">
                <Icon type="md-basket"></Icon>
                Assets
            </p>
            <Button
                slot="extra"
                type="primary"
                :to="'addItemPage'"
                icon="md-create"
                size="small"
                >Add Item</Button
            >
            <Row>
                <Col :lg="8" :md="12">
                    <MyComponentA
                        class="singleNumCardMd"
                        :groupNames="groupNames"
                    ></MyComponentA>
                </Col>
                <Col :lg="8" :md="12">
                    <MyComponentB
                        class="singleNumCardMd"
                        :groupNames="groupNames"
                    ></MyComponentB>
                </Col>
                <Col :lg="8" :md="12">
                    <MyComponentC
                        class="singleNumCardMd"
                        :groupNames="groupNames"
                    ></MyComponentC>
                </Col>
                <Col :lg="8" :md="12">
                    <MyComponentD
                        class="singleNumCardMd"
                        :groupNames="groupNames"
                    ></MyComponentD>
                </Col>
                <Col :lg="8" :md="12">
                    <MyComponentE
                        class="singleNumCardMd"
                        :groupNames="groupNames"
                    ></MyComponentE>
                </Col>
                <Col :lg="8" :md="12">
                    <MyComponentF
                        class="singleNumCardMd"
                        :groupNames="groupNames"
                    ></MyComponentF>
                </Col>
            </Row>
        </Card>
    </div>
</template>
<script>
import MyComponentA from "@/components/MyComponentA";
import MyComponentB from "@/components/MyComponentB";
import MyComponentC from "@/components/MyComponentC";
import MyComponentD from "@/components/MyComponentD";
import MyComponentE from "@/components/MyComponentE";
import MyComponentF from "@/components/MyComponentF";

export default {
    name: "TestVue",
    props: ["groupNames"],
    components: {
        MyComponentA,
        MyComponentB,
        MyComponentC,
        MyComponentD,
        MyComponentE,
        MyComponentF
    },
    watch: {},
    created() {},
    beforeDestroy() {},
    data() {
        return {};
    },
    methods: {},
    mounted() {},
    computed: {}
};
</script>

<style scoped>
.singleNumCardMd {
    text-align: center;
    margin: 10px 10px 0px 10px;
}
</style>

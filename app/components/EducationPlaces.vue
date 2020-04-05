<template>
    <StackLayout  columns="*" rows="*">
        <ListView for="item in higherEducationPlaces" style="height:1250px">
            <v-template>
                <FlexboxLayout flexDirection="row">
                        <Label :text="item.name" class="message" style="width: 60%" />
                </FlexboxLayout>
            </v-template>
        </ListView>
    </StackLayout>
</template>

<script>
export default {
    created: function() {
        this.$store.dispatch('GetEducationPlaces');
    },
    computed: {
      higherEducationPlaces() {
        return this.$store.getters.GetEducationPlaces;
      }
    },
}
</script>

<style>
    .message {
        vertical-align: center;
        text-align: left;
        font-size: 16;
        color: #333333;
    }
</style>
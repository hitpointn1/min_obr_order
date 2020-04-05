<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Поступай правильно!" col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Информация для абитуриента"/>

                <Label class="drawer-item" text="Личный кабинет"/>
                <Label class="drawer-item" text="Список ВУЗов"/>
            </StackLayout>

            <StackLayout ~mainContent columns="*" rows="*">
                <ListView for="item in higherEducationPlaces" style="height:1250px">
                    <v-template>
                        <FlexboxLayout flexDirection="row">
                             <Label :text="item.name" class="message" style="width: 60%" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    created: function() {
        this.$store.dispatch('GetEducationPlaces');
    },
    computed: {
      higherEducationPlaces() {
        return this.$store.getters.GetEducationPlaces;
      }
    },
    data() {
      return {
        msg: 'Здесь должны быть представления!'
      }
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: blueviolet;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: left;
        font-size: 16;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: blueviolet;
        color: #ffffff;
        font-size: 16;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>

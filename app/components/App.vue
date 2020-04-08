<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.toggleDrawerState()" col="0"/>
                <Label class="title" text="Поступай правильно!" col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Информация для абитуриента"/>

                <Label class="drawer-item" text="Личный кабинет"
                    @tap="navigateTo('PersonalProfile')"/>
                <Label class="drawer-item" text="Список ВУЗов"
                    @tap="navigateTo('EducationPlacesList')"/>
                <Label class="drawer-item" text="Закрыть"
                    @tap="closeDrawer()"/>
            </StackLayout>

            <Frame ~mainContent>
                <EducationPlacesList />
            </Frame>
        </RadSideDrawer>
    </Page>
</template>

<script>
import EducationPlacesList from './EducationPlacesList';

export default {
  methods: {
    closeDrawer() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
    navigateTo(route) {
      this.$goto(route);
      this.closeDrawer();
    },
  },
  components: {
    EducationPlacesList,
  },
};
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

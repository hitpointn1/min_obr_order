<template>
    <Page>
        <ActionBar title="Личный кабинет" />
        <template v-if="!IsUser">
          <StackLayout verticalAlignment="center" >
            <Button text="Войти" width="70%" @tap="$goto('Login')"/>
            <Button text="Регистрация" width="70%" @tap="$goto('Registration')"/>
          </StackLayout>
        </template>
        <template v-else>
        </template>
    </Page>
</template>

<script>
export default {
  computed: {
    IsUser() {
      return this.$store.getters.IsLoggedIn;
    },
  },
};
</script>

<style>

</style>

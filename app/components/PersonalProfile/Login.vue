<template>
  <Page>
    <ActionBar title="Вход" />
    <StackLayout class="login" horizontalAlignment="center" verticalAlignment="top" >
      <TextBox :labeledText="'Логин'" />
      <TextBox :labeledText="'Пароль'" />
      <Button text="Войти"/>
    </StackLayout>
  </Page>
</template>

<script>
import TextBox from '../Shared/TextBox';

export default {
  components: {
    TextBox,
  },
};
</script>

<style scoped>
  .login {
    margin-top: 50;
  }

  .login Label {
    margin-top: 30;
  }
</style>

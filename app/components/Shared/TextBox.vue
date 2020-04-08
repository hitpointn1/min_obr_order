<template>
  <StackLayout>
    <Label margin-top="20" :text="'Логин'" />
    <TextField width="60%" />
  </StackLayout>
</template>

<script>
export default {
  props: ['labeledText'],
};
</script>

<style>

</style>

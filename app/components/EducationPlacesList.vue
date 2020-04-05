<template>
  <Page>
      <ActionBar title="Список ВУЗов" />
      <StackLayout>
          <EducationPlaces />
      </StackLayout>
  </Page>
</template>

<script>
import EducationPlaces from './EducationPlaces'

export default {
    components: {
        EducationPlaces
    }
}
</script>

<style>

</style>
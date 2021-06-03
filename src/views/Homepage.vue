<template>
  <div>
    <navigation />
    <router-view></router-view>
  </div>
</template>
<script>
import navigation from "../components/NavigationBar.vue";
export default {
  components: { navigation },
};
</script>

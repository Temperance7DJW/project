<template>
  <v-navigation-drawer permanent :height="screenHeight">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <!--
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>-->
    <v-list dense nav>
      <router-link to="/stu-table">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>学生信息一览</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/admin">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>人员管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-help-box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      screenHeight: document.body.clientHeight - 64,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
  mounted() {
    document.getElementById("layout").style.height = this.screenHeight + "px";
    window.onresize = () => {
      return (() => {
        this.screenHeight = document.body.clientHeight;
      })();
    };
  },
  watch: {
    screenHeight(val) {
      this.screenHeight = val;
      document.getElementById("layout").style.height =
        this.screenHeight - 64 + "px";
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>

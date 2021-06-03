<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="id"
            v-model="id"
            :rules="[() => !!id || 'This field is required']"
            :error-messages="errorMessages"
            label="账号"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[() => !!password || 'This field is required']"
            :error-messages="errorMessages"
            :type="show1 ? 'text' : 'password'"
            label="密码"
            required
            @click:append="show1 = !show1"
          >
          </v-text-field>
          <v-radio-group v-model="row" row required>
            <v-radio label="学生" value="student"></v-radio>
            <v-radio label="导师" value="teacher"></v-radio>
            <v-radio label="主任" value="director"></v-radio>
            <v-radio label="管理员" value="admin"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text> 取消 </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>刷新</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">
            <router-link to="/homepage">提交</router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  data() {
    return {
      show1: false,
    };
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

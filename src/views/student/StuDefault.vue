<template>
  <v-container fluid>
    <template>
      <v-row>
        <template>
          <v-col cols="12" sm="6">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                个人信息
                <v-spacer></v-spacer>
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>姓名：</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ info1.stu }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>学号：</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ info1.stu_id }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>导师：</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ info1.stu_id }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
            <v-card style="margin-top: 5px">
              <v-card-title class="subheading font-weight-bold">
                选择导师
                <v-spacer></v-spacer>
                <v-btn depressed color="primary"> 确认 </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <template>
                <v-data-table
                  v-model="selected"
                  :headers="headers"
                  :items="desserts"
                  :single-select="singleSelect"
                  hide-default-footer
                  item-key="name"
                  show-select
                  class="elevation-1"
                >
                </v-data-table>
              </template>
              <v-list dense> </v-list>
            </v-card>
          </v-col>
        </template>
        <template>
          <v-col cols="12" sm="6">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                课设信息
                <v-spacer></v-spacer>
                <upload />
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense> </v-list>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </template>
  </v-container>
</template>
<script>
import upload from "../../components/Upload.vue";
export default {
  components: { upload },
  data: () => ({
    itemsPerPage: 4,
    info1: {
      stu: "test1",
      stu_id: 6,
    },
    singleSelect: true,
    selected: [],
    headers: [
      {
        text: "姓名",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "职称", value: "calories" },
      { text: "职称", value: "fat" },
      { text: "小组", value: "carbs" },
      { text: "可指导学生数", value: "protein" },
      { text: "描述", value: "iron" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
    ],
  }),
};
</script>
<style scoped></style>

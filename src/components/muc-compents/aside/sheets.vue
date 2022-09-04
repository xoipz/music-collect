<template>
  <div class="sheetcomp">
    <!-- v-if="drag?.getwidth() > 90" -->
    <div class="title">-歌单-</div>
    <el-scrollbar class="sheets">
      <div class="sheet" v-for="(item, index) in state.sheetdata">
        {{ item.sheetname }}
      </div>
      <div class="sheet" @click="state.dialog.show = true">add</div>
      <!-- <el-button @click="ces()"></el-button> -->
      <el-dialog
        class="dialog"
        title="添加歌单"
        center
        v-model="state.dialog.show"
      >
        <el-form :model="state.form" v-loading="state.dialog.loading">
          <el-form-item label="歌单名称：">
            <el-input v-model="state.form.sheetname" />
          </el-form-item>
          <el-form-item label="歌单描述：">
            <el-input v-model="state.form.describe" />
          </el-form-item>
          <el-form-item label="歌单图片：">
            <el-input v-model="state.form.sheetimg" />
          </el-form-item>

          <el-button class="botton" @click="add()">添加</el-button>
        </el-form>
      </el-dialog>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { addsheet, getsheet } from "~/api/api";
import { Elapi } from "~/hooks/useapiresult";

onMounted(() => {
  search();
});

const state = reactive({
  dialog: {
    show: false,
    loading: false,
  },
  form: {
    sheetname: "",
    describe: "",
    sheetimg: "",
  },
  sheetdata: [
    {
      type: "",
      sheetname: "",
      sheetimg: "",
      songs: [],
      creater: "",
      authorid: [],
      id: "",
    },
  ],
});

const add = () => {
  const result = JSON.parse(JSON.stringify(state.form));
  state.dialog.loading = true;
  addsheet(result)
    .then((res: any) => {
      Elapi(res);
    })
    .finally(() => {
      state.dialog.loading = false;
      state.dialog.show = false;
    });
};

const search = (id?: string) => {
  let data: Record<string, string | number> = {};
  if (id) data.id = id;

  getsheet(data).then((res: any) => {
    state.sheetdata = res.data;
  });
};
</script>

<style lang="scss" scoped>
.sheetcomp {
  align-items: center;
  width: 100%;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.sheets {
  width: 100%;
  flex: 1;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  background: var(--color-2);

  .sheet {
    height: 80px;
    width: 90%;
    margin: auto;
    background: #fff;
    overflow: hidden;
    padding: 4px;
    border-radius: 4px;
    margin: 10px auto;
    cursor: pointer;
  }
}

.dialog {
  display: flex;
  flex-direction: column;
  .button {
    margin: auto;
  }
}
</style>

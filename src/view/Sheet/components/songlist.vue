<template>
  <div class="songlist">
    <div class="songrow header">
      <div class="item">全选</div>
      <div class="item">歌曲名</div>
      <div class="item">歌手</div>
      <div class="item">专辑名</div>
      <div class="item">时长</div>
    </div>

    <div
      class="songrow content"
      :class="i % 2 == 0 ? 'black' : ''"
      v-for="(item, i) in tableData"
      :key="i"
    >
      <div class="item">选择</div>
      <div class="item">{{ item.songname }}</div>
      <div class="item">{{ item.albumid }}</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>

    <div class="end" @click="state.dialog.show = true">添加歌曲</div>

    <el-dialog
      class="dialog"
      title="添加歌曲"
      center
      v-model="state.dialog.show"
    >
      <el-form :model="state.form" v-loading="state.dialog.loading">
        <el-form-item label="加入到歌单：">
          todo
        </el-form-item>
        <el-form-item label="歌曲名称：">
          <el-input v-model="state.form.songname" />
        </el-form-item>
        <el-form-item label="歌曲描述：">
          <el-input v-model="state.form.describe" />
        </el-form-item>
        <el-form-item label="歌曲图片：">
          <el-input v-model="state.form.songimg" />
        </el-form-item>
        <el-form-item label="歌曲文件：">
          <el-input v-model="state.form.songurl" />
        </el-form-item>


        <el-button class="botton" @click="add()">添加</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { addsheet, getsheet } from "~/api/api";
import { Elapi } from "~/hooks/useapiresult";
import { useUserStore } from "~/store/modules/user";
import { useRouters } from "~/hooks/useRouters";
const { routerTo } = useRouters();
const store = { User: useUserStore() };

const state = reactive({
  loading: false,

  dialog: {
    show: false,
    loading: false,
  },

  form: {
    songname: "",
    sheetname: "",
    describe: "",
    songimg: "",
    songs: [],
    creater: store.User.getUsername,
    authorid: [],
    songurl:"",
  },
});

const tableData = [
  {
    songname: "2016-05-03",
    songimg: "Tom",
    albumid: "123",
    duration: "",
    authorid: 123,
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const ces = (e: any) => {
  console.log(e);
};

const add = () => {
  console.log("add");
};
</script>

<style lang="scss" scoped>
.songlist {
  margin: 10px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;

  .end {
    background: var(--color-2);
    display: flex;
    // border-radius: 2px;
    overflow: hidden;
    justify-content: center;
    height: 40px;
    align-items: center;
    cursor: pointer;
    margin-top: 2px;

    &:hover {
      background: var(--color-1);
    }

    &:active {
      background: var(--color-0);
    }
  }
}

.songrow {
  display: grid;
  grid-template-columns: 50px 3fr 1fr 1fr 1fr;
  grid-auto-rows: 40px;

  .item {
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 10px;
    align-items: center;
    border: #f5f5f5 solid 1px;
    background: var(--color-4);
    border-radius: 2px;
    overflow: hidden;
  }

  + .content .item {
    cursor: pointer;
  }

  + .black {
    .item {
      background: #fff;
    }
  }
}
</style>

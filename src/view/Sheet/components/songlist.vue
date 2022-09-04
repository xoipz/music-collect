<template>
  <div class="songlist">
    <div class="item hd">全选</div>
    <div class="item hd">歌曲名</div>
    <div class="item hd">歌手</div>
    <div class="item hd">专辑名</div>
    <div class="item hd">时长</div>

    <div class="item item1">选择</div>
    <div class="item item1">2</div>
    <div class="item item1">3</div>
    <div class="item item1">4</div>
    <div class="item item1">5</div>

    <div class="item">选择</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>

    <div class="item end">添加音乐</div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    songname: "2016-05-03",
    songimg: "Tom",
    albumid: "123",
    duration:"",
    authorid:123,
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
</script>

<style lang="scss" scoped>
.songlist {
  margin: 10px 0;
  flex: 1;
  display: grid;
  grid-template-columns:50px 3fr 1fr 1fr 1fr;
  grid-auto-rows: 40px;
  justify-items: center;
  align-items: center;
  
  border-radius: 2px;
  overflow: hidden;

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
    cursor:pointer ;
  }

  .item1 {

    background: #919191;
  }

  .hd{
    cursor:auto;
  }

  .end {
    background: var(--color-2);
    grid-column-start: span 5;
    border-radius: 2px;
    overflow: hidden;
    justify-content: center;
    
  }
}
</style>

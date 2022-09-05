<template>
  <el-upload
    class="upload-demo"
    drag
    multiple
    action="http://127.0.0.1:9007/common/upload"
    v-on:success="success"
    v-on:error="error"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">将文件放在此处或 <em>点击上传</em></div>
  </el-upload>
</template>

<script lang="ts" setup>
import { UploadFilled } from "@element-plus/icons-vue";

const success = (e: any) => {
  console.log("success", e);
};

const error = (e: any) => {
  console.log("error", e);
};
</script>

<style lang="scss" scoped></style>

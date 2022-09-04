import axios from "axios";
import { ElMessage } from "element-plus";
//创建axios的一个实例
var http = axios.create({
  // baseURL: "/api",
  baseURL: "http://127.0.0.1:9007",

  // baseURL: "http://localhost:8080/", //接口统一域名
  timeout: 10000, //设置超时
});

//------------------- 一、请求拦截器 忽略
http.interceptors.request.use(
  (config: any) => {
    config.headers["Content-Type"] = "application/json;charset=utf-8";
    let token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token") as string)
      : null;
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

//----------------- 二、响应拦截器 忽略
http.interceptors.response.use(
  (response) => {
    if (response.data.code === "400") {
      ElMessage({ type: "error", message: "400" + response.data.message });
    }
    if (response.data.code === "401") {
      ElMessage({ type: "error", message: "401" + response.data.message });
      localStorage.clear();
      location.reload();
    }

    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    console.log("拦截器报错");
    ElMessage({ type: "error", message: "服务器错误" });
    return Promise.reject(error);
  }
);

export default http;

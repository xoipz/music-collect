import http from "./Http"; //连接接口文件

//
// export const getcheckCode = (params) => http.get("/getcheckCode", { params });
// export const userlogin = (params) => http.post("/login", params);


//测试服务器
export const test = (params?: any) => http.get("/common/test", { params });

//添加歌单
export const addsheet = (params?: any) => http.post("/sheet/addsheet", params);

//查询歌单
export const getsheet = (params?: any) => http.get("/sheet/getsheet", { params });


// //上传文件TODO
// export const upload = (params?: any) => http.post("/common/upload", params);





// //发送验证码
// export const sendEmail = (config, params?: any) =>
//   http.post("/login/sendEmail" + config, params);
// //注册
// export const addUser = (params?: any) => http.post("/login/addUser", params);

// //管理员登录
// export const adminLogin = (params?: any) => http.post("/login/adminLogin", params);
// //用户登录
// export const userLogin = (params?: any) => http.post("/login/userLogin", params);
// //登出
// export const logout = (params?: any) => http.post("login/logout", params);

// //轮播图数据
// export const selAllImg = (params?: any) => http.get("/selAllImg", { params });
// //更新轮播图数据
// export const updateImg = (params?: any) => http.post("/updateImg", params);






// //获取分类数据
// export const selAllTag = (params?: any) => http.get("/tag/selAllTag", { params });
// //添加分类数据
// export const addTag = (params?: any) => http.post("/tag/addTag", params);
// //更新分类数据
// export const updateTag = (params?: any) => http.put("/tag/updateTag", params);
// //删除分类数据
// export const delTag = (config, params?: any) =>
//   http.delete("tag/delTag" + config, params);



// //获取分类项目
// export const selTagAndStatus = (config, params?: any) =>
//   http.get("project/selTagAndStatus" + config, { params });


  
// //管理员部分
// //获取用户维护数据
// export const admin = (config, params) => http.post("admin" + config, params);
// //删除用户维护数据
// export const delAdmin = (config, params) =>
//   http.delete("admin/delAdmin" + config, params);
// //添加用户维护数据
// export const addAdmin = (params) => http.post("admin/addAdmin", params);
// //更新用户维护数据
// export const updateAdmin = (params) => http.put("admin/updateAdmin", params);

// //获取角色维护数据
// export const role = (config, params) => http.post("role" + config, params);
// //删除角色维护数据
// export const delRole = (config, params) =>
//   http.delete("role/delRole" + config, params);
// //添加角色维护数据
// export const addRole = (params) => http.post("role/addRole", params);
// //更新角色维护数据
// export const updateRole = (params) => http.put("role/updateRole", params);

// //获取菜单数据
// export const selAllMenu = (params) => http.get("/menu/selAllMenu", { params });
// //删除角色维护数据
// export const delMenu = (config, params) =>
//   http.delete("menu/delMenu" + config, params);
// //添加角色维护数据
// export const addMenu = (params) => http.post("menu/addMenu", params);
// //更新角色维护数据
// export const updateMenu = (params) => http.put("menu/updateMenu", params);


// // 获取标签数据
// export const selAllType = (params) => http.get("type/selAllType", { params });

// // 发布
// //获取回报数据
// export const selAllReturn = (params) => http.get("repay/selAllReturn", { params });
// //删除角色维护数据
// export const delRepay = (config, params) => http.delete("repay/delRepay" + config, params);
// //添加回报数据
// export const addRepay = (params) => http.post("repay/addRepay", params);
// //更新角色维护数据
// export const updateRepay = (params) => http.put("repay/updateRepay", params);
// //发布项目
// export const addProject = (params) => http.post("project/addProject", params);


// // 获取项目详情
// export const rojectDetails = (config) => http.get("/rojectDetails/"+config);



// //添加收货地址
// export const addAddress = (params) => http.post("address/addAddress", params);
// //查询收货地址
// export const selAddress = (config) => http.get("address/selAddress/"+ config);

// // 支付
// export const alipay = (params) => http.post("/alipay", params);



// //添加实名认证
// export const addRealNameAuth = (params) => http.post("realNameAuth/addRealNameAuth", params);
// //查询实名认证
// export const selRealNameAuth = (params) => http.get("/realNameAuth/selRealNameAuth", params);
// // 实名认证通过
// export const approve = (config) => http.put("/realNameAuth/approve/"+config);
// // 实名认证不通过
// export const disagree = (config) => http.put("/realNameAuth/disagree/"+config);

// //获取标签数据
// export const selAll = (params) => http.get("/type/selAll", { params });
// //删除标签维护数据
// export const delType = (config, params) =>
//   http.delete("type/delType" + config, params);
// //添加标签维护数据
// export const addType = (params) => http.post("type/addType", params);
// //更新标签维护数据
// export const updateType = (params) => http.put("type/updateType", params);
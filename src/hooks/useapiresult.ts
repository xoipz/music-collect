import { ElMessage } from "element-plus";

export const Elapi =(res:any,msg?:string)=>{
    ElMessage({type:res.code==200?"success":"error",message:msg?msg:res.msg})
} 

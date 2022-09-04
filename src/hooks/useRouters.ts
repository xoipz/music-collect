import { useRoute, useRouter } from "vue-router";

export const useRouters = () => {
  const route = useRoute();
  const router = useRouter();

  const routerTo = (name: string, data?: any) => {
    const rour:Record<string,any> = {
      name: name,
    }
    if(data){
      rour.query= {data:encodeURI(JSON.stringify(data))}
    }
    router.push(rour);
  };

  const routeGet = () => {
    console.log("a",JSON.parse(decodeURI(route.query.data as string)))
    return JSON.parse(decodeURI(route.query.data as string)) ;
  };


  return {
    routerTo,
    routeGet
  };
};

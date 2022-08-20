import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFileSystemAccess } from '@vueuse/core'



export const useLocaljson = () => {
  const Add = () => {
    console.log("Add");
  };

  const Del = () => {
    console.log("Del");
  };

  const Change = () => {
    

    console.log(FileReader)
  };

  const Find = () => {
    console.log("Find");
  };

  return {
    Add,
    Del,
    Change,
    Find,
  };
};

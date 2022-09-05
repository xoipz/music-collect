import { App } from "vue";

import draggable from "./modules/draggable";
import { MouseMenuDirective } from '@howdyjs/mouse-menu';

const directivesList: any = {
  draggable,
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });

    app.directive("MouseMenu", MouseMenuDirective)
    
    
  },
};

export default directives;

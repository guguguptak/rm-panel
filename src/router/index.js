import { createRouter, createWebHashHistory } from "vue-router";

import allMenuItems from "@/store/modules/menu/all.js";

import appHome from "@/views/appHome/index.vue";
// import appLogin from "@/views/appLogin";
import vaxMessage from "@/views/vaxMessage/index.vue";
import vaxAccountSettings from "@/views/vaxAccountSettings/index.vue";
import sandbox from "@/views/sandbox/index.vue";
import vaxFilesManaged from "@/views/vaxFilesManaged/index.vue";
import vaxFilesAll from "@/views/vaxFilesAll/index.vue";

export default createRouter( {
  history: createWebHashHistory(),
  mode: "hash",
  linkActiveClass: "is-active",
  scrollBehavior: () => ( { y: 0 } ),
  routes: [
    {
      name: "Strona główna",
      path: "/",
      component: appHome,
    },
    {
      name: "Ustawienia konta",
      path: "/accountSettings",
      component: vaxAccountSettings,
    },
    {
      name: "Wiadomość",
      path: "/message",
      component: vaxMessage,
    },
    {
      name: "Test",
      path: "/sandbox",
      component: sandbox,
    },
    {
      name: "Zarządzane pliki",
      path: "/filesManaged",
      component: vaxFilesManaged,
    },
    {
      name: "Wszystkie pliki",
      path: "/filesAll",
      component: vaxFilesAll,
    },
    ...generateRoutesFromMenu( allMenuItems.state.items ),
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: '/404',
    },
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for ( let i = 0, l = menu.length; i < l; i++ ) {
    let item = menu[i];
    if ( item.path ) {
      routes.push( item );
    }
    if ( !item.component ) {
      generateRoutesFromMenu( item.children, routes );
    }
  }
  return routes;
}

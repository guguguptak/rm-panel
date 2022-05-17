import menu from "./modules/menu";
import { roleToAccessLevel } from "@/utils/userRoles.js";

export const pkg = ( (state) => state.pkg );
export const app = ( (state) => state.app );

export const displaySidebar = ( (state) => state.app.sidebar.display );
export const userRole = ( (state) => state.userRole );
export const accessLevel = ( (state) => roleToAccessLevel[state.userRole] );
export const menuItems = ( (state2) => menu.menuModules[accessLevel(state2)].state.items );
export const currentContext = ( (state) => state.app.currentContext );
export const possibleContexts = ( (state) => state.app.possibleContexts );
export const formModified = ( (state) => state.app.formModified );
//export const routeChanging = ( (state) => state.app.routeChanging );

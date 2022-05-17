import * as mutationTypes from "../../mutation-types";

import menuModule0 from "./0-nobody.js";
import menuModule1 from "./1-journalKeeper.js";
import menuModule2 from "./2-unitCoord.js";
import menuModule3 from "./3-unitPrincipal.js";
import menuModule4 from "./4-cityCoord.js";
import menuModule5 from "./5-campaignCoord.js";
import menuModule6 from "./6-admin.js";

const menuModules = [
  menuModule0,
  menuModule1,
  menuModule2,
  menuModule3,
  menuModule4,
  menuModule5,
  menuModule6,
];

const mutations = {
  [mutationTypes.EXPAND_MENU] ( state, menuItem ) {
/*
    const idx = menuItem.index;
    if ( idx > -1 ) {
      if ( state.items[menuItem.index]?.meta ) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if ("expanded" in menuItem.item?.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
*/
  }
}

export default {
  menuModules,
  mutations
}

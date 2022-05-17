//import Expanding from 'vue-bulma-expanding'
import { mapGetters, mapActions } from 'vuex'
import store from "@/store";
import appFooter from "../appFooter/index.vue";

export default {
  components: {
    //Expanding
    appFooter
  },

  props: {
    show: Boolean
  },

  data: () => ( {
    isReady: false
  } ),

  mounted () {
    const route = this.$route;
    if ( route.name ) {
      this.isReady = true;
      this.shouldExpandMatchItem( route );
    }
  },

  computed: {
    ...mapGetters([
      "menuItems"
    ])
  },

  methods: {
    ...mapActions([
      //'expandMenu'
    ]),

    isExpanded (item) {
      //return item.meta.expanded
      return false;
    },

    toggle (index, item) {
    /*
      this.expandMenu( {
        index: index,
        expanded: !item.meta.expanded
      } )
      */
    },

    shouldExpandMatchItem (route) {
    /*
      let matched = route.matched
      let lastMatched = matched[matched.length - 1]
      let parent = lastMatched.parent ?? lastMatched
      const isParent = parent === lastMatched

      if (isParent) {
        const p = this.findParentFromMenu(route)
        if (p) {
          parent = p
        }
      }

      if ('expanded' in parent.meta && !isParent) {
        this.expandMenu( {
          item: parent,
          expanded: true
        } )
      }
      */
    },

    generatePath (item, subItem) {
      return `${item.component ? item.path + '/' : ''}${subItem.path}`
    },

    findParentFromMenu (route) {
      const menum = this.menuItems;
      for (let i = 0, l = menum.length; i < l; i++) {
        const item = menum[i];
        const k = item.children?.length;
        if (k) {
          for (let j = 0; j < k; j++) {
            if (item.children[j].name === route.name) {
              return item;
            }
          }
        }
      }
    }
  },

  watch: {
    $route (route) {
      this.isReady = true
      this.shouldExpandMatchItem(route)
    }
  }

}

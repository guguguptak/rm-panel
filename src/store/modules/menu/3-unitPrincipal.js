import lazyLoading from "@/views/lazyLoading.js";

const state = {
  items: [
    {
      name: "Pliki i załączniki",
      path: "/files",
      meta: {
        icon: "fa-file-o",
      },
      component: lazyLoading("vaxFiles")
    },
    {
      name: "Zgłoś placówkę",
      path: "/addUnit",
      meta: {
        icon: "fa-building",
      },
      component: lazyLoading("rmAddUnit")
    }
  ]
}

export default {
  state
}

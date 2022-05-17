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
      name: "Zarządzaj kampanią",
      path: "/manageCampaign",
      meta: {
        icon: "fa-cogs",
      },
      component: lazyLoading("rmManageCampaign")
    },
    {
      name: "Zarządzaj miastem",
      path: "/manageCity",
      meta: {
        icon: "fa-cogs",
      },
      component: lazyLoading("rmManageCity")
    },
    {
      name: "Weryfikacja wyników",
      path: "/statsCities",
      meta: {
        icon: "fa-check",
      },
      component: lazyLoading("rmStatsCities")
    },
    {
      name: "Uprawnienia",
      path: "/permissions",
      meta: {
        icon: "fa-users",
      },
      component: lazyLoading("rmPermissions")
    },
    {
      name: "Mailing",
      path: "/mailing",
      meta: {
        icon: "fa-envelope-o",
      },
      component: lazyLoading("rmMailing")
    },
    {
      name: "Raporty",
      path: "/reports",
      meta: {
        icon: "fa-bar-chart-o",
      },
      component: lazyLoading("rmReports")
    },
//
    {
      name: "Dodaj miasto",
      path: "/addCity",
      meta: {
        icon: "fa-plus",
      },
      component: lazyLoading("rmAddCity")
    },
    {
      name: "Nowa kampania",
      path: "/addCampaign",
      meta: {
        icon: "fa-plus-circle",
      },
      component: lazyLoading("rmAddCampaign")
    },
  ]
}

export default {
  state
}

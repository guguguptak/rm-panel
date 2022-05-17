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
      name: "Zarządzaj placówką",
      path: "/manageUnit",
      meta: {
        icon: "fa-cogs",
      },
      component: lazyLoading("rmManageUnit")
    },
    {
      name: "Weryfikacja wyników",
      path: "/statsClazzes",
      meta: {
        icon: "fa-check",
      },
      component: lazyLoading("rmStatsClazzes")
    },
    {
      name: "Uprawnienia i\u00A0zaproszenia",
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
/*
    {
      name: "Raporty",
      path: "/reports",
      meta: {
        icon: "fa-bar-chart-o",
        link: "rmReports/index.vue"
      },
      component: lazyLoading("rmReports")
    },
*/
//
    {
      name: "Dziennik - edycja",
      path: "/journalEdit",
      meta: {
        icon: "fa-calendar vax-red",
      },
      component: lazyLoading("rmJournalEdit")
    },
    {
      name: "Dziennik - podgląd",
      path: "/journalView",
      meta: {
        icon: "fa-calendar-check-o vax-green",
      },
      component: lazyLoading("rmJournalView")
    },
    {
      name: "Oddziały",
      path: "/defineClazzes",
      meta: {
        icon: "fa-table",
      },
      component: lazyLoading("rmDefineClazzes")
    },
    {
      name: "Przyznane nagrody",
      path: "/reqRewardsUnit",
      meta: {
        icon: "fa-trophy",
      },
      component: lazyLoading("rmReqRewardsUnit")
    },
  ]
}

export default {
  state
}

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
      name: "Zarządzaj miastem",
      path: "/manageCity",
      meta: {
        icon: "fa-cogs",
      },
      component: lazyLoading("rmManageCity")
    },
    {
      name: "Podgląd placówki",
      path: "/manageUnit",
      meta: {
        icon: "fa-cogs",
      },
      component: lazyLoading("rmManageUnit")
    },
    {
      name: "Zgłoś placówkę",
      path: "/addUnit",
      meta: {
        icon: "fa-building",
      },
      component: lazyLoading("rmAddUnit")
    },
    {
      name: "Weryfikacja wyników (placówki)",
      path: "/statsUnits",
      meta: {
        icon: "fa-check",
      },
      component: lazyLoading("rmStatsUnits")
    },
    {
      name: "Weryfikacja wyników (oddziały)",
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
      name: "Zgłoszenia",
      path: "/requests",
      meta: {
        icon: "fa-reply-all",
      },
      component: lazyLoading("rmRequests")
    },
    {
      name: "Ustal/przyznaj nagrody indywidualne",
      path: "/rewardsPersonal",
      meta: {
        icon: "fa-trophy vax-red",
      },
      component: lazyLoading("rmRewardsPersonal")
    },
    {
      name: "Ustal nagrody grupowe",
      path: "/rewardsGroup",
      meta: {
        icon: "fa-trophy vax-red",
      },
      component: lazyLoading("rmRewardsGroup.json")
    },
    {
      name: "Przyznaj nagrody grupowe",
      path: "/rewardsGroupAssign",
      meta: {
        icon: "fa-trophy",
      },
      component: lazyLoading("rmRewardsGroupAssign")
    },
    {
    name: "Przyznane nagrody indywidualne (miasto)",
      path: "/reqRewardsCityPersonal",
      meta: {
        icon: "fa-trophy vax-green",
      },
      component: lazyLoading("rmReqRewardsCityPersonal")
    },
    {
      name: "Przyznane nagrody grupowe (miasto)",
      path: "/reqRewardsCityGroup",
      meta: {
        icon: "fa-trophy vax-green",
      },
      component: lazyLoading("rmReqRewardsCityGroup")
    },
    /*
    {
      name: "Przyznane nagrody (placówka)",
      path: "/reqRewardsUnit",
      meta: {
        icon: "fa-trophy vax-green",
      },
      component: lazyLoading("rmReqRewardsUnit")
    },
    */
    {
      name: "Potrzebne wydruki",
      path: "/reqPrints",
      meta: {
        icon: "fa-print",
      },
      component: lazyLoading("rmReqPrints")
    },
    {
      name: "Dziennik - podgląd",
      path: "/journalView",
      meta: {
        icon: "fa-calendar-check-o vax-green",
      },
      component: lazyLoading("rmJournalView")
    },
  ]
}

export default {
  state
}

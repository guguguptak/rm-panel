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
  ]
}

export default {
  state
}

import {
    ageOptionsStr,
} from "@/utils/i18n-data.js";

export default {
  props: {
    selectedNr: Number,
    name: String,
  },
  data: () => ( {
    ageOptionsNames: ageOptionsStr, // note: 4th range ('liceum') is disabled manually in html as per #408
  } )
}

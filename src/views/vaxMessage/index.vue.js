// *** AUTOGENERATED // placing any import before this line will break autogeneration
import {
    vaxView,
} from "@/components";
// *** AUTOGENERATED end

export default {
  name: "vaxMessage",
  components: {
    vaxView,
  },
  data () {
//    { json: JSON.parse( this.$route.query.json ) }
    return this.$route.query;
  },
  mounted () {
    window.location.hash = "#/message";
  }
}

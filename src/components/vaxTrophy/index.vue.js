export default {
  props: {
    type: {
      type: String,
      default: "gold"
    },
    count: {
      type: Number,
      default: 0 // 0 enables autocount
    }
  },
  data: () => ( {
    countMap: {
      diamond: 5,
      platinum: 4,
      gold: 3,
      silver: 2,
      bronze: 1
    },
    realCount: undefined
  } ),
  beforeMount () {
    this.realCount = ( this.count === 0 ) ? this.countMap[this.type] : this.count;
  }
}

export default ( name ) => ( () => import( `./${name}/index.vue` ) );

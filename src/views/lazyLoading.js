export default ( name ) => ( () => import( `./views/${name}/index.vue` ) );

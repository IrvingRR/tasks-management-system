<!-- 
  Root component of the application 
  Depending of the layout indicate in the meta property of the route, the content will be rendered within
  of that layout
-->

<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>
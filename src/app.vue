<template>
  <main>
    <ul class="app__navigator">
      <li v-for="({name, path}) in routes" :key="path">
        <router-link :to="path">{{name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import routes from 'routes'

@Component
export default class App extends Vue {
  private routes = routes
}
</script>

<style lang="scss">
.app__navigator {
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: center;

  li {
    padding: 4px 8px;
  }

  a {
    text-decoration: none;
    color: tomato;

    &:active {
      color: tomato;
    }
  }
}
</style>

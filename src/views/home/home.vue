<template>
  <center>
    <Logo
      circle
    />
  </center>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Logo from 'components/logo'

@Component({
  components: {
    Logo,
  },
})
export default class HomeView extends Vue {}
</script>

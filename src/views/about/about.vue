<template>
  <div>
    <Avatar/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Avatar} from '~na~me~'

@Component({
  components: {
    Avatar,
  },
})
export default class About extends Vue {}
</script>

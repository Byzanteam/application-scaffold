<template>
  <div class="logo">
    <img
      :class="classes"
      :style="styles"
      src="~assets/images/logo.png"
    />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop({
    default: false,
    type: Boolean,
  })
  private circle!: boolean

  @Prop({default: 128})
  private size!: number | string

  private get classes() {
    return [
      'logo__image',
      {
        'logo__image--circle': this.circle,
      }
    ]
  }

  private get styles() {
    const size = typeof this.size === 'string' ? this.size : `${this.size}px`

    return {
      width: size,
      height: size,
    }
  }
}
</script>

<style lang="scss">
.logo {
  display: inline-block;

  &__image {
    vertical-align: top;

    &--circle {
      border-radius: 50%;
    }
  }
}
</style>

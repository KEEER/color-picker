<template>
  <div class="colorpicker">
    <div class="colorpicker__custom" :class="isCustom ? '' : 'hidden'">
      <m-text-field
        outlined
        class="jscolor colorpicker__custom--input"
        v-model="custom"
        ref="customInput"
      ></m-text-field>
      <div class="colorpicker__swatch">
        <div class="colorpicker__swatch-color" @click="customOk" ref="customOk">
          <i
            class="material-icons colorpicker__swatch-icon"
            :class="`colorpicker__swatch-icon--${lightOrDark(custom)}`"
          >done</i>
        </div>
      </div>
    </div>
    <div class="colorpicker__palette" :class="isCustom ? 'hidden' : ''">
      <div class="colorpicker__swatch" v-for="(color, i) in colors" :key="color">
        <div
          class="colorpicker__swatch-color"
          :class="selected === i ? 'colorpicker__swatch-color--selected' : ''"
          :style="`background-color: ${color}`"
          @click="select(i)"
        >
          <i
            class="material-icons colorpicker__swatch-icon"
            :class="`colorpicker__swatch-icon--${lightOrDark(color)}`"
            v-if="selected === i"
          >done</i>
        </div>
      </div>
      <div class="colorpicker__swatch">
        <div class="colorpicker__swatch-color colorpicker__swatch-color--new" @click="isCustom = true">
          <i class="material-icons colorpicker__swatch-icon colorpicker__swatch-icon--dark">add</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none !important;
}
.colorpicker__palette {
  margin: 0;
  width: 256px;
  display: flex;
  flex-wrap: wrap;
}
.colorpicker__swatch {
  width: 32px;
  height: 32px;
  position: relative;
}
.colorpicker__swatch-color {
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  margin: 4px;
}
.colorpicker__swatch-color:hover,
.colorpicker__swatch-color:focus {
  width: 26px;
  height: 26px;
  margin: 3px;
}
.colorpicker__swatch-color.colorpicker__swatch-color--selected {
  width: 28px;
  height: 28px;
  margin: 2px;
}
.colorpicker__swatch-icon {
  top: 7px;
  position: absolute;
  left: 7px;
  font-size: 17px;
  line-height: 17px;
  user-select: none;
}
.colorpicker__swatch-icon--light {
  color: #f5fafd;
}
.colorpicker__swatch-icon--dark {
  color: #002d4d;
}
.colorpicker__swatch-color--new {
  background-color: #ccc;
}
.colorpicker__custom {
  display: flex;
  align-items: center;
}
.colorpicker__custom--input {
  width: 128px;
}
</style>

<style lang="scss" src="./styles.scss"></style>

<script>
import tinycolor from 'tinycolor2'
import '../vendor/jscolor'

export default {
  name: 'color-picker',
  data () {
    return {
      colors: [
        '#003c3c', '#002d4d', '#db4437', '#673ab7', '#3f51b5', '#4285f4', '#03a9f4', '#00bcd4',
        '#ff5722', '#ff9800', '#009688', '#4caf50', '#607d8b', '#9e9e9e',
      ],
      selected: 0,
      isCustom: false,
      custom: '#ffffff',
      jscolor: null,
    }
  },
  props: {
    value: String,
  },
  methods: {
    select (i) {
      this.selected = i
      this.$emit('input', this.colors[this.selected])
    },
    lightOrDark (color) {
      return tinycolor(color).isLight() ? 'dark' : 'light'
    },
    syncCustom () { this.custom = this.jscolor.toHEXString().toLowerCase() },
    customOk () {
      this.syncCustom()
      this.syncColor(this.custom)
      this.isCustom = false
    },
    syncColor (colorName) {
      const color = tinycolor(colorName)
      if (!color.isValid()) return
      const i = this.colors.indexOf(color.toHexString())
      if (i < 0) {
        this.colors.push(color.toHexString())
        this.select(this.colors.length - 1)
      } else this.select(i)
    },
  },
  mounted () {
    this.jscolor = new jscolor(this.$refs.customInput.$el.querySelector('input'), {
      hash: true,
      uppercase: false,
      value: '#ffffff',
      required: false,
      styleElement: this.$refs.customOk,
      onChange: () => this.syncCustom(),
    })
    this.syncColor(this.value)
  },
}
</script>

<template>
  <div class="el-select">
    <div class="el-select__tags"
         ref="tags">
      <span>
        <span class="el-tag el-tag--info el-tag--small el-tag--light"
              v-for="(item, idx) in list"
              :key="idx">
          <span class="el-select__tags-text">{{item}}</span>
          <i class="el-tag__close el-icon-close"
             @click="delItem(idx)" />
        </span>
      </span>
    </div>
    <div class="el-input el-input--suffix">
      <input type="text"
             ref="selectInput"
             class="el-input__inner"
             v-model="selectVal"
             :style="{'paddingLeft': paddings}"
             @keyup.enter="addItem">
      <span class="el-input__suffix">
        <span class="el-input__suffix-inner">
          <i class="el-select__caret el-input__icon el-icon-arrow-up" />
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selects',
  data () {
    return {
      paddings: '',
      list: ['美国', '中国', '韩国'],
      selectVal: ''
    }
  },
  mounted () {
    this.reset()
  },
  methods: {
    addItem () {
      if (this.selectVal) {
        this.list.push(this.selectVal)
        this.selectVal = ''
        this.reset()
      } else {

      }
    },
    delItem (i) {
      this.list.splice(i, 1)
      this.reset()
    },
    reset () {
      this.$nextTick(() => {
        const tags = this.$refs.tags
        this.paddings = 15 + tags.clientWidth + 'px'
        const sizeInMap = this.initialInputHeight || 40
        this.$refs.selectInput.style.height = this.list.length === 0
          ? sizeInMap + 'px'
          : Math.max(
            tags ? (tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
            sizeInMap
          ) + 'px'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select__tags{
    max-width: 250px;
}
.el-input__inner {
    height: 40px;
    width: 340px;
}
</style>

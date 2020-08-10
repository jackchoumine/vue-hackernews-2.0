/*
 * @Description: 根据函数
 * @Date: 2020-08-11 01:26:13 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-11 02:37:59 +0800
 * @LastEditors: JackChouMine
 */
/* eslint-disable no-undef */
function getTitle (vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

const serverTitleMixin = {
  created () {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = `Vue HN 2.0 | ${title}`
    }
  }
}

const clientTitleMixin = {
  mounted () {
    const title = getTitle(this)
    if (title) {
      document.title = `Vue HN 2.0 | ${title}`
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin

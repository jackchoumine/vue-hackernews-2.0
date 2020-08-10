/* eslint-disable no-undef */
/*
 * @Description: 
 * @Date: 2020-08-11 01:26:13 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-11 02:12:11 +0800
 * @LastEditors: JackChouMine
 */
import Firebase from 'firebase'
import LRU from 'lru-cache'

export function createAPI ({ config, version }) {
  let api
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  //
  if (process.__API__) {
    api = process.__API__
  } else {
    Firebase.initializeApp(config)
    api = process.__API__ = Firebase.database().ref(version)

    api.onServer = true

    // fetched item cache
    api.cachedItems = LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15 // 15 min cache
    })

    // cache the latest story ids
    api.cachedIds = {}
      ;['top', 'new', 'show', 'ask', 'job'].forEach(type => {
        api.child(`${type}stories`).on('value', snapshot => {
          api.cachedIds[type] = snapshot.val()
        })
      })
  }
  return api
}

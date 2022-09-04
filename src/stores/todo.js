import { makeObservable, observable } from 'mobx'

export default class TodoStore {
  list = []

  constructor(rootStore) {
    makeObservable(this, {
      list: observable,
    })
    this.rootStore = rootStore
  }
}


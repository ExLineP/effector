//@flow
//@jsx fx
import $$observable from 'symbol-observable'
//eslint-disable-next-line no-unused-vars
import fx from 'effector/stdlib/fx'

import {Kind} from 'effector/stdlib/kind'

import {createStateRef} from 'effector/stdlib/stateref'
import {createEvent} from 'effector/event'
import type {Store, ThisStore} from './index.h'
import {setStoreName} from './setStoreName'
import type {CompositeName} from '../compositeName'
import {
  reset,
  getState,
  off,
  on,
  observable,
  watch,
  subscribe,
  thru,
  dispatch,
  mapStore,
} from './storeMethods'

export function storeFabric<State>(props: {
  currentState: State,
  name?: string,
  parent?: CompositeName,
}): Store<State> {
  const {currentState, name, parent} = props
  const plainState = createStateRef(currentState)
  const currentId = plainState.id
  const defaultState = currentState

  const def = {}
  def.next = <multi />
  def.seq = (
    <seq>
      <filter
        filter={newValue =>
          newValue !== undefined && newValue !== plainState.current
        }
      />
      <update store={plainState} />
      {def.next}
    </seq>
  )

  const updater: any = createEvent('update ' + currentId)
  const storeInstance: ThisStore = {
    graphite: def,
    kind: Kind.store,
    id: currentId,
    shortName: currentId,
    domainName: parent,
    defaultState,
    plainState,
    subscribers: new Map(),
  }
  const store: $Shape<Store<State>> = {
    graphite: def,
    kind: Kind.store,
    id: currentId,
    shortName: currentId,
    domainName: parent,
    setState,
    off: off.bind(null, storeInstance),
    watch: watch.bind(null, storeInstance),
    subscribe: subscribe.bind(null, storeInstance),
    getState: getState.bind(null, storeInstance),
    //$off
    [$$observable]: observable.bind(null, storeInstance),
  }
  ;(store: any).reset = reset.bind(store, storeInstance)
  ;(store: any).on = on.bind(store, storeInstance)
  ;(store: any).defaultState = defaultState
  ;(store: any).map = mapStore.bind(storeFabric, store)
  ;(store: any).thru = thru.bind(store)
  ;(store: any).dispatch = dispatch.bind(null)
  //TODO fix type
  //$off
  if (name) setStoreName(store, name)
  store.on(updater, (_, payload) => payload)

  function setState(value, reduce?: Function) {
    const currentReducer =
      typeof reduce === 'function' ? reduce : (_, payload) => payload
    const state = getState(storeInstance)
    const newResult = currentReducer(state, value)

    updater(newResult)
  }

  return store
}

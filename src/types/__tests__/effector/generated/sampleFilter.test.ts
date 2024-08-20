/* eslint-disable no-unused-vars */
import {createStore, createEvent, sample} from 'effector'
const typecheck = '{global}'
type Astr = {a: string}
type AB = {a: number; b: string}
type AoptB = {a: number | null; b: string}
type ABN = {a: number; b: number}
const $filter = createStore(true)
const a = createStore(0)
const aOpt = createStore<number | null>(0)
const b = createStore('')
const voidt = createEvent()
const anyt = createEvent<any>()
const numt = createEvent<number>()
const strt = createEvent<number>()
const $num = createStore(0)
const ab = createEvent<AB>()
const $ab = createStore<AB>({a: 0, b: ''})
const nullableAB = createEvent<AB | null>()
const abNull = createEvent<{a: number | null; b: string}>()
const aNum = createEvent<{a: number}>()
const aStr = createEvent<{a: string}>()
const lNum = createEvent<[number]>()
const lStr = createEvent<[string]>()
const lNumStr = createEvent<[number, string]>()
const lNumNum = createEvent<[number, number]>()
const abn = createEvent<ABN>()
describe('unit source', () => {
  describe('unit -> unit same', () => {
    test('unit -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , target:ab   , filter:(val) => val.a > 0                })
        sample({source:ab        , target:anyt , filter:(val) => val.a > 0                })
        sample({source:ab        , target:voidt, filter:(val) => val.a > 0                })
        sample({source:ab        , target:ab   , filter:$filter                           })
        sample({source:ab        , target:anyt , filter:$filter                           })
        sample({source:ab        , target:voidt, filter:$filter                           })
        sample({source:ab        , target:ab   , filter:Boolean                           })
        sample({source:ab        , target:anyt , filter:Boolean                           })
        sample({source:ab        , target:voidt, filter:Boolean                           })
        sample({source:abNull    , target:ab   , filter:(val): val is AB => val.a !== null})
        sample({source:nullableAB, target:ab   , filter:Boolean                           })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          //@ts-expect-error
          target: abn,
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          //@ts-expect-error
          target: abn,
          filter: $filter,
        })
        sample({
          source: ab,
          //@ts-expect-error
          target: abn,
          filter: Boolean,
        })
        sample({
          source: abNull,
          //@ts-expect-error
          target: abn,
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: nullableAB,
          //@ts-expect-error
          target: abn,
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit -> unit wide', () => {
    test('unit -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , target:aNum, filter:(val) => val.a > 0})
        sample({source:ab        , target:aNum, filter:$filter           })
        sample({source:ab        , target:aNum, filter:Boolean           })
        sample({source:nullableAB, target:aNum, filter:Boolean           })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
        sample({
          source: ab,
          //@ts-expect-error
          target: aStr,
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          //@ts-expect-error
          target: aStr,
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type 'AB'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + clock -> unit same', () => {
    test('unit + clock -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:anyt, target:ab   , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:anyt, target:anyt , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:anyt, target:voidt, filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:numt, target:ab   , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:numt, target:anyt , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:numt, target:voidt, filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:anyt, target:ab   , filter:$filter                                      })
        sample({source:ab        , clock:anyt, target:anyt , filter:$filter                                      })
        sample({source:ab        , clock:anyt, target:voidt, filter:$filter                                      })
        sample({source:ab        , clock:anyt, target:ab   , filter:Boolean                                      })
        sample({source:ab        , clock:anyt, target:anyt , filter:Boolean                                      })
        sample({source:ab        , clock:anyt, target:voidt, filter:Boolean                                      })
        sample({source:abNull    , clock:anyt, target:ab   , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:numt, target:ab   , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:nullableAB, clock:anyt, target:ab   , filter:Boolean                                      })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + clock -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: anyt,
          //@ts-expect-error
          target: abn,
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          //@ts-expect-error
          target: abn,
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          //@ts-expect-error
          target: abn,
          filter: Boolean,
        })
        sample({
          source: abNull,
          clock: anyt,
          //@ts-expect-error
          target: abn,
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          //@ts-expect-error
          target: abn,
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + clock -> unit wide', () => {
    test('unit + clock -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:anyt, target:aNum, filter:(val) => val.a > 0  })
        sample({source:ab        , clock:numt, target:aNum, filter:(val,n) => val.a > n})
        sample({source:ab        , clock:anyt, target:aNum, filter:$filter             })
        sample({source:ab        , clock:anyt, target:aNum, filter:Boolean             })
        sample({source:nullableAB, clock:anyt, target:aNum, filter:Boolean             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + clock -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + [clock] -> unit same', () => {
    test('unit + [clock] -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:[anyt]     , target:ab   , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:[anyt]     , target:anyt , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:[anyt]     , target:voidt, filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:[numt,$num], target:ab   , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:[numt,$num], target:anyt , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:[numt,$num], target:voidt, filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:[anyt]     , target:ab   , filter:$filter                                      })
        sample({source:ab        , clock:[anyt]     , target:anyt , filter:$filter                                      })
        sample({source:ab        , clock:[anyt]     , target:voidt, filter:$filter                                      })
        sample({source:ab        , clock:[anyt]     , target:ab   , filter:Boolean                                      })
        sample({source:ab        , clock:[anyt]     , target:anyt , filter:Boolean                                      })
        sample({source:ab        , clock:[anyt]     , target:voidt, filter:Boolean                                      })
        sample({source:abNull    , clock:[anyt]     , target:ab   , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:[numt,$num], target:ab   , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:nullableAB, clock:[anyt]     , target:ab   , filter:Boolean                                      })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + [clock] -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: [anyt],
          //@ts-expect-error
          target: abn,
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          //@ts-expect-error
          target: abn,
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          //@ts-expect-error
          target: abn,
          filter: Boolean,
        })
        sample({
          source: abNull,
          clock: [anyt],
          //@ts-expect-error
          target: abn,
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          //@ts-expect-error
          target: abn,
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + [clock] -> unit wide', () => {
    test('unit + [clock] -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:[anyt]     , target:aNum, filter:(val) => val.a > 0  })
        sample({source:ab        , clock:[numt,$num], target:aNum, filter:(val,n) => val.a > n})
        sample({source:ab        , clock:[anyt]     , target:aNum, filter:$filter             })
        sample({source:ab        , clock:[anyt]     , target:aNum, filter:Boolean             })
        sample({source:nullableAB, clock:[anyt]     , target:aNum, filter:Boolean             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + [clock] -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit -> array same', () => {
    test('unit -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , target:[ab]           , filter:(val) => val.a > 0                })
        sample({source:ab        , target:[ab,anyt]      , filter:(val) => val.a > 0                })
        sample({source:ab        , target:[ab,voidt]     , filter:(val) => val.a > 0                })
        sample({source:ab        , target:[ab,anyt,voidt], filter:(val) => val.a > 0                })
        sample({source:ab        , target:[ab]           , filter:$filter                           })
        sample({source:ab        , target:[ab,anyt]      , filter:$filter                           })
        sample({source:ab        , target:[ab,voidt]     , filter:$filter                           })
        sample({source:ab        , target:[ab,anyt,voidt], filter:$filter                           })
        sample({source:ab        , target:[ab]           , filter:Boolean                           })
        sample({source:ab        , target:[ab,anyt]      , filter:Boolean                           })
        sample({source:ab        , target:[ab,voidt]     , filter:Boolean                           })
        sample({source:ab        , target:[ab,anyt,voidt], filter:Boolean                           })
        sample({source:abNull    , target:[ab]           , filter:(val): val is AB => val.a !== null})
        sample({source:abNull    , target:[ab,anyt]      , filter:(val): val is AB => val.a !== null})
        sample({source:abNull    , target:[ab,voidt]     , filter:(val): val is AB => val.a !== null})
        sample({source:abNull    , target:[ab,anyt,voidt], filter:(val): val is AB => val.a !== null})
        sample({source:nullableAB, target:[ab]           , filter:Boolean                           })
        sample({source:nullableAB, target:[ab,anyt]      , filter:Boolean                           })
        sample({source:nullableAB, target:[ab,voidt]     , filter:Boolean                           })
        sample({source:nullableAB, target:[ab,anyt,voidt], filter:Boolean                           })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: abNull,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type 'AB'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit -> array wide', () => {
    test('unit -> array wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , target:[aNum]           , filter:(val) => val.a > 0})
        sample({source:ab        , target:[aNum,anyt]      , filter:(val) => val.a > 0})
        sample({source:ab        , target:[aNum,voidt]     , filter:(val) => val.a > 0})
        sample({source:ab        , target:[aNum,anyt,voidt], filter:(val) => val.a > 0})
        sample({source:ab        , target:[aNum]           , filter:$filter           })
        sample({source:ab        , target:[aNum,anyt]      , filter:$filter           })
        sample({source:ab        , target:[aNum,voidt]     , filter:$filter           })
        sample({source:ab        , target:[aNum,anyt,voidt], filter:$filter           })
        sample({source:ab        , target:[aNum]           , filter:Boolean           })
        sample({source:ab        , target:[aNum,anyt]      , filter:Boolean           })
        sample({source:ab        , target:[aNum,voidt]     , filter:Boolean           })
        sample({source:ab        , target:[aNum,anyt,voidt], filter:Boolean           })
        sample({source:nullableAB, target:[aNum]           , filter:Boolean           })
        sample({source:nullableAB, target:[aNum,anyt]      , filter:Boolean           })
        sample({source:nullableAB, target:[aNum,voidt]     , filter:Boolean           })
        sample({source:nullableAB, target:[aNum,anyt,voidt], filter:Boolean           })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit -> array wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + clock -> array same', () => {
    test('unit + clock -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:anyt, target:[ab]           , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:anyt, target:[ab,anyt]      , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:anyt, target:[ab,voidt]     , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:anyt, target:[ab,anyt,voidt], filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:numt, target:[ab]           , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:numt, target:[ab,anyt]      , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:numt, target:[ab,voidt]     , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:numt, target:[ab,anyt,voidt], filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:anyt, target:[ab]           , filter:$filter                                      })
        sample({source:ab        , clock:anyt, target:[ab,anyt]      , filter:$filter                                      })
        sample({source:ab        , clock:anyt, target:[ab,voidt]     , filter:$filter                                      })
        sample({source:ab        , clock:anyt, target:[ab,anyt,voidt], filter:$filter                                      })
        sample({source:ab        , clock:anyt, target:[ab]           , filter:Boolean                                      })
        sample({source:ab        , clock:anyt, target:[ab,anyt]      , filter:Boolean                                      })
        sample({source:ab        , clock:anyt, target:[ab,voidt]     , filter:Boolean                                      })
        sample({source:ab        , clock:anyt, target:[ab,anyt,voidt], filter:Boolean                                      })
        sample({source:abNull    , clock:anyt, target:[ab]           , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:anyt, target:[ab,anyt]      , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:anyt, target:[ab,voidt]     , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:anyt, target:[ab,anyt,voidt], filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:numt, target:[ab]           , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:abNull    , clock:numt, target:[ab,anyt]      , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:abNull    , clock:numt, target:[ab,voidt]     , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:abNull    , clock:numt, target:[ab,anyt,voidt], filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:nullableAB, clock:anyt, target:[ab]           , filter:Boolean                                      })
        sample({source:nullableAB, clock:anyt, target:[ab,anyt]      , filter:Boolean                                      })
        sample({source:nullableAB, clock:anyt, target:[ab,voidt]     , filter:Boolean                                      })
        sample({source:nullableAB, clock:anyt, target:[ab,anyt,voidt], filter:Boolean                                      })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + clock -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: abNull,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + clock -> array wide', () => {
    test('unit + clock -> array wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:anyt, target:[aNum]           , filter:(val) => val.a > 0  })
        sample({source:ab        , clock:anyt, target:[aNum,anyt]      , filter:(val) => val.a > 0  })
        sample({source:ab        , clock:anyt, target:[aNum,voidt]     , filter:(val) => val.a > 0  })
        sample({source:ab        , clock:anyt, target:[aNum,anyt,voidt], filter:(val) => val.a > 0  })
        sample({source:ab        , clock:numt, target:[aNum]           , filter:(val,n) => val.a > n})
        sample({source:ab        , clock:numt, target:[aNum,anyt]      , filter:(val,n) => val.a > n})
        sample({source:ab        , clock:numt, target:[aNum,voidt]     , filter:(val,n) => val.a > n})
        sample({source:ab        , clock:numt, target:[aNum,anyt,voidt], filter:(val,n) => val.a > n})
        sample({source:ab        , clock:anyt, target:[aNum]           , filter:$filter             })
        sample({source:ab        , clock:anyt, target:[aNum,anyt]      , filter:$filter             })
        sample({source:ab        , clock:anyt, target:[aNum,voidt]     , filter:$filter             })
        sample({source:ab        , clock:anyt, target:[aNum,anyt,voidt], filter:$filter             })
        sample({source:ab        , clock:anyt, target:[aNum]           , filter:Boolean             })
        sample({source:ab        , clock:anyt, target:[aNum,anyt]      , filter:Boolean             })
        sample({source:ab        , clock:anyt, target:[aNum,voidt]     , filter:Boolean             })
        sample({source:ab        , clock:anyt, target:[aNum,anyt,voidt], filter:Boolean             })
        sample({source:nullableAB, clock:anyt, target:[aNum]           , filter:Boolean             })
        sample({source:nullableAB, clock:anyt, target:[aNum,anyt]      , filter:Boolean             })
        sample({source:nullableAB, clock:anyt, target:[aNum,voidt]     , filter:Boolean             })
        sample({source:nullableAB, clock:anyt, target:[aNum,anyt,voidt], filter:Boolean             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + clock -> array wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + [clock] -> array same', () => {
    test('unit + [clock] -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:[anyt]     , target:[ab]           , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:[anyt]     , target:[ab,anyt]      , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:[anyt]     , target:[ab,voidt]     , filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:[anyt]     , target:[ab,anyt,voidt], filter:(val) => val.a > 0                           })
        sample({source:ab        , clock:[numt,$num], target:[ab]           , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:[numt,$num], target:[ab,anyt]      , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:[numt,$num], target:[ab,voidt]     , filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:[numt,$num], target:[ab,anyt,voidt], filter:(val,n) => val.a > n                         })
        sample({source:ab        , clock:[anyt]     , target:[ab]           , filter:$filter                                      })
        sample({source:ab        , clock:[anyt]     , target:[ab,anyt]      , filter:$filter                                      })
        sample({source:ab        , clock:[anyt]     , target:[ab,voidt]     , filter:$filter                                      })
        sample({source:ab        , clock:[anyt]     , target:[ab,anyt,voidt], filter:$filter                                      })
        sample({source:ab        , clock:[anyt]     , target:[ab]           , filter:Boolean                                      })
        sample({source:ab        , clock:[anyt]     , target:[ab,anyt]      , filter:Boolean                                      })
        sample({source:ab        , clock:[anyt]     , target:[ab,voidt]     , filter:Boolean                                      })
        sample({source:ab        , clock:[anyt]     , target:[ab,anyt,voidt], filter:Boolean                                      })
        sample({source:abNull    , clock:[anyt]     , target:[ab]           , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:[anyt]     , target:[ab,anyt]      , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:[anyt]     , target:[ab,voidt]     , filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:[anyt]     , target:[ab,anyt,voidt], filter:(val): val is AB => val.a !== null           })
        sample({source:abNull    , clock:[numt,$num], target:[ab]           , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:abNull    , clock:[numt,$num], target:[ab,anyt]      , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:abNull    , clock:[numt,$num], target:[ab,voidt]     , filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:abNull    , clock:[numt,$num], target:[ab,anyt,voidt], filter:(val,n): val is AB => n > 0 && val.a !== null})
        sample({source:nullableAB, clock:[anyt]     , target:[ab]           , filter:Boolean                                      })
        sample({source:nullableAB, clock:[anyt]     , target:[ab,anyt]      , filter:Boolean                                      })
        sample({source:nullableAB, clock:[anyt]     , target:[ab,voidt]     , filter:Boolean                                      })
        sample({source:nullableAB, clock:[anyt]     , target:[ab,anyt,voidt], filter:Boolean                                      })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + [clock] -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: abNull,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: abNull,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val): val is AB => val.a !== null,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('unit + [clock] -> array wide', () => {
    test('unit + [clock] -> array wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:ab        , clock:[anyt]     , target:[aNum]           , filter:(val) => val.a > 0  })
        sample({source:ab        , clock:[anyt]     , target:[aNum,anyt]      , filter:(val) => val.a > 0  })
        sample({source:ab        , clock:[anyt]     , target:[aNum,voidt]     , filter:(val) => val.a > 0  })
        sample({source:ab        , clock:[anyt]     , target:[aNum,anyt,voidt], filter:(val) => val.a > 0  })
        sample({source:ab        , clock:[numt,$num], target:[aNum]           , filter:(val,n) => val.a > n})
        sample({source:ab        , clock:[numt,$num], target:[aNum,anyt]      , filter:(val,n) => val.a > n})
        sample({source:ab        , clock:[numt,$num], target:[aNum,voidt]     , filter:(val,n) => val.a > n})
        sample({source:ab        , clock:[numt,$num], target:[aNum,anyt,voidt], filter:(val,n) => val.a > n})
        sample({source:ab        , clock:[anyt]     , target:[aNum]           , filter:$filter             })
        sample({source:ab        , clock:[anyt]     , target:[aNum,anyt]      , filter:$filter             })
        sample({source:ab        , clock:[anyt]     , target:[aNum,voidt]     , filter:$filter             })
        sample({source:ab        , clock:[anyt]     , target:[aNum,anyt,voidt], filter:$filter             })
        sample({source:ab        , clock:[anyt]     , target:[aNum]           , filter:Boolean             })
        sample({source:ab        , clock:[anyt]     , target:[aNum,anyt]      , filter:Boolean             })
        sample({source:ab        , clock:[anyt]     , target:[aNum,voidt]     , filter:Boolean             })
        sample({source:ab        , clock:[anyt]     , target:[aNum,anyt,voidt], filter:Boolean             })
        sample({source:nullableAB, clock:[anyt]     , target:[aNum]           , filter:Boolean             })
        sample({source:nullableAB, clock:[anyt]     , target:[aNum,anyt]      , filter:Boolean             })
        sample({source:nullableAB, clock:[anyt]     , target:[aNum,voidt]     , filter:Boolean             })
        sample({source:nullableAB, clock:[anyt]     , target:[aNum,anyt,voidt], filter:Boolean             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('unit + [clock] -> array wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: ab,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
        sample({
          source: nullableAB,
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: Boolean,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
})
describe('object source', () => {
  describe('object -> array same', () => {
    test('object -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, target:[ab]           , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[ab,anyt]      , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[ab,voidt]     , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[ab,anyt,voidt], filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[ab]           , filter:$filter           })
        sample({source:{a,b}, target:[ab,anyt]      , filter:$filter           })
        sample({source:{a,b}, target:[ab,voidt]     , filter:$filter           })
        sample({source:{a,b}, target:[ab,anyt,voidt], filter:$filter           })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object -> array wide', () => {
    test('object -> array wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, target:[aNum]           , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[aNum,anyt]      , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[aNum,voidt]     , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[aNum,anyt,voidt], filter:(val) => val.a > 0})
        sample({source:{a,b}, target:[aNum]           , filter:$filter           })
        sample({source:{a,b}, target:[aNum,anyt]      , filter:$filter           })
        sample({source:{a,b}, target:[aNum,voidt]     , filter:$filter           })
        sample({source:{a,b}, target:[aNum,anyt,voidt], filter:$filter           })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object -> array wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object + clock -> array same', () => {
    test('object + clock -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, clock:anyt, target:[ab]           , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:[ab,anyt]      , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:[ab,voidt]     , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:[ab,anyt,voidt], filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:numt, target:[ab]           , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:[ab,anyt]      , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:[ab,voidt]     , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:[ab,anyt,voidt], filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:anyt, target:[ab]           , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:[ab,anyt]      , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:[ab,voidt]     , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:[ab,anyt,voidt], filter:$filter             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + clock -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object + clock -> array wide', () => {
    test('object + clock -> array wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, clock:anyt, target:[aNum]           , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:[aNum,anyt]      , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:[aNum,voidt]     , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:[aNum,anyt,voidt], filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:numt, target:[aNum]           , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:[aNum,anyt]      , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:[aNum,voidt]     , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:[aNum,anyt,voidt], filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:anyt, target:[aNum]           , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:[aNum,anyt]      , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:[aNum,voidt]     , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:[aNum,anyt,voidt], filter:$filter             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + clock -> array wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: anyt,
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object + [clock] -> array same', () => {
    test('object + [clock] -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, clock:[anyt]     , target:[ab]           , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:[ab,anyt]      , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:[ab,voidt]     , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:[ab,anyt,voidt], filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[numt,$num], target:[ab]           , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:[ab,anyt]      , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:[ab,voidt]     , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:[ab,anyt,voidt], filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[anyt]     , target:[ab]           , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:[ab,anyt]      , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:[ab,voidt]     , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:[ab,anyt,voidt], filter:$filter             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + [clock] -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            abn,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object + [clock] -> array wide', () => {
    test('object + [clock] -> array wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, clock:[anyt]     , target:[aNum]           , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:[aNum,anyt]      , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:[aNum,voidt]     , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:[aNum,anyt,voidt], filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[numt,$num], target:[aNum]           , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:[aNum,anyt]      , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:[aNum,voidt]     , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:[aNum,anyt,voidt], filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[anyt]     , target:[aNum]           , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:[aNum,anyt]      , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:[aNum,voidt]     , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:[aNum,anyt,voidt], filter:$filter             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + [clock] -> array wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            ab,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          target: [
            //@ts-expect-error
            aStr,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type '{ readonly a: number; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object -> unit same', () => {
    test('object -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, target:ab   , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:anyt , filter:(val) => val.a > 0})
        sample({source:{a,b}, target:voidt, filter:(val) => val.a > 0})
        sample({source:{a,b}, target:ab   , filter:$filter           })
        sample({source:{a,b}, target:anyt , filter:$filter           })
        sample({source:{a,b}, target:voidt, filter:$filter           })
        sample({source:{a}  , target:aNum , filter:(val) => val.a > 0})
        sample({source:{a}  , target:aNum , filter:$filter           })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          //@ts-expect-error
          target: abn,
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          //@ts-expect-error
          target: abn,
          filter: $filter,
        })
        //@ts-expect-error
        sample({source:{a}  , target:ab, filter:(val) => val.a > 0})
        sample({
          source: {a},
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        //@ts-expect-error
        sample({source:{a}  , target:ab, filter:$filter           })
        sample({
          source: {a},
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        "
      `)
    })
  })
  describe('object -> unit wide', () => {
    test('object -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}     , target:aNum, filter:(val) => val.a > 0                                        })
        sample({source:{a,b}     , target:aNum, filter:$filter                                                   })
        sample({source:{a:aOpt,b}, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:$filter                                        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object + clock -> unit same', () => {
    test('object + clock -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, clock:anyt, target:ab   , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:anyt , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:anyt, target:voidt, filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:numt, target:ab   , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:anyt , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:numt, target:voidt, filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:anyt, target:ab   , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:anyt , filter:$filter             })
        sample({source:{a,b}, clock:anyt, target:voidt, filter:$filter             })
        sample({source:{a}  , clock:anyt, target:aNum , filter:(val) => val.a > 0  })
        sample({source:{a}  , clock:numt, target:aNum , filter:(val,n) => val.a > n})
        sample({source:{a}  , clock:anyt, target:aNum , filter:$filter             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + clock -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: anyt,
          //@ts-expect-error
          target: abn,
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          //@ts-expect-error
          target: abn,
          filter: $filter,
        })
        //@ts-expect-error
        sample({source:{a}  , clock:anyt, target:ab, filter:(val) => val.a > 0})
        sample({
          source: {a},
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        //@ts-expect-error
        sample({source:{a}  , clock:anyt, target:ab, filter:$filter           })
        sample({
          source: {a},
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        "
      `)
    })
  })
  describe('object + clock -> unit wide', () => {
    test('object + clock -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}     , clock:anyt, target:aNum, filter:(val) => val.a > 0                                          })
        sample({source:{a,b}     , clock:numt, target:aNum, filter:(val,n) => val.a > n                                        })
        sample({source:{a,b}     , clock:anyt, target:aNum, filter:$filter                                                     })
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  })
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + clock -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: anyt,
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0  })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:$filter                                          })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object + [clock] -> unit same', () => {
    test('object + [clock] -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}, clock:[anyt]     , target:ab   , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:anyt , filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[anyt]     , target:voidt, filter:(val) => val.a > 0  })
        sample({source:{a,b}, clock:[numt,$num], target:ab   , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:anyt , filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[numt,$num], target:voidt, filter:(val,n) => val.a > n})
        sample({source:{a,b}, clock:[anyt]     , target:ab   , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:anyt , filter:$filter             })
        sample({source:{a,b}, clock:[anyt]     , target:voidt, filter:$filter             })
        sample({source:{a}  , clock:[anyt]     , target:aNum , filter:(val) => val.a > 0  })
        sample({source:{a}  , clock:[numt,$num], target:aNum , filter:(val,n) => val.a > n})
        sample({source:{a}  , clock:[anyt]     , target:aNum , filter:$filter             })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + [clock] -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: [anyt],
          //@ts-expect-error
          target: abn,
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          //@ts-expect-error
          target: abn,
          filter: $filter,
        })
        //@ts-expect-error
        sample({source:{a}  , clock:[anyt], target:ab, filter:(val) => val.a > 0})
        sample({
          source: {a},
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        //@ts-expect-error
        sample({source:{a}  , clock:[anyt], target:ab, filter:$filter           })
        sample({
          source: {a},
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: StoreWritable<number>; b: Store<string>; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        "
      `)
    })
  })
  describe('object + [clock] -> unit wide', () => {
    test('object + [clock] -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a,b}     , clock:[anyt]     , target:aNum, filter:(val) => val.a > 0                                          })
        sample({source:{a,b}     , clock:[numt,$num], target:aNum, filter:(val,n) => val.a > n                                        })
        sample({source:{a,b}     , clock:[anyt]     , target:aNum, filter:$filter                                                     })
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  })
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('object + [clock] -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a,b},
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: (val) => val.a > 0,
        })
        sample({
          source: {a,b},
          clock: [anyt],
          //@ts-expect-error
          target: aStr,
          filter: $filter,
        })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0  })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:$filter                                          })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: string; }>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: string; }' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<{ readonly a: number | null; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type '{ a: number; }' but required in type '{ readonly a: number | null; readonly b: string; }'.
        "
      `)
    })
  })
  describe('object, fn -> unit wide', () => {
    test('object, fn -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:aOpt,b}, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0           , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0           , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, target:aNum, filter:$filter                                                   , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, target:aNum, filter:$filter                                                   , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0, fn:(val) => ({a: val.a + 1, b: val.b})           })
        sample({source:{a:aOpt,b}, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0, fn:(val: AB) => ({a: val.a + 1, b: val.b})       })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 7 'sample({source:{a:aOpt,b}, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0, fn:(val) => ({a: val.a + 1, b: val.b})           })'
        'val.a' is possibly 'null'.
        "
      `)
    })
    test('object, fn -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0           , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0           , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0           , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:$filter                                                   , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:$filter                                                   , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:$filter                                                   , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0, fn:(val) => ({a: 1 + val.c, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0, fn:(val: ABN) => ({a: val.a + 1, b: ''})  })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0, fn:() => 'wrong'                          })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        'val.a' is possibly 'null'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type '{ a: number; }' is not assignable to type 'string'.
        Parameter 'val' implicitly has an 'any' type.
        'val.a' is possibly 'null'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Property 'c' does not exist on type '{ readonly a: number | null; readonly b: string; }'.
        Argument of type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; target: EventCallable<{ a: number; }>; filter: (val: { readonly a: number | null; readonly b: string; }) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; clock?: undefined; filter?: (((src: { readonly a: number | null; readonly b: string; }) => src is { ...; }) & ((src: { ...; }) => src is { ...; })) | undefined; fn?: (((src: { ...; }) => any) & ((src: { ...; }) => an...'.
          Type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; target: EventCallable<{ a: number; }>; filter: (val: { readonly a: number | null; readonly b: string; }) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; clock?: undefined; filter?: ((src: { readonly a: number | null; readonly b: string; }) => boolean) | undefined; fn?: ((src: { ...; }) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; bat...'.
            Type '{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; target: EventCallable<{ a: number; }>; filter: (val: { readonly a: number | null; readonly b: string; }) => val is AB; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; clock?: undefined; filter?: ((src: { readonly a: number | null; readonly b: string; }) => boolean) | undefined; fn?: ((src: { ...; }) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: bool...'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }) => any'.
                  Types of parameters 'val' and 'src' are incompatible.
                    Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'ABN'.
                      Types of property 'a' are incompatible.
                        Type 'number | null' is not assignable to type 'number'.
                          Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        "
      `)
    })
  })
  describe('object + clock, fn -> unit wide', () => {
    test('object + clock, fn -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:$filter                                                     , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:$filter                                                     , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val) => ({a: val.a + 1, b: val.b})           })
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val) => ({a: val.a + 1, b: val.b})           })
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val: AB) => ({a: val.a + 1, b: val.b})       })
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val: AB) => ({a: val.a + 1, b: val.b})       })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 9 'sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val) => ({a: val.a + 1, b: val.b})           })'
        'val.a' is possibly 'null'.
        Unmarked error at test line 10 'sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val) => ({a: val.a + 1, b: val.b})           })'
        'val.a' is possibly 'null'.
        "
      `)
    })
    test('object + clock, fn -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:$filter                                                     , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:$filter                                                     , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:$filter                                                     , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val) => ({a: 1 + val.c, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val) => ({a: 1 + val.c, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val: ABN) => ({a: val.a + 1, b: ''})  })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val: ABN) => ({a: val.a + 1, b: ''})  })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:anyt, target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:numt, target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:() => 'wrong'                          })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        'val.a' is possibly 'null'.
        'val.a' is possibly 'null'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }, clk: any) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: any) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }, clk: number) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: number) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Parameter 'n' implicitly has an 'any' type.
        'val.a' is possibly 'null'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }, clk: any) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: any) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Property 'c' does not exist on type '{ readonly a: number | null; readonly b: string; }'.
        Property 'c' does not exist on type '{ readonly a: number | null; readonly b: string; }'.
        Argument of type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: EventCallable<any>; target: EventCallable<{ a: number; }>; filter: (val: { ...; }) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<any>; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: (((src: { ...; }, clk: any) => src is { ...; }) & ((src: { ...; }, clk: any) => src is { ...; })) | undefined; fn?: (((src: { ...; }, clk: any) => any) & ((src: { ...; }, clk: any)...'.
          Type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: EventCallable<any>; target: EventCallable<{ a: number; }>; filter: (val: { ...; }) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: EventCallable<any>; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: ((src: { ...; }, clk: any) => boolean) | undefined; fn?: ((src: { ...; }, clk: any) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
            Type '{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: EventCallable<any>; target: EventCallable<{ a: number; }>; filter: (val: { ...; }) => val is AB; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: EventCallable<any>; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: ((src: { ...; }, clk: any) => boolean) | undefined; fn?: ((src: { ...; }, clk: any) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefine...'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: any) => any'.
                  Types of parameters 'val' and 'src' are incompatible.
                    Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'ABN'.
                      Types of property 'a' are incompatible.
                        Type 'number | null' is not assignable to type 'number'.
                          Type 'null' is not assignable to type 'number'.
        Argument of type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: EventCallable<number>; target: EventCallable<{ a: number; }>; filter: (val: { ...; }, n: number) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<number>; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: (((src: { ...; }, clk: number) => src is { ...; }) & ((src: { ...; }, clk: number) => src is { ...; })) | undefined; fn?: (((src: { ...; }, clk: number) => any) & ((src: { ...; ...'.
          Type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: EventCallable<number>; target: EventCallable<{ a: number; }>; filter: (val: { ...; }, n: number) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: EventCallable<number>; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: ((src: { ...; }, clk: number) => boolean) | undefined; fn?: ((src: { ...; }, clk: number) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: ...'.
            Type '{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: EventCallable<number>; target: EventCallable<{ a: number; }>; filter: (val: { ...; }, n: number) => val is AB; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: EventCallable<number>; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: ((src: { ...; }, clk: number) => boolean) | undefined; fn?: ((src: { ...; }, clk: number) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: number) => any'.
                  Types of parameters 'val' and 'src' are incompatible.
                    Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'ABN'.
                      Types of property 'a' are incompatible.
                        Type 'number | null' is not assignable to type 'number'.
                          Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Parameter 'n' implicitly has an 'any' type.
        "
      `)
    })
  })
  describe('object + [clock], fn -> unit wide', () => {
    test('object + [clock], fn -> unit wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:$filter                                                     , fn:(val) => ({a: 0, b: `${val.b.length}`})       })
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:$filter                                                     , fn:(val: AoptB) => ({a: 0, b: `${val.b.length}`})})
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val) => ({a: val.a + 1, b: val.b})           })
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val) => ({a: val.a + 1, b: val.b})           })
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val: AB) => ({a: val.a + 1, b: val.b})       })
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val: AB) => ({a: val.a + 1, b: val.b})       })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 9 'sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val) => ({a: val.a + 1, b: val.b})           })'
        'val.a' is possibly 'null'.
        Unmarked error at test line 10 'sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val) => ({a: val.a + 1, b: val.b})           })'
        'val.a' is possibly 'null'.
        "
      `)
    })
    test('object + [clock], fn -> unit wide (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val) => typeof val.a === 'number' && val.a > 0             , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n) => typeof val.a === 'number' && val.a > n           , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:$filter                                                     , fn:(val) => ({a: val.a + 1, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:$filter                                                     , fn:(val: AB) => ({a: val.a + 1, b: val.b})})
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:$filter                                                     , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val) => ({a: 1 + val.c, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val) => ({a: 1 + val.c, b: val.b})    })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:(val: ABN) => ({a: val.a + 1, b: ''})  })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:(val: ABN) => ({a: val.a + 1, b: ''})  })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[anyt]     , target:aNum, filter:(val): val is AB => typeof val.a === 'number' && val.a > 0  , fn:() => 'wrong'                          })
        //@ts-expect-error
        sample({source:{a:aOpt,b}, clock:[numt,$num], target:aNum, filter:(val,n): val is AB => typeof val.a === 'number' && val.a > n, fn:() => 'wrong'                          })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        'val.a' is possibly 'null'.
        'val.a' is possibly 'null'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }, clk: any) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: any) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }, clk: number) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: number) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Parameter 'n' implicitly has an 'any' type.
        'val.a' is possibly 'null'.
        Type '(val: AB) => { a: number; b: string; }' is not assignable to type '((src: { readonly a: number | null; readonly b: string; }, clk: any) => any) & ((val: AB) => { a: number; b: string; })'.
          Type '(val: AB) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: any) => any'.
            Types of parameters 'val' and 'src' are incompatible.
              Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'AB'.
                Types of property 'a' are incompatible.
                  Type 'number | null' is not assignable to type 'number'.
                    Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Property 'c' does not exist on type '{ readonly a: number | null; readonly b: string; }'.
        Property 'c' does not exist on type '{ readonly a: number | null; readonly b: string; }'.
        Argument of type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: [EventCallable<any>]; target: EventCallable<{ a: number; }>; filter: (val: { ...; }) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<any>]; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: (((src: { ...; }, clk: any) => src is { ...; }) & ((src: { ...; }, clk: any) => src is { ...; })) | undefined; fn?: (((src: { ...; }, clk: any) => any) & ((src: { ...; }...'.
          Type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: [EventCallable<any>]; target: EventCallable<{ a: number; }>; filter: (val: { ...; }) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<any>]; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: ((src: { ...; }, clk: any) => boolean) | undefined; fn?: ((src: { ...; }, clk: any) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?...'.
            Type '{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: [EventCallable<any>]; target: EventCallable<{ a: number; }>; filter: (val: { ...; }) => val is AB; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<any>]; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; filter?: ((src: { ...; }, clk: any) => boolean) | undefined; fn?: ((src: { ...; }, clk: any) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean...'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: any) => any'.
                  Types of parameters 'val' and 'src' are incompatible.
                    Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'ABN'.
                      Types of property 'a' are incompatible.
                        Type 'number | null' is not assignable to type 'number'.
                          Type 'null' is not assignable to type 'number'.
        Argument of type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: [EventCallable<number>, StoreWritable<number>]; target: EventCallable<...>; filter: (val: { ...; }, n: number) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<number>, StoreWritable<number>]; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; ... 4 more ...; batch?: boolean | undefined; }] | [config: ...]'.
          Type '[{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: [EventCallable<number>, StoreWritable<number>]; target: EventCallable<...>; filter: (val: { ...; }, n: number) => val is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<number>, StoreWritable<number>]; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; ... 4 more ...; batch?: boolean | undefined; }]'.
            Type '{ source: { a: StoreWritable<number | null>; b: StoreWritable<string>; }; clock: [EventCallable<number>, StoreWritable<number>]; target: EventCallable<...>; filter: (val: { ...; }, n: number) => val is AB; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<number>, StoreWritable<number>]; source: { readonly a: StoreWritable<number | null>; readonly b: StoreWritable<string>; }; ... 4 more ...; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: string; }' is not assignable to type '(src: { readonly a: number | null; readonly b: string; }, clk: number) => any'.
                  Types of parameters 'val' and 'src' are incompatible.
                    Type '{ readonly a: number | null; readonly b: string; }' is not assignable to type 'ABN'.
                      Types of property 'a' are incompatible.
                        Type 'number | null' is not assignable to type 'number'.
                          Type 'null' is not assignable to type 'number'.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Type 'EventCallable<{ a: number; }>' is not assignable to type 'Unit<string>'.
        Parameter 'val' implicitly has an 'any' type.
        Parameter 'n' implicitly has an 'any' type.
        "
      `)
    })
  })
})
describe('tuple source', () => {
  describe('tuple -> array same', () => {
    test('tuple -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:[a,b], target:[lNumStr]           , filter:(val) => val[0] > 0})
        sample({source:[a,b], target:[lNumStr,anyt]      , filter:(val) => val[0] > 0})
        sample({source:[a,b], target:[lNumStr,voidt]     , filter:(val) => val[0] > 0})
        sample({source:[a,b], target:[lNumStr,anyt,voidt], filter:(val) => val[0] > 0})
        sample({source:[a,b], target:[lNumStr]           , filter:$filter            })
        sample({source:[a,b], target:[lNumStr,anyt]      , filter:$filter            })
        sample({source:[a,b], target:[lNumStr,voidt]     , filter:$filter            })
        sample({source:[a,b], target:[lNumStr,anyt,voidt], filter:$filter            })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('tuple -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type 'readonly [number, string]'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        "
      `)
    })
  })
  describe('tuple + clock -> array same', () => {
    test('tuple + clock -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:[a,b], clock:anyt, target:[lNumStr]           , filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:anyt, target:[lNumStr,anyt]      , filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:anyt, target:[lNumStr,voidt]     , filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:anyt, target:[lNumStr,anyt,voidt], filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:numt, target:[lNumStr]           , filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:numt, target:[lNumStr,anyt]      , filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:numt, target:[lNumStr,voidt]     , filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:numt, target:[lNumStr,anyt,voidt], filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:anyt, target:[lNumStr]           , filter:$filter               })
        sample({source:[a,b], clock:anyt, target:[lNumStr,anyt]      , filter:$filter               })
        sample({source:[a,b], clock:anyt, target:[lNumStr,voidt]     , filter:$filter               })
        sample({source:[a,b], clock:anyt, target:[lNumStr,anyt,voidt], filter:$filter               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('tuple + clock -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          clock: anyt,
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        "
      `)
    })
  })
  describe('tuple + [clock] -> array same', () => {
    test('tuple + [clock] -> array same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr]           , filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr,anyt]      , filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr,voidt]     , filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr,anyt,voidt], filter:(val) => val[0] > 0   })
        sample({source:[a,b], clock:[numt,$num], target:[lNumStr]           , filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:[numt,$num], target:[lNumStr,anyt]      , filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:[numt,$num], target:[lNumStr,voidt]     , filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:[numt,$num], target:[lNumStr,anyt,voidt], filter:(val, n) => val[0] > n})
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr]           , filter:$filter               })
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr,anyt]      , filter:$filter               })
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr,voidt]     , filter:$filter               })
        sample({source:[a,b], clock:[anyt]     , target:[lNumStr,anyt,voidt], filter:$filter               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('tuple + [clock] -> array same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          target: [
            //@ts-expect-error
            lNumNum,
            anyt,
            //@ts-expect-error
            voidt,
          ],
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<void>' is not assignable to type 'Unit<readonly [number, string]>'.
        "
      `)
    })
  })
  describe('tuple -> unit same', () => {
    test('tuple -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:[a,b]         , target:lNumStr, filter:(val) => val[0] > 0})
        sample({source:[a,b]         , target:anyt   , filter:(val) => val[0] > 0})
        sample({source:[a,b]         , target:voidt  , filter:(val) => val[0] > 0})
        sample({source:[a,b] as const, target:lNumStr, filter:(val) => val[0] > 0})
        sample({source:[a,b] as const, target:anyt   , filter:(val) => val[0] > 0})
        sample({source:[a,b] as const, target:voidt  , filter:(val) => val[0] > 0})
        sample({source:[a,b]         , target:lNumStr, filter:$filter            })
        sample({source:[a,b]         , target:anyt   , filter:$filter            })
        sample({source:[a,b]         , target:voidt  , filter:$filter            })
        sample({source:[a,b] as const, target:lNumStr, filter:$filter            })
        sample({source:[a,b] as const, target:anyt   , filter:$filter            })
        sample({source:[a,b] as const, target:voidt  , filter:$filter            })
        sample({source:[a]           , target:lNum   , filter:(val) => val[0] > 0})
        sample({source:[a] as const  , target:lNum   , filter:(val) => val[0] > 0})
        sample({source:[a]           , target:lNum   , filter:$filter            })
        sample({source:[a] as const  , target:lNum   , filter:$filter            })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('tuple -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: [a,b],
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b] as const,
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a,b] as const,
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a],
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a] as const,
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a],
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a] as const,
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        "
      `)
    })
  })
  describe('tuple + clock -> unit same', () => {
    test('tuple + clock -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:[a,b]         , clock:anyt, target:lNumStr, filter:(val) => val[0] > 0   })
        sample({source:[a,b]         , clock:anyt, target:anyt   , filter:(val) => val[0] > 0   })
        sample({source:[a,b]         , clock:anyt, target:voidt  , filter:(val) => val[0] > 0   })
        sample({source:[a,b]         , clock:numt, target:lNumStr, filter:(val, n) => val[0] > n})
        sample({source:[a,b]         , clock:numt, target:anyt   , filter:(val, n) => val[0] > n})
        sample({source:[a,b]         , clock:numt, target:voidt  , filter:(val, n) => val[0] > n})
        sample({source:[a,b] as const, clock:anyt, target:lNumStr, filter:(val) => val[0] > 0   })
        sample({source:[a,b] as const, clock:anyt, target:anyt   , filter:(val) => val[0] > 0   })
        sample({source:[a,b] as const, clock:anyt, target:voidt  , filter:(val) => val[0] > 0   })
        sample({source:[a,b] as const, clock:numt, target:lNumStr, filter:(val, n) => val[0] > n})
        sample({source:[a,b] as const, clock:numt, target:anyt   , filter:(val, n) => val[0] > n})
        sample({source:[a,b] as const, clock:numt, target:voidt  , filter:(val, n) => val[0] > n})
        sample({source:[a,b]         , clock:anyt, target:lNumStr, filter:$filter               })
        sample({source:[a,b]         , clock:anyt, target:anyt   , filter:$filter               })
        sample({source:[a,b]         , clock:anyt, target:voidt  , filter:$filter               })
        sample({source:[a,b] as const, clock:anyt, target:lNumStr, filter:$filter               })
        sample({source:[a,b] as const, clock:anyt, target:anyt   , filter:$filter               })
        sample({source:[a,b] as const, clock:anyt, target:voidt  , filter:$filter               })
        sample({source:[a]           , clock:anyt, target:lNum   , filter:(val) => val[0] > 0   })
        sample({source:[a]           , clock:numt, target:lNum   , filter:(val, n) => val[0] > n})
        sample({source:[a] as const  , clock:anyt, target:lNum   , filter:(val) => val[0] > 0   })
        sample({source:[a] as const  , clock:numt, target:lNum   , filter:(val, n) => val[0] > n})
        sample({source:[a]           , clock:anyt, target:lNum   , filter:$filter               })
        sample({source:[a] as const  , clock:anyt, target:lNum   , filter:$filter               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('tuple + clock -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: [a,b],
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b] as const,
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a,b] as const,
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a],
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a] as const,
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a],
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a] as const,
          clock: anyt,
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        "
      `)
    })
  })
  describe('tuple + [clock] -> unit same', () => {
    test('tuple + [clock] -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:[a,b]         , clock:[anyt]     , target:lNumStr, filter:(val) => val[0] > 0   })
        sample({source:[a,b]         , clock:[anyt]     , target:anyt   , filter:(val) => val[0] > 0   })
        sample({source:[a,b]         , clock:[anyt]     , target:voidt  , filter:(val) => val[0] > 0   })
        sample({source:[a,b]         , clock:[numt,$num], target:lNumStr, filter:(val, n) => val[0] > n})
        sample({source:[a,b]         , clock:[numt,$num], target:anyt   , filter:(val, n) => val[0] > n})
        sample({source:[a,b]         , clock:[numt,$num], target:voidt  , filter:(val, n) => val[0] > n})
        sample({source:[a,b] as const, clock:[anyt]     , target:lNumStr, filter:(val) => val[0] > 0   })
        sample({source:[a,b] as const, clock:[anyt]     , target:anyt   , filter:(val) => val[0] > 0   })
        sample({source:[a,b] as const, clock:[anyt]     , target:voidt  , filter:(val) => val[0] > 0   })
        sample({source:[a,b] as const, clock:[numt,$num], target:lNumStr, filter:(val, n) => val[0] > n})
        sample({source:[a,b] as const, clock:[numt,$num], target:anyt   , filter:(val, n) => val[0] > n})
        sample({source:[a,b] as const, clock:[numt,$num], target:voidt  , filter:(val, n) => val[0] > n})
        sample({source:[a,b]         , clock:[anyt]     , target:lNumStr, filter:$filter               })
        sample({source:[a,b]         , clock:[anyt]     , target:anyt   , filter:$filter               })
        sample({source:[a,b]         , clock:[anyt]     , target:voidt  , filter:$filter               })
        sample({source:[a,b] as const, clock:[anyt]     , target:lNumStr, filter:$filter               })
        sample({source:[a,b] as const, clock:[anyt]     , target:anyt   , filter:$filter               })
        sample({source:[a,b] as const, clock:[anyt]     , target:voidt  , filter:$filter               })
        sample({source:[a]           , clock:[anyt]     , target:lNum   , filter:(val) => val[0] > 0   })
        sample({source:[a]           , clock:[numt,$num], target:lNum   , filter:(val, n) => val[0] > n})
        sample({source:[a] as const  , clock:[anyt]     , target:lNum   , filter:(val) => val[0] > 0   })
        sample({source:[a] as const  , clock:[numt,$num], target:lNum   , filter:(val, n) => val[0] > n})
        sample({source:[a]           , clock:[anyt]     , target:lNum   , filter:$filter               })
        sample({source:[a] as const  , clock:[anyt]     , target:lNum   , filter:$filter               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('tuple + [clock] -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: [a,b],
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b] as const,
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a,b],
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a,b] as const,
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a],
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a] as const,
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: (val) => val[0] > 0,
        })
        sample({
          source: [a],
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
        sample({
          source: [a] as const,
          clock: [anyt],
          //@ts-expect-error
          target: lNumNum,
          filter: $filter,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        "
      `)
    })
  })
})
describe('no source', () => {
  describe('clock -> unit same', () => {
    test('clock -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:nullableAB, target:$ab, filter:Boolean                         })
        sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('clock -> unit same (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk) => clk !== null           })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk: AB | null) => clk !== null})
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:$filter                         })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: $filter,
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: Boolean,
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type 'AB'.
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        Unmarked error at test line 20 'clock: nullableAB,'
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        'clk' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        'clk' is possibly 'null'.
        Unmarked error at test line 33 'clock: nullableAB,'
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        lack of expected error at test line 36 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        lack of expected error at test line 43 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type 'AB'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('clock, fn -> unit same', () => {
    test('clock, fn -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:nullableAB, target:$ab, filter:(clk) => clk !== null           , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:nullableAB, target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:nullableAB, target:$ab, filter:(clk) => clk !== null           , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:nullableAB, target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:nullableAB, target:$ab, filter:$filter                         , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:nullableAB, target:$ab, filter:$filter                         , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:nullableAB, target:$ab, filter:Boolean                         , fn:(val) => ({a:val.a, b:val.b})                   })
        sample({clock:nullableAB, target:$ab, filter:Boolean                         , fn:(val: AB) => ({a:val.a, b:val.b})               })
        sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.a, b:val.b})                   })
        sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val: AB) => ({a:val.a, b:val.b})               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 11 'sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.a, b:val.b})                   })'
        'val' is possibly 'null'.
        Unmarked error at test line 11 'sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.a, b:val.b})                   })'
        'val' is possibly 'null'.
        "
      `)
    })
    test('clock, fn -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk) => clk !== null           , fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk) => clk !== null           , fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:$filter                         , fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:$filter                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val) => ({a:val.a, b:val.b}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val: AB) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:Boolean                         , fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:Boolean                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val) => ({a:val.a, b:val.b}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val: AB) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val: ABN) => ({a:val.a, b:val.b})              })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val: ABN) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:(clk): clk is AB => clk !== null, fn:() => ({a:0, b:1})                              })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: () => ({a:0, b:1}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:Boolean                         , fn:(val: ABN) => ({a:val.a, b:val.b})              })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val: ABN) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, target:$ab, filter:Boolean                         , fn:() => ({a:0, b:1})                              })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: () => ({a:0, b:1}),
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'clk' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'clk' is possibly 'null'.
        Unmarked error at test line 32 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 39 'sample({'
        lack of expected error at test line 36 'filter: (clk: AB) => clk.a > 0,'
        Argument of type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 42 'target: strt,'
        lack of expected error at test line 44 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Unmarked error at test line 51 'filter: (clk) => clk !== null,'
        Parameter 'clk' implicitly has an 'any' type.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'clk' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Parameter 'clk' implicitly has an 'any' type.
        Unmarked error at test line 76 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((val: AB | null) => { ...; }) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: bool...'.
          Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { a: number; b: string; }) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }]'.
            Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { a: number; b: string; }) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }'.
              Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { a: number; b: string; }) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 80 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        lack of expected error at test line 88 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 98 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 98 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 98 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 107 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 107 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 107 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        'clk' is possibly 'null'.
        Unmarked error at test line 114 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 114 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 114 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        'clk' is possibly 'null'.
        Unmarked error at test line 122 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 122 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 122 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 124 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 129 'fn: (val) => ({a:val.c, b:val.b}),'
        lack of expected error at test line 128 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Unmarked error at test line 129 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 129 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 131 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 137 'fn: (val) => ({a:val.c, b:val.b}),'
        lack of expected error at test line 134 'target: strt,'
        lack of expected error at test line 136 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Unmarked error at test line 137 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 137 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 141 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 146 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 144 'target: strt,'
        Property 'c' does not exist on type 'ABN'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 155 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 153 'target: strt,'
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 155 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 157 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        'clk' is possibly 'null'.
        Unmarked error at test line 162 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 164 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        lack of expected error at test line 167 'target: strt,'
        'clk' is possibly 'null'.
        Unmarked error at test line 170 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 172 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }]'.
            Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }'.
              Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 177 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 176 'filter: (clk: AB) => clk.a > 0,'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 179 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }]'.
            Type '{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }'.
              Type '{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 185 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 182 'target: strt,'
        lack of expected error at test line 184 'filter: (clk: AB) => clk.a > 0,'
        Property 'c' does not exist on type 'ABN'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 208 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 208 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 208 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 217 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 215 'target: strt,'
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 217 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Property 'c' does not exist on type 'AB'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 240 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
                Types of property 'b' are incompatible.
                  Type 'string' is not assignable to type 'number'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 249 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 247 'target: strt,'
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Unmarked error at test line 249 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Unmarked error at test line 256 'fn: (val) => ({a:val.a, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 256 'fn: (val) => ({a:val.a, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 259 'clock: nullableAB,'
        Argument of type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: AB) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }] | [error: ...]'.
          Type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: AB) => { a: number; b: string; }; }]' is not assignable to type '[error: { target: Unit<{ a: number; b: string; }>; error: \\"fn result should extend target type\\"; }]'.
            Object literal may only specify known properties, and 'clock' does not exist in type '{ target: Unit<{ a: number; b: string; }>; error: \\"fn result should extend target type\\"; }'.
        lack of expected error at test line 261 'target: strt,'
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 272 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 272 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 272 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { a: number; b: number; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { a: number; b: number; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { a: number; b: number; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 276 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { a: number; b: number; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
          Type '[{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { a: number; b: number; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { a: number; b: number; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        lack of expected error at test line 279 'target: strt,'
        Type 'StoreWritable<AB>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Parameter 'clk' implicitly has an 'any' type.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: number; }'.
        Unmarked error at test line 289 'filter: (clk): clk is AB => clk !== null,'
        Parameter 'clk' implicitly has an 'any' type.
        Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: number; b: number; })'.
          Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Unmarked error at test line 299 'fn: (val: ABN) => ({a:val.a, b:val.b}),'
        lack of expected error at test line 297 'target: strt,'
        Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: number; b: number; })'.
          Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Type 'StoreWritable<AB>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: number; }'.
        "
      `)
    })
  })
  describe('[clock] -> unit same', () => {
    test('[clock] -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:[ab,nullableAB], target:$ab, filter:Boolean                         })
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('[clock] -> unit same (should fail)', () => {
      //prettier-ignore
      {
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk) => clk !== null           })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk: AB | null) => clk !== null})
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:$filter                         })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: $filter,
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: Boolean,
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        Unmarked error at test line 20 'clock: [ab,nullableAB],'
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        'clk' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        'clk' is possibly 'null'.
        Unmarked error at test line 33 'clock: [ab,nullableAB],'
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        lack of expected error at test line 36 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        lack of expected error at test line 43 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB | null>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<AB>'.
        "
      `)
    })
  })
  describe('[clock], fn -> unit same', () => {
    test('[clock], fn -> unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk) => clk !== null           , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk) => clk !== null           , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:[ab,nullableAB], target:$ab, filter:$filter                         , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:[ab,nullableAB], target:$ab, filter:$filter                         , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:[ab,nullableAB], target:$ab, filter:Boolean                         , fn:(val) => ({a:val.a, b:val.b})                   })
        sample({clock:[ab,nullableAB], target:$ab, filter:Boolean                         , fn:(val: AB) => ({a:val.a, b:val.b})               })
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.a, b:val.b})                   })
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val: AB) => ({a:val.a, b:val.b})               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 11 'sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.a, b:val.b})                   })'
        'val' is possibly 'null'.
        Unmarked error at test line 11 'sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.a, b:val.b})                   })'
        'val' is possibly 'null'.
        "
      `)
    })
    test('[clock], fn -> unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk) => clk !== null           , fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk) => clk !== null           , fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk) => clk !== null,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk: AB | null) => clk !== null, fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk: AB | null) => clk !== null,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          target: $ab,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:$filter                         , fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:$filter                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: $filter,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val) => ({a:val.a, b:val.b}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val: AB) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:Boolean                         , fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:Boolean                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val) => ({a:val.a, b:val.b}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val: AB) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null, fn:(val: ABN) => ({a:val.a, b:val.b})              })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: (val: ABN) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:(clk): clk is AB => clk !== null, fn:() => ({a:0, b:1})                              })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: (clk): clk is AB => clk !== null,
          fn: () => ({a:0, b:1}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:Boolean                         , fn:(val: ABN) => ({a:val.a, b:val.b})              })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: (val: ABN) => ({a:val.a, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], target:$ab, filter:Boolean                         , fn:() => ({a:0, b:1})                              })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          target: strt,
          filter: Boolean,
          fn: () => ({a:0, b:1}),
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'clk' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'clk' is possibly 'null'.
        Unmarked error at test line 32 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 39 'sample({'
        lack of expected error at test line 36 'filter: (clk: AB) => clk.a > 0,'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 42 'target: strt,'
        lack of expected error at test line 44 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Unmarked error at test line 51 'filter: (clk) => clk !== null,'
        Parameter 'clk' implicitly has an 'any' type.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'clk' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Parameter 'clk' implicitly has an 'any' type.
        Unmarked error at test line 76 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((val: AB | null) => { ...; }) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boo...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { ...; }) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { ...; }) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }'.
              Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { ...; }) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 80 'filter: (clk: AB) => clk.a > 0,'
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        lack of expected error at test line 88 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 98 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 98 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 98 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 107 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 107 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 107 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        'clk' is possibly 'null'.
        Unmarked error at test line 114 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 114 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 114 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        'clk' is possibly 'null'.
        Unmarked error at test line 122 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 122 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 122 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 124 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 129 'fn: (val) => ({a:val.c, b:val.b}),'
        lack of expected error at test line 128 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Unmarked error at test line 129 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 129 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 131 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 137 'fn: (val) => ({a:val.c, b:val.b}),'
        lack of expected error at test line 134 'target: strt,'
        lack of expected error at test line 136 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Unmarked error at test line 137 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 137 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 141 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 146 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 144 'target: strt,'
        Property 'c' does not exist on type 'ABN'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 155 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 153 'target: strt,'
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 155 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 157 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        'clk' is possibly 'null'.
        Unmarked error at test line 162 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 164 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        lack of expected error at test line 167 'target: strt,'
        'clk' is possibly 'null'.
        Unmarked error at test line 170 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 172 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }'.
              Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 177 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 176 'filter: (clk: AB) => clk.a > 0,'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 179 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; } & { ...; }'.
              Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB) => boolean; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 185 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 182 'target: strt,'
        lack of expected error at test line 184 'filter: (clk: AB) => clk.a > 0,'
        Property 'c' does not exist on type 'ABN'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 208 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 208 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 208 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 217 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 215 'target: strt,'
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 217 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Property 'c' does not exist on type 'AB'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 240 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 249 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 247 'target: strt,'
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Unmarked error at test line 249 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: string; }'.
        Unmarked error at test line 256 'fn: (val) => ({a:val.a, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 256 'fn: (val) => ({a:val.a, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 259 'clock: [ab,nullableAB],'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: AB) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }] | [error: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: AB) => { ...; }; }]' is not assignable to type '[error: { target: Unit<{ a: number; b: string; }>; error: \\"fn result should extend target type\\"; }]'.
            Object literal may only specify known properties, and 'clock' does not exist in type '{ target: Unit<{ a: number; b: string; }>; error: \\"fn result should extend target type\\"; }'.
        lack of expected error at test line 261 'target: strt,'
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: any; b: string; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: any; b: string; }'.
        Unmarked error at test line 272 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 272 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 272 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: StoreWritable<AB>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Unmarked error at test line 276 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: EventCallable<...>; greedy?: boolean ...'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { ...; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; target: EventCallable<number>; filter: (clk: AB | null) => clk is AB; fn: (val: ABN) => { ...; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: EventCallable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        lack of expected error at test line 279 'target: strt,'
        Type 'StoreWritable<AB>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Parameter 'clk' implicitly has an 'any' type.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: number; }'.
        Unmarked error at test line 289 'filter: (clk): clk is AB => clk !== null,'
        Parameter 'clk' implicitly has an 'any' type.
        Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: number; b: number; })'.
          Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Unmarked error at test line 299 'fn: (val: ABN) => ({a:val.a, b:val.b}),'
        lack of expected error at test line 297 'target: strt,'
        Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: number; b: number; })'.
          Type '(val: ABN) => { a: number; b: number; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Type 'StoreWritable<AB>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<{ a: number; b: number; }>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type '{ a: number; b: number; }'.
        "
      `)
    })
  })
  describe('clock -> new unit same', () => {
    test('clock -> new unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:nullableAB, filter:(clk) => clk !== null           })
        sample({clock:nullableAB, filter:(clk: AB | null) => clk !== null})
        sample({clock:nullableAB, filter:$filter                         })
        sample({clock:nullableAB, filter:Boolean                         })
        sample({clock:nullableAB, filter:(clk): clk is AB => clk !== null})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('clock -> new unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        'clk' is possibly 'null'.
        Unmarked error at test line 8 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => clk is AB | null; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }] | [config: ...]'.
          Type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }]'.
            Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }'.
              Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 11 'filter: (clk: AB) => clk.a > 0,'
        "
      `)
    })
  })
  describe('clock, fn -> new unit same', () => {
    test('clock, fn -> new unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:nullableAB, filter:(clk) => clk !== null           , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:nullableAB, filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:nullableAB, filter:(clk) => clk !== null           , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:nullableAB, filter:(clk: AB | null) => clk !== null, fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:nullableAB, filter:$filter                         , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:nullableAB, filter:$filter                         , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:nullableAB, filter:Boolean                         , fn:(val) => ({a:val.a, b:val.b})                   })
        sample({clock:nullableAB, filter:Boolean                         , fn:(val: AB) => ({a:val.a, b:val.b})               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('clock, fn -> new unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, filter:(clk) => clk !== null           , fn:(val) => ({a:val.c, b:val.b})                   })
        //@ts-expect-error
        sample({clock:nullableAB, filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, filter:(clk) => clk !== null           , fn:(val: ABN) => ({a:val.c, b:''})                 })
        //@ts-expect-error
        sample({clock:nullableAB, filter:(clk: AB | null) => clk !== null, fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: nullableAB,
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        //@ts-expect-error
        sample({clock:nullableAB, filter:$filter                         , fn:(val) => ({a:val.c, b:val.b})                   })
        //@ts-expect-error
        sample({clock:nullableAB, filter:$filter                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
        //@ts-expect-error
        sample({clock:nullableAB, filter:Boolean                         , fn:(val) => ({a:val.c, b:val.b})                   })
        //@ts-expect-error
        sample({clock:nullableAB, filter:Boolean                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        'clk' is possibly 'null'.
        Unmarked error at test line 9 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 12 'filter: (clk: AB) => clk.a > 0,'
        'clk' is possibly 'null'.
        Unmarked error at test line 21 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((val: AB | null) => { a: number; b: string; }) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }] | [con...'.
          Type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { a: number; b: string; }) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }]'.
            Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { a: number; b: string; }) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }'.
              Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { a: number; b: string; }) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 24 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        'clk' is possibly 'null'.
        Unmarked error at test line 35 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 35 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 35 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 37 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 41 'fn: (val) => ({a:val.c, b:val.b}),'
        lack of expected error at test line 40 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Unmarked error at test line 41 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 41 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Argument of type '[{ clock: EventCallable<AB | null>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: EventCallable<AB | null>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 47 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: EventCallable<AB | null>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: EventCallable<AB | null>; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        'clk' is possibly 'null'.
        Unmarked error at test line 51 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 53 'sample({'
        Argument of type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }] | [config: ...]'.
          Type '[{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }]'.
            Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }'.
              Type '{ clock: EventCallable<AB | null>; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 57 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 56 'filter: (clk: AB) => clk.a > 0,'
        Property 'c' does not exist on type 'ABN'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Property 'c' does not exist on type 'AB'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        "
      `)
    })
  })
  describe('[clock] -> new unit same', () => {
    test('[clock] -> new unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:[ab,nullableAB], filter:(clk) => clk !== null           })
        sample({clock:[ab,nullableAB], filter:(clk: AB | null) => clk !== null})
        sample({clock:[ab,nullableAB], filter:$filter                         })
        sample({clock:[ab,nullableAB], filter:Boolean                         })
        sample({clock:[ab,nullableAB], filter:(clk): clk is AB => clk !== null})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('[clock] -> new unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        'clk' is possibly 'null'.
        Unmarked error at test line 8 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter: (clk: AB | null) => clk is AB | null; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }] | [config: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }'.
              Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 11 'filter: (clk: AB) => clk.a > 0,'
        "
      `)
    })
  })
  describe('[clock], fn -> new unit same', () => {
    test('[clock], fn -> new unit same (should pass)', () => {
      //prettier-ignore
      {
        sample({clock:[ab,nullableAB], filter:(clk) => clk !== null           , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:[ab,nullableAB], filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:[ab,nullableAB], filter:(clk) => clk !== null           , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:[ab,nullableAB], filter:(clk: AB | null) => clk !== null, fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:[ab,nullableAB], filter:$filter                         , fn:(val) => ({a:1, b: val ? val.b : ''})           })
        sample({clock:[ab,nullableAB], filter:$filter                         , fn:(val: AB | null) => ({a:1, b: val ? val.b : ''})})
        sample({clock:[ab,nullableAB], filter:Boolean                         , fn:(val) => ({a:val.a, b:val.b})                   })
        sample({clock:[ab,nullableAB], filter:Boolean                         , fn:(val: AB) => ({a:val.a, b:val.b})               })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('[clock], fn -> new unit same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: AB | null) => ({a:1, b: val ? val.b : ''}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:(clk) => clk !== null           , fn:(val) => ({a:val.c, b:val.b})                   })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:(clk: AB | null) => clk !== null, fn:(val) => ({a:val.c, b:val.b})                   })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val) => ({a:val.c, b:val.b}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:(clk) => clk !== null           , fn:(val: ABN) => ({a:val.c, b:''})                 })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:(clk: AB | null) => clk !== null, fn:(val: ABN) => ({a:val.c, b:''})                 })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        sample({
          clock: [ab,nullableAB],
          //@ts-expect-error
          filter: (clk: AB) => clk.a > 0,
          fn: (val: ABN) => ({a:val.c, b:''}),
        })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:$filter                         , fn:(val) => ({a:val.c, b:val.b})                   })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:$filter                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:Boolean                         , fn:(val) => ({a:val.c, b:val.b})                   })
        //@ts-expect-error
        sample({clock:[ab,nullableAB], filter:Boolean                         , fn:(val: ABN) => ({a:val.c, b:''})                 })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        'clk' is possibly 'null'.
        Unmarked error at test line 9 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; ... 4 more ...; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 12 'filter: (clk: AB) => clk.a > 0,'
        'clk' is possibly 'null'.
        Unmarked error at test line 21 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; ... 4 more ...; name?: string | undefined; } & { ...; }] | [config: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { ...; }) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { ...; }) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }'.
              Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((val: AB | null) => { ...; }) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        lack of expected error at test line 24 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        'clk' is possibly 'null'.
        Unmarked error at test line 35 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 35 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 35 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Unmarked error at test line 37 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; ... 4 more ...; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: AB | null) => { a: any; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'filter' are incompatible.
                Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                  Types of parameters 'clk' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'AB'.
                      Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 41 'fn: (val) => ({a:val.c, b:val.b}),'
        lack of expected error at test line 40 'filter: (clk: AB) => clk.a > 0,'
        'val' is possibly 'null'.
        Unmarked error at test line 41 'fn: (val) => ({a:val.c, b:val.b}),'
        Property 'c' does not exist on type 'AB'.
        Unmarked error at test line 41 'fn: (val) => ({a:val.c, b:val.b}),'
        'val' is possibly 'null'.
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; ... 4 more ...; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 47 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; ... 4 more ...; name?: string | undefined; }] | [config: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB | null) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              Types of property 'fn' are incompatible.
                Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
                  Types of parameters 'val' and 'clk' are incompatible.
                    Type 'AB | null' is not assignable to type 'ABN'.
                      Type 'null' is not assignable to type 'ABN'.
        'clk' is possibly 'null'.
        Unmarked error at test line 51 'fn: (val: ABN) => ({a:val.c, b:''}),'
        Property 'c' does not exist on type 'ABN'.
        Unmarked error at test line 53 'sample({'
        Argument of type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to parameter of type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; ... 4 more ...; name?: string | undefined; } & { ...; }] | [config: ...]'.
          Type '[{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }]' is not assignable to type '[config: { clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }]'.
            Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }'.
              Type '{ clock: [EventCallable<AB>, EventCallable<AB | null>]; filter: (clk: AB) => boolean; fn: (val: ABN) => { a: any; b: string; }; }' is not assignable to type '{ clock: readonly [EventCallable<AB>, EventCallable<AB | null>]; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
                Types of property 'filter' are incompatible.
                  Type '(clk: AB) => boolean' is not assignable to type '(clk: AB | null) => boolean'.
                    Types of parameters 'clk' and 'clk' are incompatible.
                      Type 'AB | null' is not assignable to type 'AB'.
                        Type 'null' is not assignable to type 'AB'.
        Unmarked error at test line 57 'fn: (val: ABN) => ({a:val.c, b:''}),'
        lack of expected error at test line 56 'filter: (clk: AB) => clk.a > 0,'
        Property 'c' does not exist on type 'ABN'.
        'val' is possibly 'null'.
        Property 'c' does not exist on type 'AB'.
        'val' is possibly 'null'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB | null) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB | null) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB | null' is not assignable to type 'ABN'.
                Type 'null' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        Property 'c' does not exist on type 'AB'.
        Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '((clk: AB) => any) & ((val: ABN) => { a: any; b: string; })'.
          Type '(val: ABN) => { a: any; b: string; }' is not assignable to type '(clk: AB) => any'.
            Types of parameters 'val' and 'clk' are incompatible.
              Type 'AB' is not assignable to type 'ABN'.
        Property 'c' does not exist on type 'ABN'.
        "
      `)
    })
  })
})
describe('bad filter', () => {
  test('not a function (should fail)', () => {
    //prettier-ignore
    {
      sample({
        clock: nullableAB,
        target: $ab,
        //@ts-expect-error
        filter: null,
      })
      sample({
        clock: nullableAB,
        target: $ab,
        //@ts-expect-error
        filter: null,
        fn: (val) => ({a:1, b: val ? val.b : ''}),
      })
      sample({
        clock: nullableAB,
        //@ts-expect-error
        filter: null,
      })
      sample({
        clock: nullableAB,
        //@ts-expect-error
        filter: null,
        fn: (val) => ({a:1, b: val ? val.b : ''}),
      })
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Unmarked error at test line 4 'clock: nullableAB,'
      Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
        Types of property '__' are incompatible.
          Type 'AB | null' is not assignable to type 'AB'.
            Type 'null' is not assignable to type 'AB'.
      Unmarked error at test line 9 'sample({'
      lack of expected error at test line 7 'filter: null,'
      Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: null; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
        Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: null; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
          Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: null; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
            Types of property 'filter' are incompatible.
              Type 'null' is not assignable to type '((clk: AB | null) => boolean) | undefined'.
      Unmarked error at test line 16 'sample({'
      lack of expected error at test line 13 'filter: null,'
      Argument of type '[{ clock: EventCallable<AB | null>; filter: null; }]' is not assignable to parameter of type '[config: never] | [config: never]'.
        Type '[{ clock: EventCallable<AB | null>; filter: null; }]' is not assignable to type '[config: never]'.
          Type '{ clock: EventCallable<AB | null>; filter: null; }' is not assignable to type 'never'.
            The intersection '{ clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }' was reduced to 'never' because property 'filter' has conflicting types in some constituents.
      Unmarked error at test line 21 'sample({'
      lack of expected error at test line 19 'filter: null,'
      Argument of type '[{ clock: EventCallable<AB | null>; filter: null; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }] | [config: ...]'.
        Type '[{ clock: EventCallable<AB | null>; filter: null; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
          Type '{ clock: EventCallable<AB | null>; filter: null; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
            Types of property 'filter' are incompatible.
              Type 'null' is not assignable to type '((clk: AB | null) => boolean) | undefined'.
      lack of expected error at test line 24 'filter: null,'
      "
    `)
  })
  test('bad return (should fail)', () => {
    //prettier-ignore
    {
      sample({
        clock: nullableAB,
        target: $ab,
        //@ts-expect-error
        filter: () => 1,
      })
      sample({
        clock: nullableAB,
        target: $ab,
        //@ts-expect-error
        filter: () => 1,
        fn: (val) => ({a:1, b: val ? val.b : ''}),
      })
      sample({
        clock: nullableAB,
        //@ts-expect-error
        filter: () => 1,
      })
      sample({
        clock: nullableAB,
        //@ts-expect-error
        filter: () => 1,
        fn: (val) => ({a:1, b: val ? val.b : ''}),
      })
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Unmarked error at test line 4 'clock: nullableAB,'
      Type 'EventCallable<AB | null>' is not assignable to type 'Unit<AB>'.
      Unmarked error at test line 9 'sample({'
      lack of expected error at test line 7 'filter: () => 1,'
      Argument of type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: () => number; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: (((clk: AB | null) => clk is AB | null) & ((clk: AB | null) => clk is AB | null)) | undefined; fn?: (((clk: AB | null) => any) & ((clk: AB | null) => any)) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean |...'.
        Type '[{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: () => number; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }]'.
          Type '{ clock: EventCallable<AB | null>; target: StoreWritable<AB>; filter: () => number; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target: StoreWritable<...>; greedy?: boolean | undefined; batch?: boolean | undefined; }'.
            The types returned by 'filter(...)' are incompatible between these types.
              Type 'number' is not assignable to type 'boolean'.
      Unmarked error at test line 16 'sample({'
      lack of expected error at test line 13 'filter: () => 1,'
      Argument of type '[{ clock: EventCallable<AB | null>; filter: () => number; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => clk is AB | null; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }] | [config: ...]'.
        Type '[{ clock: EventCallable<AB | null>; filter: () => number; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }]'.
          Type '{ clock: EventCallable<AB | null>; filter: () => number; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; } & { ...; }'.
            Type '{ clock: EventCallable<AB | null>; filter: () => number; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter: (clk: AB | null) => boolean; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
              The types returned by 'filter(...)' are incompatible between these types.
                Type 'number' is not assignable to type 'boolean'.
      Unmarked error at test line 21 'sample({'
      lack of expected error at test line 19 'filter: () => 1,'
      Argument of type '[{ clock: EventCallable<AB | null>; filter: () => number; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to parameter of type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => clk is AB | null) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }] | [config: ...]'.
        Type '[{ clock: EventCallable<AB | null>; filter: () => number; fn: (val: AB | null) => { a: number; b: string; }; }]' is not assignable to type '[config: { clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }]'.
          Type '{ clock: EventCallable<AB | null>; filter: () => number; fn: (val: AB | null) => { a: number; b: string; }; }' is not assignable to type '{ clock: EventCallable<AB | null>; source?: undefined; filter?: ((clk: AB | null) => boolean) | undefined; fn?: ((clk: AB | null) => any) | undefined; target?: undefined; greedy?: boolean | undefined; batch?: boolean | undefined; name?: string | undefined; }'.
            The types returned by 'filter(...)' are incompatible between these types.
              Type 'number' is not assignable to type 'boolean'.
      lack of expected error at test line 24 'filter: () => 1,'
      "
    `)
  })
})

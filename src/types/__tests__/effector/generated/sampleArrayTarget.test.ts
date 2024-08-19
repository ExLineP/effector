/* eslint-disable no-unused-vars */
import {createStore, createEvent, sample} from 'effector'
const typecheck = '{global}'
{
  const voidt = createEvent()
  const anyt = createEvent<any>()
  const str = createEvent<string>()
  const num = createEvent<number>()
  const numStr = createEvent<number | string>()
  const strBool = createEvent<string | boolean>()
  describe('no fn', () => {
    test('no fn (should pass)', () => {
      //prettier-ignore
      {
        sample({source:num, target:[num]           })
        sample({source:num, target:[voidt]         })
        sample({source:num, target:[anyt]          })
        sample({source:num, target:[numStr]        })
        sample({source:num, target:[num,voidt]     })
        sample({source:num, target:[anyt,num]      })
        sample({source:num, target:[num,numStr]    })
        sample({source:num, target:[anyt,voidt]    })
        sample({source:num, target:[numStr,voidt]  })
        sample({source:num, target:[anyt,numStr]   })
        sample({source:str, target:[voidt]         })
        sample({source:str, target:[str]           })
        sample({source:str, target:[anyt]          })
        sample({source:str, target:[strBool]       })
        sample({source:str, target:[numStr]        })
        sample({source:str, target:[anyt,voidt]    })
        sample({source:str, target:[strBool,voidt] })
        sample({source:str, target:[numStr,voidt]  })
        sample({source:str, target:[str,voidt]     })
        sample({source:str, target:[anyt,str]      })
        sample({source:str, target:[numStr,str]    })
        sample({source:str, target:[anyt,numStr]   })
        sample({source:str, target:[anyt,strBool]  })
        sample({source:str, target:[numStr,strBool]})
        sample({clock:num, target:[num]           })
        sample({clock:num, target:[voidt]         })
        sample({clock:num, target:[anyt]          })
        sample({clock:num, target:[numStr]        })
        sample({clock:num, target:[num,voidt]     })
        sample({clock:num, target:[anyt,num]      })
        sample({clock:num, target:[num,numStr]    })
        sample({clock:num, target:[anyt,voidt]    })
        sample({clock:num, target:[numStr,voidt]  })
        sample({clock:num, target:[anyt,numStr]   })
        sample({clock:str, target:[voidt]         })
        sample({clock:str, target:[str]           })
        sample({clock:str, target:[anyt]          })
        sample({clock:str, target:[strBool]       })
        sample({clock:str, target:[numStr]        })
        sample({clock:str, target:[anyt,voidt]    })
        sample({clock:str, target:[strBool,voidt] })
        sample({clock:str, target:[numStr,voidt]  })
        sample({clock:str, target:[str,voidt]     })
        sample({clock:str, target:[anyt,str]      })
        sample({clock:str, target:[numStr,str]    })
        sample({clock:str, target:[anyt,numStr]   })
        sample({clock:str, target:[anyt,strBool]  })
        sample({clock:str, target:[numStr,strBool]})
        sample({source:num, clock:num, target:[num]           })
        sample({source:num, clock:num, target:[voidt]         })
        sample({source:num, clock:num, target:[anyt]          })
        sample({source:num, clock:num, target:[numStr]        })
        sample({source:num, clock:num, target:[num,voidt]     })
        sample({source:num, clock:num, target:[anyt,num]      })
        sample({source:num, clock:num, target:[num,numStr]    })
        sample({source:num, clock:num, target:[anyt,voidt]    })
        sample({source:num, clock:num, target:[numStr,voidt]  })
        sample({source:num, clock:num, target:[anyt,numStr]   })
        sample({source:num, clock:str, target:[num]           })
        sample({source:num, clock:str, target:[voidt]         })
        sample({source:num, clock:str, target:[anyt]          })
        sample({source:num, clock:str, target:[numStr]        })
        sample({source:num, clock:str, target:[num,voidt]     })
        sample({source:num, clock:str, target:[anyt,num]      })
        sample({source:num, clock:str, target:[num,numStr]    })
        sample({source:num, clock:str, target:[anyt,voidt]    })
        sample({source:num, clock:str, target:[numStr,voidt]  })
        sample({source:num, clock:str, target:[anyt,numStr]   })
        sample({source:str, clock:num, target:[voidt]         })
        sample({source:str, clock:num, target:[str]           })
        sample({source:str, clock:num, target:[anyt]          })
        sample({source:str, clock:num, target:[strBool]       })
        sample({source:str, clock:num, target:[numStr]        })
        sample({source:str, clock:num, target:[anyt,voidt]    })
        sample({source:str, clock:num, target:[strBool,voidt] })
        sample({source:str, clock:num, target:[numStr,voidt]  })
        sample({source:str, clock:num, target:[str,voidt]     })
        sample({source:str, clock:num, target:[anyt,str]      })
        sample({source:str, clock:num, target:[numStr,str]    })
        sample({source:str, clock:num, target:[anyt,numStr]   })
        sample({source:str, clock:num, target:[anyt,strBool]  })
        sample({source:str, clock:num, target:[numStr,strBool]})
        sample({source:str, clock:str, target:[voidt]         })
        sample({source:str, clock:str, target:[str]           })
        sample({source:str, clock:str, target:[anyt]          })
        sample({source:str, clock:str, target:[strBool]       })
        sample({source:str, clock:str, target:[numStr]        })
        sample({source:str, clock:str, target:[anyt,voidt]    })
        sample({source:str, clock:str, target:[strBool,voidt] })
        sample({source:str, clock:str, target:[numStr,voidt]  })
        sample({source:str, clock:str, target:[str,voidt]     })
        sample({source:str, clock:str, target:[anyt,str]      })
        sample({source:str, clock:str, target:[numStr,str]    })
        sample({source:str, clock:str, target:[anyt,numStr]   })
        sample({source:str, clock:str, target:[anyt,strBool]  })
        sample({source:str, clock:str, target:[numStr,strBool]})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('no fn (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: num,
          target: [
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
        })
        sample({
          source: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
          ],
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
        })
        sample({
          source: str,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            str,
          ],
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          clock: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          clock: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
        })
        sample({
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
          ],
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
        })
        sample({
          clock: str,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: num,
          clock: str,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
          ],
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
        })
        sample({
          source: str,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
          ],
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
        })
        sample({
          source: str,
          clock: str,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'string | boolean' is not assignable to type 'number'.
              Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 38 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type 'number'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 46 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 60 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
          Types of property '__' are incompatible.
            Type 'string | number' is not assignable to type 'number'.
              Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 76 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 93 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'void' is not assignable to type 'string'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 117 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'string | boolean' is not assignable to type 'string'.
              Type 'boolean' is not assignable to type 'string'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 125 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
          Types of property '__' are incompatible.
            Type 'string | number' is not assignable to type 'string'.
              Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 129 'clock: num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: number; targetType: string; }]; }'.
        Unmarked error at test line 136 'clock: num,'
        lack of expected error at test line 132 'str,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: number; targetType: string | boolean; }]; }'.
        Unmarked error at test line 143 'clock: num,'
        lack of expected error at test line 139 'strBool,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [EventCallable<number>, { clockType: number; targetType: string; }]; }'.
        Unmarked error at test line 151 'clock: num,'
        lack of expected error at test line 147 'str,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [EventCallable<number>, { clockType: number; targetType: string | boolean; }]; }'.
        Unmarked error at test line 159 'clock: num,'
        lack of expected error at test line 155 'strBool,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: number; targetType: string | boolean; }, EventCallable<void>]; }'.
        Unmarked error at test line 167 'clock: num,'
        lack of expected error at test line 162 'strBool,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: number; targetType: string; }, EventCallable<void>]; }'.
        Unmarked error at test line 175 'clock: num,'
        lack of expected error at test line 170 'str,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [EventCallable<any>, { clockType: number; targetType: string; }]; }'.
        Unmarked error at test line 183 'clock: num,'
        lack of expected error at test line 179 'str,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [EventCallable<string | number>, { clockType: number; targetType: string; }]; }'.
        Unmarked error at test line 191 'clock: num,'
        lack of expected error at test line 187 'str,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [EventCallable<any>, { clockType: number; targetType: string | boolean; }]; }'.
        Unmarked error at test line 199 'clock: num,'
        lack of expected error at test line 195 'strBool,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [EventCallable<string | number>, { clockType: number; targetType: string | boolean; }]; }'.
        Unmarked error at test line 207 'clock: str,'
        lack of expected error at test line 203 'strBool,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: string; targetType: number; }]; }'.
        Unmarked error at test line 214 'clock: str,'
        lack of expected error at test line 210 'num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: string; targetType: number; }, EventCallable<void>]; }'.
        Unmarked error at test line 222 'clock: str,'
        lack of expected error at test line 217 'num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: string; targetType: number; }, EventCallable<string>]; }'.
        Unmarked error at test line 230 'clock: str,'
        lack of expected error at test line 225 'num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [EventCallable<any>, { clockType: string; targetType: number; }]; }'.
        Unmarked error at test line 238 'clock: str,'
        lack of expected error at test line 234 'num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: string; targetType: number; }, EventCallable<string | boolean>]; }'.
        Unmarked error at test line 246 'clock: str,'
        lack of expected error at test line 241 'num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ error: \\"clock should extend target type\\"; targets: readonly [{ clockType: string; targetType: number; }, EventCallable<string | number>]; }'.
        lack of expected error at test line 249 'num,'
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 293 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 302 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 318 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 336 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 381 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 390 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 406 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 424 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 443 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 470 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 479 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 496 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 523 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 532 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        "
      `)
    })
  })
  describe('untyped fn', () => {
    test('untyped fn (should pass)', () => {
      //prettier-ignore
      {
        sample({source:num, target:[num]           , fn:(src) => src + 1      })
        sample({source:num, target:[voidt]         , fn:(src) => src + 1      })
        sample({source:num, target:[anyt]          , fn:(src) => src + 1      })
        sample({source:num, target:[numStr]        , fn:(src) => src + 1      })
        sample({source:num, target:[num,voidt]     , fn:(src) => src + 1      })
        sample({source:num, target:[anyt,num]      , fn:(src) => src + 1      })
        sample({source:num, target:[num,numStr]    , fn:(src) => src + 1      })
        sample({source:num, target:[anyt,voidt]    , fn:(src) => src + 1      })
        sample({source:num, target:[numStr,voidt]  , fn:(src) => src + 1      })
        sample({source:num, target:[anyt,numStr]   , fn:(src) => src + 1      })
        sample({source:str, target:[voidt]         , fn:(src) => src + 1      })
        sample({source:str, target:[str]           , fn:(src) => src + 1      })
        sample({source:str, target:[anyt]          , fn:(src) => src + 1      })
        sample({source:str, target:[strBool]       , fn:(src) => src + 1      })
        sample({source:str, target:[numStr]        , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,voidt]    , fn:(src) => src + 1      })
        sample({source:str, target:[strBool,voidt] , fn:(src) => src + 1      })
        sample({source:str, target:[numStr,voidt]  , fn:(src) => src + 1      })
        sample({source:str, target:[str,voidt]     , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,str]      , fn:(src) => src + 1      })
        sample({source:str, target:[numStr,str]    , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,numStr]   , fn:(src) => src + 1      })
        sample({source:str, target:[anyt,strBool]  , fn:(src) => src + 1      })
        sample({source:str, target:[numStr,strBool], fn:(src) => src + 1      })
        sample({clock:num, target:[num]           , fn:(clk) => clk + 1      })
        sample({clock:num, target:[voidt]         , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt]          , fn:(clk) => clk + 1      })
        sample({clock:num, target:[numStr]        , fn:(clk) => clk + 1      })
        sample({clock:num, target:[num,voidt]     , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt,num]      , fn:(clk) => clk + 1      })
        sample({clock:num, target:[num,numStr]    , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt,voidt]    , fn:(clk) => clk + 1      })
        sample({clock:num, target:[numStr,voidt]  , fn:(clk) => clk + 1      })
        sample({clock:num, target:[anyt,numStr]   , fn:(clk) => clk + 1      })
        sample({clock:str, target:[voidt]         , fn:(clk) => clk + 1      })
        sample({clock:str, target:[str]           , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt]          , fn:(clk) => clk + 1      })
        sample({clock:str, target:[strBool]       , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr]        , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,voidt]    , fn:(clk) => clk + 1      })
        sample({clock:str, target:[strBool,voidt] , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr,voidt]  , fn:(clk) => clk + 1      })
        sample({clock:str, target:[str,voidt]     , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,str]      , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr,str]    , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,numStr]   , fn:(clk) => clk + 1      })
        sample({clock:str, target:[anyt,strBool]  , fn:(clk) => clk + 1      })
        sample({clock:str, target:[numStr,strBool], fn:(clk) => clk + 1      })
        sample({source:num, clock:num, target:[num]           , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[num,voidt]     , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt,num]      , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[num,numStr]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:num, clock:num, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[str]           , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[strBool]       , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[strBool,voidt] , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[str,voidt]     , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,str]      , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr,str]    , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[anyt,strBool]  , fn:(src,clk) => src + clk})
        sample({source:num, clock:str, target:[numStr,strBool], fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[str]           , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[strBool]       , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[strBool,voidt] , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[str,voidt]     , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,str]      , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr,str]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[anyt,strBool]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:num, target:[numStr,strBool], fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[voidt]         , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[str]           , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt]          , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[strBool]       , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr]        , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,voidt]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[strBool,voidt] , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr,voidt]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[str,voidt]     , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,str]      , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr,str]    , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,numStr]   , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[anyt,strBool]  , fn:(src,clk) => src + clk})
        sample({source:str, clock:str, target:[numStr,strBool], fn:(src,clk) => src + clk})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('untyped fn (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: num,
          target: [
            //@ts-expect-error
            str,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: str,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
          fn: (src) => src + 1,
        })
        sample({
          source: str,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
          fn: (src) => src + 1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            str,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: str,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          clock: str,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
          fn: (clk) => clk + 1,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            str,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            num,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: str,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: num,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: num,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            voidt,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            str,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: str,
          target: [
            anyt,
            //@ts-expect-error
            num,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            strBool,
          ],
          fn: (src,clk) => src + clk,
        })
        sample({
          source: str,
          clock: str,
          target: [
            //@ts-expect-error
            num,
            numStr,
          ],
          fn: (src,clk) => src + clk,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 9 'fn: (src) => src + 1,'
        lack of expected error at test line 7 'str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 17 'fn: (src) => src + 1,'
        lack of expected error at test line 15 'strBool,'
        Type 'number' is not assignable to type 'string | boolean'.
        Unmarked error at test line 26 'fn: (src) => src + 1,'
        lack of expected error at test line 24 'str,'
        Type 'number' is not assignable to type 'string | EventCallable<number>'.
        Unmarked error at test line 35 'fn: (src) => src + 1,'
        lack of expected error at test line 33 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | EventCallable<number>'.
        Unmarked error at test line 44 'fn: (src) => src + 1,'
        lack of expected error at test line 41 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | void'.
        Unmarked error at test line 53 'fn: (src) => src + 1,'
        lack of expected error at test line 50 'str,'
        Type 'number' is not assignable to type 'string | void'.
        Unmarked error at test line 56 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 71 'fn: (src) => src + 1,'
        lack of expected error at test line 60 'str,'
        lack of expected error at test line 69 'str,'
        Type 'number' is not assignable to type 'string | EventCallable<string | number>'.
        Unmarked error at test line 74 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 89 'fn: (src) => src + 1,'
        lack of expected error at test line 78 'strBool,'
        lack of expected error at test line 87 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | EventCallable<string | number>'.
        Unmarked error at test line 97 'fn: (src) => src + 1,'
        lack of expected error at test line 95 'num,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 106 'fn: (src) => src + 1,'
        lack of expected error at test line 103 'num,'
        Type 'string' is not assignable to type 'number | void'.
        Unmarked error at test line 115 'fn: (src) => src + 1,'
        lack of expected error at test line 112 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string>'.
        Unmarked error at test line 118 'source: str,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: string) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 133 'fn: (src) => src + 1,'
        lack of expected error at test line 122 'num,'
        lack of expected error at test line 130 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | boolean>'.
        Unmarked error at test line 142 'fn: (src) => src + 1,'
        lack of expected error at test line 139 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | number>'.
        Unmarked error at test line 150 'fn: (clk) => clk + 1,'
        lack of expected error at test line 148 'str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 158 'fn: (clk) => clk + 1,'
        lack of expected error at test line 156 'strBool,'
        Type 'number' is not assignable to type 'string | boolean'.
        Unmarked error at test line 167 'fn: (clk) => clk + 1,'
        lack of expected error at test line 165 'str,'
        Type 'number' is not assignable to type 'string | EventCallable<number>'.
        Unmarked error at test line 176 'fn: (clk) => clk + 1,'
        lack of expected error at test line 174 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | EventCallable<number>'.
        Unmarked error at test line 185 'fn: (clk) => clk + 1,'
        lack of expected error at test line 182 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | void'.
        Unmarked error at test line 194 'fn: (clk) => clk + 1,'
        lack of expected error at test line 191 'str,'
        Type 'number' is not assignable to type 'string | void'.
        Unmarked error at test line 197 'clock: num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 212 'fn: (clk) => clk + 1,'
        lack of expected error at test line 201 'str,'
        lack of expected error at test line 210 'str,'
        Type 'number' is not assignable to type 'string | EventCallable<string | number>'.
        Unmarked error at test line 215 'clock: num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 230 'fn: (clk) => clk + 1,'
        lack of expected error at test line 219 'strBool,'
        lack of expected error at test line 228 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | EventCallable<string | number>'.
        Unmarked error at test line 238 'fn: (clk) => clk + 1,'
        lack of expected error at test line 236 'num,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 247 'fn: (clk) => clk + 1,'
        lack of expected error at test line 244 'num,'
        Type 'string' is not assignable to type 'number | void'.
        Unmarked error at test line 256 'fn: (clk) => clk + 1,'
        lack of expected error at test line 253 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string>'.
        Unmarked error at test line 259 'clock: str,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (clk: string) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 274 'fn: (clk) => clk + 1,'
        lack of expected error at test line 263 'num,'
        lack of expected error at test line 271 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | boolean>'.
        Unmarked error at test line 283 'fn: (clk) => clk + 1,'
        lack of expected error at test line 280 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | number>'.
        Unmarked error at test line 292 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 290 'str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 301 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 299 'strBool,'
        Type 'number' is not assignable to type 'string | boolean'.
        Unmarked error at test line 311 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 309 'str,'
        Type 'number' is not assignable to type 'string | EventCallable<number>'.
        Unmarked error at test line 321 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 319 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | EventCallable<number>'.
        Unmarked error at test line 331 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 328 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | void'.
        Unmarked error at test line 341 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 338 'str,'
        Type 'number' is not assignable to type 'string | void'.
        Unmarked error at test line 344 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number, clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 361 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 349 'str,'
        lack of expected error at test line 359 'str,'
        Type 'number' is not assignable to type 'string | EventCallable<string | number>'.
        Unmarked error at test line 364 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number, clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 381 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 369 'strBool,'
        lack of expected error at test line 379 'strBool,'
        Type 'number' is not assignable to type 'string | boolean | EventCallable<string | number>'.
        Unmarked error at test line 390 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 388 'num,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 400 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 397 'num,'
        Type 'string' is not assignable to type 'number | void'.
        Unmarked error at test line 410 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 407 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string>'.
        Unmarked error at test line 413 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number, clk: string) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 430 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 418 'num,'
        lack of expected error at test line 427 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | boolean>'.
        Unmarked error at test line 440 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 437 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | number>'.
        Unmarked error at test line 449 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 447 'num,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 459 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 456 'num,'
        Type 'string' is not assignable to type 'number | void'.
        Unmarked error at test line 469 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 466 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string>'.
        Unmarked error at test line 472 'source: str,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: string, clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 489 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 477 'num,'
        lack of expected error at test line 486 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | boolean>'.
        Unmarked error at test line 499 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 496 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | number>'.
        Unmarked error at test line 508 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 506 'num,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 518 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 515 'num,'
        Type 'string' is not assignable to type 'number | void'.
        Unmarked error at test line 528 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 525 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string>'.
        Unmarked error at test line 531 'source: str,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: string, clk: string) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 548 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 536 'num,'
        lack of expected error at test line 545 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | boolean>'.
        Unmarked error at test line 558 'fn: (src,clk) => src + clk,'
        lack of expected error at test line 555 'num,'
        Type 'string' is not assignable to type 'number | EventCallable<string | number>'.
        "
      `)
    })
  })
  describe('typed fn', () => {
    test('typed fn (should pass)', () => {
      //prettier-ignore
      {
        sample({source:num, target:[num]         , fn:(src:number) => src+1             })
        sample({source:num, target:[voidt]       , fn:(src:number) => src+1             })
        sample({source:num, target:[anyt]        , fn:(src:number) => src+1             })
        sample({source:num, target:[numStr]      , fn:(src:number) => src+1             })
        sample({source:num, target:[num,voidt]   , fn:(src:number) => src+1             })
        sample({source:num, target:[anyt,num]    , fn:(src:number) => src+1             })
        sample({source:num, target:[num,numStr]  , fn:(src:number) => src+1             })
        sample({source:num, target:[anyt,voidt]  , fn:(src:number) => src+1             })
        sample({source:num, target:[numStr,voidt], fn:(src:number) => src+1             })
        sample({source:num, target:[anyt,numStr] , fn:(src:number) => src+1             })
        sample({clock:num, target:[num]         , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[voidt]       , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt]        , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[numStr]      , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[num,voidt]   , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt,num]    , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[num,numStr]  , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt,voidt]  , fn:(clk:number) => clk+1             })
        sample({clock:num, target:[numStr,voidt], fn:(clk:number) => clk+1             })
        sample({clock:num, target:[anyt,numStr] , fn:(clk:number) => clk+1             })
        sample({source:num, clock:num, target:[num]         , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[voidt]       , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt]        , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[numStr]      , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[num,voidt]   , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt,num]    , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[num,numStr]  , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt,voidt]  , fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[numStr,voidt], fn:(src:number,clk:number) => src+clk})
        sample({source:num, clock:num, target:[anyt,numStr] , fn:(src:number,clk:number) => src+clk})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('typed fn (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: num,
          target: [
            //@ts-expect-error
            str,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          source: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number) => src+1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            str,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
          fn: (clk:number) => clk+1,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            str,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            num,
            //@ts-expect-error
            str,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            num,
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            strBool,
            voidt,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            //@ts-expect-error
            str,
            voidt,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            str,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            str,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            anyt,
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
        sample({
          source: num,
          clock: num,
          target: [
            numStr,
            //@ts-expect-error
            strBool,
          ],
          fn: (src:number,clk:number) => src+clk,
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 9 'fn: (src:number) => src+1,'
        lack of expected error at test line 7 'str,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string'.
          Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 17 'fn: (src:number) => src+1,'
        lack of expected error at test line 15 'strBool,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string | boolean'.
          Type 'number' is not assignable to type 'string | boolean'.
        Unmarked error at test line 26 'fn: (src:number) => src+1,'
        lack of expected error at test line 24 'str,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string | EventCallable<number>'.
          Type 'number' is not assignable to type 'string | EventCallable<number>'.
        Unmarked error at test line 35 'fn: (src:number) => src+1,'
        lack of expected error at test line 33 'strBool,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string | boolean | EventCallable<number>'.
          Type 'number' is not assignable to type 'string | boolean | EventCallable<number>'.
        Unmarked error at test line 44 'fn: (src:number) => src+1,'
        lack of expected error at test line 41 'strBool,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string | boolean | void'.
          Type 'number' is not assignable to type 'string | boolean | void'.
        Unmarked error at test line 53 'fn: (src:number) => src+1,'
        lack of expected error at test line 50 'str,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string | void'.
          Type 'number' is not assignable to type 'string | void'.
        Unmarked error at test line 56 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 71 'fn: (src:number) => src+1,'
        lack of expected error at test line 60 'str,'
        lack of expected error at test line 69 'str,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string | EventCallable<string | number>'.
          Type 'number' is not assignable to type 'string | EventCallable<string | number>'.
        Unmarked error at test line 74 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 89 'fn: (src:number) => src+1,'
        lack of expected error at test line 78 'strBool,'
        lack of expected error at test line 87 'strBool,'
        Type '(src: number) => number' is not assignable to type '(src: number) => string | boolean | EventCallable<string | number>'.
          Type 'number' is not assignable to type 'string | boolean | EventCallable<string | number>'.
        Unmarked error at test line 97 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 95 'str,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string'.
          Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 105 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 103 'strBool,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string | boolean'.
          Type 'number' is not assignable to type 'string | boolean'.
        Unmarked error at test line 114 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 112 'str,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string | EventCallable<number>'.
          Type 'number' is not assignable to type 'string | EventCallable<number>'.
        Unmarked error at test line 123 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 121 'strBool,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string | boolean | EventCallable<number>'.
          Type 'number' is not assignable to type 'string | boolean | EventCallable<number>'.
        Unmarked error at test line 132 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 129 'strBool,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string | boolean | void'.
          Type 'number' is not assignable to type 'string | boolean | void'.
        Unmarked error at test line 141 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 138 'str,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string | void'.
          Type 'number' is not assignable to type 'string | void'.
        Unmarked error at test line 144 'clock: num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 159 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 148 'str,'
        lack of expected error at test line 157 'str,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string | EventCallable<string | number>'.
          Type 'number' is not assignable to type 'string | EventCallable<string | number>'.
        Unmarked error at test line 162 'clock: num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ fn: (clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 177 'fn: (clk:number) => clk+1,'
        lack of expected error at test line 166 'strBool,'
        lack of expected error at test line 175 'strBool,'
        Type '(clk: number) => number' is not assignable to type '(clk: number) => string | boolean | EventCallable<string | number>'.
          Type 'number' is not assignable to type 'string | boolean | EventCallable<string | number>'.
        Unmarked error at test line 186 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 184 'str,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string'.
          Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 195 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 193 'strBool,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string | boolean'.
          Type 'number' is not assignable to type 'string | boolean'.
        Unmarked error at test line 205 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 203 'str,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string | EventCallable<number>'.
          Type 'number' is not assignable to type 'string | EventCallable<number>'.
        Unmarked error at test line 215 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 213 'strBool,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string | boolean | EventCallable<number>'.
          Type 'number' is not assignable to type 'string | boolean | EventCallable<number>'.
        Unmarked error at test line 225 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 222 'strBool,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string | boolean | void'.
          Type 'number' is not assignable to type 'string | boolean | void'.
        Unmarked error at test line 235 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 232 'str,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string | void'.
          Type 'number' is not assignable to type 'string | void'.
        Unmarked error at test line 238 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number, clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 255 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 243 'str,'
        lack of expected error at test line 253 'str,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string | EventCallable<string | number>'.
          Type 'number' is not assignable to type 'string | EventCallable<string | number>'.
        Unmarked error at test line 258 'source: num,'
        Object literal may only specify known properties, and 'source' does not exist in type '{ fn: (src: number, clk: number) => unknown; error: \\"fn result should extend target type\\"; }'.
        Unmarked error at test line 275 'fn: (src:number,clk:number) => src+clk,'
        lack of expected error at test line 263 'strBool,'
        lack of expected error at test line 273 'strBool,'
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: number) => string | boolean | EventCallable<string | number>'.
          Type 'number' is not assignable to type 'string | boolean | EventCallable<string | number>'.
        "
      `)
    })
  })
  test('wrong args (should fail)', () => {
    //prettier-ignore
    {
      sample({
        source: num,
        clock: str,
        target: [num],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [anyt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [numStr],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [num,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [num,str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [anyt,num],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [num,strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [num,numStr],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [anyt,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [strBool,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [numStr,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [str,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [anyt,str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [numStr,str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [anyt,numStr],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [anyt,strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: num,
        clock: str,
        target: [numStr,strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [num],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [anyt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [numStr],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [num,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [num,str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [anyt,num],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [num,strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [num,numStr],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [anyt,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [strBool,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [numStr,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [str,voidt],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [anyt,str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [numStr,str],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [anyt,numStr],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [anyt,strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
      sample({
        source: str,
        clock: num,
        target: [numStr,strBool],
        //@ts-expect-error
        fn: (src:number,clk:number) => src+clk,
      })
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: number, clk: string) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: number, clk: string) => any'.
          Types of parameters 'clk' and 'clk' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      Type '(src: number, clk: number) => number' is not assignable to type '((src: string, clk: number) => any) & ((src: number, clk: number) => number)'.
        Type '(src: number, clk: number) => number' is not assignable to type '(src: string, clk: number) => any'.
          Types of parameters 'src' and 'src' are incompatible.
            Type 'string' is not assignable to type 'number'.
      "
    `)
  })
}
{
  /** used as valid source type */
  type AN = {a: number}
  /** used as invalid source type */
  type AS = {a: string}
  /** used as valid source type */
  type AB = {a: number; b: string}
  /** used as invalid source type */
  type ABN = {a: number; b: number}
  const num = createEvent<number>()
  const $num = createStore<number>(0)
  const $str = createStore<string>('')
  const a_num = createEvent<AN>()
  const a_str = createEvent<AS>()
  const ab = createEvent<AB>()
  const abn = createEvent<ABN>()
  const l_num = createEvent<[number]>()
  const l_str = createEvent<[string]>()
  const l_num_str = createEvent<[number, string]>()
  const l_num_num = createEvent<[number, number]>()

  const fn = {
    noArgs: () => ({a: 2, b: ''}),
    assertFirst: {
      object: {
        solo: ({a}: AS, cl: number) => ({a: cl, b: a}),
        pair: ({a, b}: ABN, cl: number) => ({a: b + cl, b: ''}),
      },
      tuple: {
        solo: ([a]: [string], cl: number) => ({a: cl, b: a}),
        pair: ([a, b]: [number, number], cl: number) => ({a: b + cl, b: ''}),
      },
    },
    assertFirstOnly: {
      object: {
        solo: ({a}: AS) => ({a: 0, b: a}),
        pair: ({b}: ABN) => ({a: b, b: ''}),
      },
      tuple: {
        solo: ([a]: [string]) => ({a: 2, b: a}),
        pair: ([, b]: [number, number]) => ({a: b, b: ''}),
      },
    },
    assertSecond: {
      object: {
        solo: ({a}: AN, cl: string) => ({a, b: cl}),
        pair: ({a}: AB, cl: string) => ({a, b: cl}),
      },
      tuple: {
        solo: ([a]: [number], cl: string) => ({a, b: cl}),
        pair: ([a]: [number, string], cl: string) => ({a, b: cl}),
      },
    },
    typedSrc: {
      object: {
        solo: ({a}: AN) => ({a, b: ''}),
        pair: ({a, b}: AB) => ({a, b}),
      },
      tuple: {
        solo: ([a]: [number]) => ({a, b: ''}),
        pair: ([a, b]: [number, string]) => ({a, b}),
      },
    },
    typedSrcClock: {
      object: {
        solo: ({a}: AN, cl: number) => ({a: a + cl, b: ''}),
        pair: ({a, b}: AB, cl: number) => ({a: a + cl, b}),
      },
      tuple: {
        solo: ([a]: [number], cl: number) => ({a: a + cl, b: ''}),
        pair: ([a, b]: [number, string], cl: number) => ({a: a + cl, b}),
      },
    },
  }
  describe('source:wide', () => {
    test('source:wide (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num,b:$str}     , target:[a_num]          })
        sample({source:{a:$num,b:$str}     , target:[ab]             })
        sample({source:{a:$num,b:$str}     , target:[a_num,ab]       })
        sample({source:[$num,$str]         , target:[l_num]          })
        sample({source:[$num,$str]         , target:[l_num_str]      })
        sample({source:[$num,$str]         , target:[l_num,l_num_str]})
        sample({source:[$num,$str] as const, target:[l_num]          })
        sample({source:[$num,$str] as const, target:[l_num_str]      })
        sample({source:[$num,$str] as const, target:[l_num,l_num_str]})
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num]          })
        sample({source:{a:$num,b:$str}     , clock:num, target:[ab]             })
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,ab]       })
        sample({source:[$num,$str]         , clock:num, target:[l_num]          })
        sample({source:[$num,$str]         , clock:num, target:[l_num_str]      })
        sample({source:[$num,$str]         , clock:num, target:[l_num,l_num_str]})
        sample({source:[$num,$str] as const, clock:num, target:[l_num]          })
        sample({source:[$num,$str] as const, clock:num, target:[l_num_str]      })
        sample({source:[$num,$str] as const, clock:num, target:[l_num,l_num_str]})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 6 'sample({source:[$num,$str]         , target:[l_num]          })'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
          Types of property '__' are incompatible.
            Type '[number]' is not assignable to type 'readonly [number, string]'.
              Source has 1 element(s) but target requires 2.
        Unmarked error at test line 8 'sample({source:[$num,$str]         , target:[l_num,l_num_str]})'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 9 'sample({source:[$num,$str] as const, target:[l_num]          })'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 11 'sample({source:[$num,$str] as const, target:[l_num,l_num_str]})'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 15 'sample({source:[$num,$str]         , clock:num, target:[l_num]          })'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 17 'sample({source:[$num,$str]         , clock:num, target:[l_num,l_num_str]})'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 18 'sample({source:[$num,$str] as const, clock:num, target:[l_num]          })'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 20 'sample({source:[$num,$str] as const, clock:num, target:[l_num,l_num_str]})'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        "
      `)
    })
    test('source:wide (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str],
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str],
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str],
          target: [
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str],
          target: [
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str] as const,
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          target: [
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str] as const,
          target: [
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 20 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Unmarked error at test line 28 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
          Types of property '__' are incompatible.
            Type '[string]' is not assignable to type 'readonly [number, string]'.
              Source has 1 element(s) but target requires 2.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
          Type at position 1 in source is not compatible with type at position 1 in target.
            The types of '__' are incompatible between these types.
              Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 75 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 83 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 130 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 138 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 188 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Unmarked error at test line 197 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ readonly a: number; readonly b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ readonly a: number; readonly b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 250 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 259 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 312 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Unmarked error at test line 321 'l_num,'
        Type 'EventCallable<[number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number, string]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number, string]>'.
        "
      `)
    })
  })
  describe('source:wide, fn:untyped', () => {
    test('source:wide, fn:untyped (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num,b:$str}     , target:[a_num]   , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , target:[ab]      , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , target:[a_num,ab], fn:({a,b}) => ({a,b})})
        sample({source:[$num,$str]         , target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , target:[a_num,ab], fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, target:[a_num,ab], fn:([a,b]) => ({a,b})})
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num]   , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , clock:num, target:[ab]      , fn:({a,b}) => ({a,b})})
        sample({source:{a:$num,b:$str}     , clock:num, target:[a_num,ab], fn:({a,b}) => ({a,b})})
        sample({source:[$num,$str]         , clock:num, target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , clock:num, target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str]         , clock:num, target:[a_num,ab], fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, clock:num, target:[a_num]   , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, clock:num, target:[ab]      , fn:([a,b]) => ({a,b})})
        sample({source:[$num,$str] as const, clock:num, target:[a_num,ab], fn:([a,b]) => ({a,b})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('source:wide, fn:untyped (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: {a:$num,b:$str},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ({a,b}) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str],
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a,b]) => ({a,b}),
        })
        sample({
          source: [$num,$str] as const,
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a,b]) => ({a,b}),
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 9 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 7 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 17 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 15 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 26 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 24 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 35 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 33 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 44 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 41 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 54 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 50 'abn,'
        lack of expected error at test line 52 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 63 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 60 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 71 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 69 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 79 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 77 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 88 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 86 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 97 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 95 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 106 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 103 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 116 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 112 'abn,'
        lack of expected error at test line 114 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 125 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 122 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 133 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 131 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 141 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 139 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 150 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 148 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 159 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 157 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 168 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 165 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 178 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 174 'abn,'
        lack of expected error at test line 176 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 187 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 184 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 196 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 194 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 205 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 203 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 215 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 213 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 225 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 223 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 235 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 232 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 246 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 242 'abn,'
        lack of expected error at test line 244 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 256 'fn: ({a,b}) => ({a,b}),'
        lack of expected error at test line 253 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 265 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 263 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 274 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 272 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 284 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 282 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 294 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 292 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 304 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 301 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 315 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 311 'abn,'
        lack of expected error at test line 313 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 325 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 322 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 334 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 332 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 343 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 341 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 353 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 351 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 363 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 361 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 373 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 370 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 384 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 380 'abn,'
        lack of expected error at test line 382 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 394 'fn: ([a,b]) => ({a,b}),'
        lack of expected error at test line 391 'abn,'
        Type 'string' is not assignable to type 'number'.
        "
      `)
    })
  })
  describe('source:same', () => {
    test('source:same (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num}       , target:[a_num]})
        sample({source:[$num]         , target:[l_num]})
        sample({source:[$num] as const, target:[l_num]})
        sample({source:{a:$num}       , clock:num, target:[a_num]})
        sample({source:[$num]         , clock:num, target:[l_num]})
        sample({source:[$num] as const, clock:num, target:[l_num]})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('source:same (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            a_num,
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            a_str,
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num],
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num],
          target: [
            l_num,
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num],
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            l_num,
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            ab,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_num_str,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            l_num,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_str,
          ],
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            l_num_str,
            //@ts-expect-error
            l_num_num,
          ],
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 11 'source: {a:$num},'
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: Store<number>; b: Store<number>; }'.
        Unmarked error at test line 18 'source: {a:$num},'
        lack of expected error at test line 14 'abn,'
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: Store<number>; b: Store<string>; }'.
        lack of expected error at test line 21 'ab,'
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 34 'target: ['
        Object literal may only specify known properties, and 'target' does not exist in type '{ source: { a: Store<number>; } | { a: Store<number>; b: Store<number>; }; error: \\"source should extend target type\\"; }'.
        Unmarked error at test line 42 'target: ['
        lack of expected error at test line 37 'abn,'
        Object literal may only specify known properties, and 'target' does not exist in type '{ source: { a: Store<number>; } | { a: Store<number>; b: Store<string>; }; error: \\"source should extend target type\\"; }'.
        lack of expected error at test line 45 'ab,'
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        lack of expected error at test line 54 'ab,'
        lack of expected error at test line 61 'abn,'
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 67 'source: {a:$num},'
        Type '{ a: StoreWritable<number>; }' is not assignable to type '{ a: Store<number>; b: Store<string>; } | { a: Store<number>; b: Store<number>; }'.
          Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: Store<number>; b: Store<number>; }'.
        lack of expected error at test line 70 'abn,'
        lack of expected error at test line 72 'ab,'
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
          Types of property '__' are incompatible.
            Type '[string]' is not assignable to type 'readonly [number]'.
              Type 'string' is not assignable to type 'number'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
          Types of property '__' are incompatible.
            Type '[number, string]' is not assignable to type 'readonly [number]'.
              Source has 2 element(s) but target allows only 1.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
          Types of property '__' are incompatible.
            Type '[number, number]' is not assignable to type 'readonly [number]'.
              Source has 2 element(s) but target allows only 1.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 228 'source: {a:$num},'
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: Store<number>; b: Store<number>; }'.
        Unmarked error at test line 236 'source: {a:$num},'
        lack of expected error at test line 232 'abn,'
        Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: Store<number>; b: Store<string>; }'.
        lack of expected error at test line 240 'ab,'
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 254 'clock: num,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ source: { a: Store<number>; } | { a: Store<number>; b: Store<number>; }; error: \\"source should extend target type\\"; }'.
        Unmarked error at test line 263 'clock: num,'
        lack of expected error at test line 258 'abn,'
        Object literal may only specify known properties, and 'clock' does not exist in type '{ source: { a: Store<number>; } | { a: Store<number>; b: Store<string>; }; error: \\"source should extend target type\\"; }'.
        lack of expected error at test line 267 'ab,'
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        lack of expected error at test line 277 'ab,'
        lack of expected error at test line 285 'abn,'
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ readonly a: number; }>'.
          The types of '__.a' are incompatible between these types.
            Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 291 'source: {a:$num},'
        Type '{ a: StoreWritable<number>; }' is not assignable to type '{ a: Store<number>; b: Store<string>; } | { a: Store<number>; b: Store<number>; }'.
          Property 'b' is missing in type '{ a: StoreWritable<number>; }' but required in type '{ a: Store<number>; b: Store<number>; }'.
        lack of expected error at test line 295 'abn,'
        lack of expected error at test line 297 'ab,'
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, string]>' is not assignable to type 'Unit<readonly [number]>'.
        Type 'EventCallable<[number, number]>' is not assignable to type 'Unit<readonly [number]>'.
        "
      `)
    })
  })
  describe('source:same, fn:untyped', () => {
    test('source:same, fn:untyped (should pass)', () => {
      //prettier-ignore
      {
        sample({source:{a:$num}       , target:[a_num]   , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , target:[ab]      , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , target:[a_num,ab], fn:({a}) => ({a,b:''})})
        sample({source:[$num]         , target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , target:[a_num,ab], fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, target:[a_num,ab], fn:([a]) => ({a,b:''})})
        sample({source:{a:$num}       , clock:num, target:[a_num]   , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , clock:num, target:[ab]      , fn:({a}) => ({a,b:''})})
        sample({source:{a:$num}       , clock:num, target:[a_num,ab], fn:({a}) => ({a,b:''})})
        sample({source:[$num]         , clock:num, target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , clock:num, target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num]         , clock:num, target:[a_num,ab], fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, clock:num, target:[a_num]   , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, clock:num, target:[ab]      , fn:([a]) => ({a,b:''})})
        sample({source:[$num] as const, clock:num, target:[a_num,ab], fn:([a]) => ({a,b:''})})
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        no errors
        "
      `)
    })
    test('source:same, fn:untyped (should fail)', () => {
      //prettier-ignore
      {
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: {a:$num},
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ({a}) => ({a,b:''}),
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num],
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            a_num,
            //@ts-expect-error
            abn,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            a_str,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            //@ts-expect-error
            a_str,
          ],
          fn: ([a]) => ({a,b:''}),
        })
        sample({
          source: [$num] as const,
          clock: num,
          target: [
            //@ts-expect-error
            abn,
            ab,
          ],
          fn: ([a]) => ({a,b:''}),
        })
      }
      expect(typecheck).toMatchInlineSnapshot(`
        "
        Unmarked error at test line 9 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 7 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 17 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 15 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 26 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 24 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 35 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 33 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 44 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 41 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 54 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 50 'abn,'
        lack of expected error at test line 52 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 63 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 60 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 71 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 69 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 79 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 77 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 88 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 86 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 97 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 95 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 106 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 103 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 116 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 112 'abn,'
        lack of expected error at test line 114 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 125 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 122 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 133 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 131 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 141 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 139 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 150 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 148 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 159 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 157 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 168 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 165 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 178 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 174 'abn,'
        lack of expected error at test line 176 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 187 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 184 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 196 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 194 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 205 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 203 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 215 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 213 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 225 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 223 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 235 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 232 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 246 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 242 'abn,'
        lack of expected error at test line 244 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 256 'fn: ({a}) => ({a,b:''}),'
        lack of expected error at test line 253 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 265 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 263 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 274 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 272 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 284 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 282 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 294 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 292 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 304 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 301 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 315 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 311 'abn,'
        lack of expected error at test line 313 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 325 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 322 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 334 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 332 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 343 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 341 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 353 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 351 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 363 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 361 'abn,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 373 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 370 'a_str,'
        Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 384 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 380 'abn,'
        lack of expected error at test line 382 'a_str,'
        Type 'string' is not assignable to type 'number'.
        Unmarked error at test line 394 'fn: ([a]) => ({a,b:''}),'
        lack of expected error at test line 391 'abn,'
        Type 'string' is not assignable to type 'number'.
        "
      `)
    })
  })
}

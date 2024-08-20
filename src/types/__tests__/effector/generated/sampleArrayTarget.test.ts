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
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 163 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 171 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 185 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 201 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 218 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 242 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 250 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
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
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 42 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 51 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 67 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 85 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 104 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 131 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 140 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 183 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 192 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 208 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 226 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 245 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 272 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 281 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 329 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 339 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 357 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 377 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 398 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 428 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 438 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 457 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 487 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 497 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 516 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 546 'strBool,'
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<string>'.
        Type 'EventCallable<number>' is not assignable to type 'Unit<string>'.
        Unmarked error at test line 556 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<string>'.
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
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 42 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 51 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 67 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 85 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 130 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 139 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 155 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 173 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 223 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 233 'voidt,'
        Type 'EventCallable<void>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 251 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
        Unmarked error at test line 271 'numStr,'
        Type 'EventCallable<string | number>' is not assignable to type 'Unit<number>'.
        Type 'EventCallable<string | boolean>' is not assignable to type 'Unit<number>'.
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
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 22 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 31 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 84 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 93 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 146 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 155 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 211 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 221 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 280 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 290 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 349 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 359 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
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
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 22 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 31 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 84 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 93 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 146 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 155 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 211 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 221 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 280 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 290 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Unmarked error at test line 349 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Unmarked error at test line 359 'a_num,'
        Type 'EventCallable<AN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AN' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        Type 'EventCallable<AS>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          Types of property '__' are incompatible.
            Property 'b' is missing in type 'AS' but required in type '{ a: number; b: string; }'.
        Type 'EventCallable<ABN>' is not assignable to type 'Unit<{ a: number; b: string; }>'.
          The types of '__.b' are incompatible between these types.
            Type 'number' is not assignable to type 'string'.
        "
      `)
    })
  })
}

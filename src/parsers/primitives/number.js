// @flow

import P from 'parsimmon'
import type { NodeType } from '../../types'

export default P.regexp(
  /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/
).map((value: string): NodeType => ({
  name: 'primitive',
  value
}))

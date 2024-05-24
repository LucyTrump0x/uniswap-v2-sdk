import { Percent, V2_FACTORY_ADDRESSES } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

/**
 * @deprecated use FACTORY_ADDRESS_MAP instead
 */
export const FACTORY_ADDRESS = '0x90Ea7fA7aaE75F92eB6D493f4ECF995357C0167d'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = V2_FACTORY_ADDRESSES

export const INIT_CODE_HASH = '0x114ce143889b1e7345ea2ae76c3b4a8ff24ee55a0745dc474b42e2fdd7848790'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)

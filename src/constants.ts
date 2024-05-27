import { Percent, V2_FACTORY_ADDRESSES } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

/**
 * @deprecated use FACTORY_ADDRESS_MAP instead
 */
export const FACTORY_ADDRESS = '0xCe4DAE8A7E53b62D1C1C579f69628B4B299802C9'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = V2_FACTORY_ADDRESSES

export const INIT_CODE_HASH = '0x46e83d59ef7a80c796b8d1a833d4de90c43e40a9d809aedac53feda68bba3f32'

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

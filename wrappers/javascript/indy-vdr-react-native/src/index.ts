import { registerIndyVdr } from '@hyperledger/indy-vdr-shared'

import { ReactNativeIndyVdr } from './ReactNativeIndyVdr'
import { register } from './register'

export * from '@hyperledger/indy-vdr-shared'

registerIndyVdr({ vdr: new ReactNativeIndyVdr(register()) })

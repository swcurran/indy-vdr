import type { NativeBindings } from './NativeBindings'

import { registerIndyVdr } from '@hyperledger/indy-vdr-shared'
import { NativeModules } from 'react-native'

import { ReactNativeIndyVdr } from './ReactNativeIndyVdr'
import { turboModuleIndyVdr } from './specs/NativeIndyVdr'

export * from '@hyperledger/indy-vdr-shared'
export * from './specs'

// Try getting TurboModule; if we are successful, assume New Architecture
// If not, fallback to Legacy Architecture (the old bridge approach)
let IndyVdrTurboModule: any = null
try {
  IndyVdrTurboModule = turboModuleIndyVdr()
} catch (error) {
  // TurboModule not available, expected failure in legacy architecture
}

if (IndyVdrTurboModule) {
  // New Architecture
  const nativeBindings = IndyVdrTurboModule as NativeBindings
  registerIndyVdr({ vdr: new ReactNativeIndyVdr(nativeBindings) })
} else {
  // Legacy Architecture
  const module = NativeModules.IndyVdr as { install: () => boolean }
  if (!module.install()) throw Error('Unable to install the turboModule: indyVdr')

  // This can already check whether `_indy_vdr` exists on global
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (!(globalThis as any)._indy_vdr) {
    throw Error('_indy_vdr has not been exposed on global. Something went wrong while installing the turboModule')
  }

  const _indy_vdr = (globalThis as any)._indy_vdr as NativeBindings
  registerIndyVdr({ vdr: new ReactNativeIndyVdr(_indy_vdr) })
}

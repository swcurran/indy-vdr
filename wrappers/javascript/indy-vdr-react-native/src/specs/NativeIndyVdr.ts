import { type TurboModule, TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
  version: () => string
  getCurrentError: () => string
  setConfig: (config: string) => Object
  setCacheDirectory: (path: string) => Object
  setLedgerTxnCache: (capacity: number, expiry_offset_ms: number, path?: string) => Object
  setDefaultLogger: () => Object
  setProtocolVersion: (version: number) => Object
  setSocksProxy: (socksProxy: string) => Object
  poolCreate: (parameters: string) => Object
  poolRefresh: (poolHandle: number) => Promise<Object>
  poolGetStatus: (poolHandle: number) => Promise<Object>
  poolGetTransactions: (poolHandle: number) => Promise<Object>
  poolGetVerifiers: (poolHandle: number) => Promise<Object>
  poolClose: (poolHandle: number) => Object
  buildAcceptanceMechanismsRequest: (submitterDid: string, aml: string, version: string, amlContext?: string) => Object
  buildGetAcceptanceMechanismsRequest: (submitterDid?: string, timestamp?: number, version?: string) => Object
  buildAttribRequest: (submitterDid: string, targetDid: string, hash?: string, raw?: string, enc?: string) => Object
  buildGetAttribRequest: (targetDid: string, submitterDid?: string, raw?: string, hash?: string, enc?: string) => Object
  buildCredDefRequest: (submitterDid: string, credDef: string) => Object
  buildGetCredDefRequest: (credDefId: string, submitterDid?: string) => Object
  buildNymRequest: (submitterDid: string, targetDid: string, verkey?: string, alias?: string, role?: string) => Object
  buildGetNymRequest: (targetDid: string, submitterDid?: string) => Object
  buildSchemaRequest: (submitterDid: string, schema: string) => Object
  buildGetSchemaRequest: (schemaId: string, submitterDid?: string) => Object
  requestSubmit: (
    poolHandle: number,
    requestHandle: number,
    submitterDid?: string,
    signature?: string,
  ) => Promise<Object>
  requestGetBody: (requestHandle: number) => Object
  requestGetSignature: (requestHandle: number) => Object
  requestSetEndorser: (requestHandle: number, endorser: string) => Object
  requestSetMultiSignature: (requestHandle: number, identifier: string, signature: string) => Object
  requestSetSignature: (requestHandle: number, signature: string) => Object
  requestSetTxnAuthorAgreementAcceptance: (requestHandle: number, taaAcceptance: string) => Object
  requestFree: (requestHandle: number) => Object
  preparePayment: (inputsJson: string, outputsJson: string, extra?: string) => Object
}

export const turboModuleIndyVdr = (): Spec => TurboModuleRegistry.getEnforcing<Spec>('IndyVdr')

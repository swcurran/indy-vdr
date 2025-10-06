import { type TurboModule, TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
  version: () => string
  getCurrentError: () => string
  setConfig: (config: string) => object
  setCacheDirectory: (path: string) => object
  setLedgerTxnCache: (capacity: number, expiry_offset_ms: number, path?: string) => object
  setDefaultLogger: () => object
  setProtocolVersion: (version: number) => object
  setSocksProxy: (socksProxy: string) => object
  poolCreate: (parameters: string) => object
  poolRefresh: (poolHandle: number) => Promise<object>
  poolGetStatus: (poolHandle: number) => Promise<object>
  poolGetTransactions: (poolHandle: number) => Promise<object>
  poolGetVerifiers: (poolHandle: number) => Promise<object>
  poolClose: (poolHandle: number) => object
  buildAcceptanceMechanismsRequest: (submitterDid: string, aml: string, version: string, amlContext?: string) => object
  buildGetAcceptanceMechanismsRequest: (submitterDid?: string, timestamp?: number, version?: string) => object
  buildAttribRequest: (submitterDid: string, targetDid: string, hash?: string, raw?: string, enc?: string) => object
  buildGetAttribRequest: (targetDid: string, submitterDid?: string, raw?: string, hash?: string, enc?: string) => object
  buildCredDefRequest: (submitterDid: string, credDef: string) => object
  buildGetCredDefRequest: (credDefId: string, submitterDid?: string) => object
  buildNymRequest: (submitterDid: string, targetDid: string, verkey?: string, alias?: string, role?: string) => object
  buildGetNymRequest: (targetDid: string, submitterDid?: string) => object
  buildSchemaRequest: (submitterDid: string, schema: string) => object
  buildGetSchemaRequest: (schemaId: string, submitterDid?: string) => object
  requestSubmit: (
    poolHandle: number,
    requestHandle: number,
    submitterDid?: string,
    signature?: string
  ) => Promise<object>
  requestGetBody: (requestHandle: number) => object
  requestGetSignature: (requestHandle: number) => object
  requestSetEndorser: (requestHandle: number, endorser: string) => object
  requestSetMultiSignature: (requestHandle: number, identifier: string, signature: string) => object
  requestSetSignature: (requestHandle: number, signature: string) => object
  requestSetTxnAuthorAgreementAcceptance: (requestHandle: number, taaAcceptance: string) => object
  requestFree: (requestHandle: number) => object
  preparePayment: (inputsJson: string, outputsJson: string, extra?: string) => object
}

export const turboModuleIndyVdr = (): Spec => TurboModuleRegistry.getEnforcing<Spec>('IndyVdr')

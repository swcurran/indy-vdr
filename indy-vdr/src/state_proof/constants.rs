pub use crate::domain::ledger::constants::*;

pub const REQUESTS_FOR_STATE_PROOFS: [&str; 11] = [
    GET_NYM,
    GET_TXN_AUTHR_AGRMT,
    GET_TXN_AUTHR_AGRMT_AML,
    GET_SCHEMA,
    GET_CRED_DEF,
    GET_ATTR,
    GET_REVOC_REG,
    GET_REVOC_REG_DEF,
    GET_REVOC_REG_DELTA,
    GET_AUTH_RULE,
    GET_TXN,
];

#[allow(dead_code)] // FIXME to be used in request recognition
pub const REQUEST_FOR_FULL: [&str; 2] = [POOL_RESTART, GET_VALIDATOR_INFO];

#[allow(dead_code)] // FIXME to be used in request recognition
pub const REQUESTS_FOR_STATE_PROOFS_IN_THE_PAST: [&str; 5] = [
    GET_REVOC_REG,
    GET_REVOC_REG_DELTA,
    GET_TXN_AUTHR_AGRMT,
    GET_TXN_AUTHR_AGRMT_AML,
    GET_TXN,
];

pub const REQUESTS_FOR_MULTI_STATE_PROOFS: [&str; 1] = [GET_REVOC_REG_DELTA];

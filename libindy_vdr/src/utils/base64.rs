use base64_rs::Engine;

use super::ConversionError;

pub fn decode<T: AsRef<[u8]>>(val: T) -> Result<Vec<u8>, ConversionError> {
    Ok(base64_rs::engine::general_purpose::STANDARD
        .decode(val)
        .map_err(|err| ("Error decoding base64 data", err))?)
}

pub fn decode_urlsafe<T: AsRef<[u8]>>(val: T) -> Result<Vec<u8>, ConversionError> {
    Ok(base64_rs::engine::general_purpose::URL_SAFE
        .decode(val)
        .map_err(|err| ("Error decoding base64-URL data", err))?)
}

pub fn encode_urlsafe<T: AsRef<[u8]>>(val: T) -> String {
    base64_rs::engine::general_purpose::URL_SAFE.encode(val)
}

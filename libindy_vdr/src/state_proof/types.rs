/**
 Single item to verification:
 - SP Trie with RootHash
 - BLS MS
 - set of key-value to verify
*/
#[derive(Serialize, Deserialize, Debug)]
pub struct ParsedSP {
    /// encoded SP Trie transferred from Node to Client
    pub proof_nodes: String,
    /// RootHash of the Trie, start point for verification. Should be same with appropriate filed in BLS MS data
    pub root_hash: String,
    /// entities to verification against current SP Trie
    pub kvs_to_verify: KeyValuesInSP,
    /// BLS MS data for verification
    pub multi_signature: serde_json::Value,
}

/**
 Variants of representation for items to verify against SP Trie
 Right now 2 options are specified:
 - simple array of key-value pair
 - whole subtrie
*/
#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
#[serde(tag = "type")]
pub enum KeyValuesInSP {
    Simple(KeyValueSimpleData),
    SubTrie(KeyValuesSubTrieData),
}

/**
 Simple variant of `KeyValuesInSP`.

 All required data already present in parent SP Trie (built from `proof_nodes`).
 `kvs` can be verified directly in parent trie

 Encoding of `key` in `kvs` is defined by verification type
*/
#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
pub struct KeyValueSimpleData {
    pub kvs: Vec<(String /* key */, Option<String /* val */>)>,
    #[serde(default)]
    pub verification_type: KeyValueSimpleDataVerificationType,
}

/**
 Options of common state proof check process
*/
#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
#[serde(tag = "type")]
pub enum KeyValueSimpleDataVerificationType {
    /* key should be base64-encoded string */
    Simple,
    /* key should be plain string */
    NumericalSuffixAscendingNoGaps(NumericalSuffixAscendingNoGapsData),
    /* nodes are from a simple merkle tree */
    MerkleTree(u64),
}

impl Default for KeyValueSimpleDataVerificationType {
    fn default() -> Self {
        KeyValueSimpleDataVerificationType::Simple
    }
}

#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
pub struct NumericalSuffixAscendingNoGapsData {
    pub from: Option<u64>,
    pub next: Option<u64>,
    pub prefix: String,
}

/**
 Subtrie variant of `KeyValuesInSP`.

 In this case Client (libindy) should construct subtrie and append it into trie based on `proof_nodes`.
 After this preparation each kv pair can be checked.
*/
#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
pub struct KeyValuesSubTrieData {
    /// base64-encoded common prefix of each pair in `kvs`. Should be used to correct merging initial trie and subtrie
    pub sub_trie_prefix: Option<String>,
    pub kvs: Vec<(
        String, /* b64-encoded key_suffix */
        Option<String /* val */>,
    )>,
}

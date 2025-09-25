_Generating the C header:_

> **Note**: This project uses `rust-toolchain.toml` to automatically manage the correct Rust version. No manual toolchain setup is required.

1. Install [cbindgen](https://github.com/eqrion/cbindgen/)

```sh
cargo install cbindgen
```

2. Install [cargo expand](https://github.com/dtolnay/cargo-expand)

```sh
cargo install cargo-expand
```

3. Generate the header file:

```sh
cbindgen --config libindy_vdr/include/cbindgen.toml --crate indy-vdr --lockfile Cargo.lock --output libindy_vdr/include/libindy_vdr.h
```

4. Copy to React Native:

```sh
cp libindy_vdr/include/libindy_vdr.h wrappers/javascript/indy-vdr-react-native/cpp/include/
```

https://docs.anza.xyz/cli/install/

https://docs.anza.xyz/cli/install/

https://github.com/solana-foundation/anchor/issues/3392


anchor-spl crate issue with Min:
https://stackoverflow.com/questions/78362485/anchor-shows-errors-no-associated-item-named-anchor-private-gen-idl-type-fo
https://github.com/solana-foundation/anchor/issues/2745#issuecomment-1868379225
https://github.com/solana-foundation/anchor/pull/3133
https://github.com/solana-foundation/anchor/issues/3151


Run solana-test-validator

anchor test --skip-local-validator

npm i @solana/spl-token

npm i @solana/web3.js



```text
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
```

```json
Keypair {
  _keypair: {
    publicKey: Uint8Array(32) [
      240,  17,  42, 136,  38, 51,  22, 105,
       49, 227, 254, 221, 242, 62,  75,   3,
      150,   6, 159, 236, 210, 33, 130, 190,
      191, 189, 107, 124,  35, 73,  32,  23
    ],
    secretKey: Uint8Array(64) [
      252, 110, 126, 124,  18,  88, 197, 231,  44, 188, 131,
      110, 251, 232,  95, 235, 216, 218, 209,  26, 243, 158,
      229, 105,  99, 132, 122,  87, 173,  40,  89,  79, 240,
       17,  42, 136,  38,  51,  22, 105,  49, 227, 254, 221,
      242,  62,  75,   3, 150,   6, 159, 236, 210,  33, 130,
      190, 191, 189, 107, 124,  35,  73,  32,  23
    ]
  }
}
```

```text
sol-staking-v2
```

```text
PublicKey [PublicKey(HA82hWeHGY1PesehpTCNMgn5T22WPGAQFPZ9B6vTjYd4)] {
  _bn: <BN: f0112a882633166931e3feddf23e4b0396069fecd22182bebfbd6b7c23492017>
}
```

------------------------------------------

anchor test --skip-local-validator
warning: unused import: `self`
--> programs/sol-staking-v2/src/lib.rs:2:25
|
2 | use anchor_spl::token::{self, Mint, Token, TokenAccount};
|                         ^^^^
|
= note: `#[warn(unused_imports)]` on by default

warning: unused variable: `amount`
--> programs/sol-staking-v2/src/lib.rs:21:44
|
21 |     pub fn stake(ctx: Context<Initialize>, amount: u64) -> Result<()> {
|                                            ^^^^^^ help: if this is intentional, prefix it with an underscore: `_amount`
|
= note: `#[warn(unused_variables)]` on by default

warning: `sol-staking-v2` (lib) generated 2 warnings (run `cargo fix --lib -p sol-staking-v2` to apply 1 suggestion)
Finished `release` profile [optimized] target(s) in 0.45s
Finished `test` profile [unoptimized + debuginfo] target(s) in 0.38s
Running unittests src/lib.rs (/Users/mitstudio/RustroverProjects/solana-bootcamp/stacking/sol-staking-v2/target/debug/deps/sol_staking_v2-84dd78c9255bc297)
Deploying cluster: http://127.0.0.1:8899
Upgrade authority: /Users/mitstudio/.config/solana/id.json
Deploying program "sol_staking_v2"...
Program path: /Users/mitstudio/RustroverProjects/solana-bootcamp/stacking/sol-staking-v2/target/deploy/sol_staking_v2.so...
Program Id: GrBYLogiQZJTGqiFqx4zt2ck4KMh32wPHXjy4Scy2YAR

Signature: 2Dd2aVjg2dBeBChNgJo3Mjg9DLLVaYDnV2kw7yLb45pSCpL4y2EB1suVVW2y8tY25mhbjqftkaomP3NCEr6ybePb

Deploy success

Found a 'test' script in the Anchor.toml. Running it as a test suite!

Running test suite: "/Users/mitstudio/RustroverProjects/solana-bootcamp/stacking/sol-staking-v2/Anchor.toml"

yarn run v1.22.19
$ /Users/mitstudio/RustroverProjects/solana-bootcamp/stacking/sol-staking-v2/node_modules/.bin/ts-mocha -p ./tsconfig.json -t 1000000 'tests/**/*.ts'
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)


sol-staking-v2
Your transaction signature rupwqq42VD3cDfbcBJ8oyJu5kN8xgX8GDCe53LidCpFvaXhwwnbbWFD6h4odcn2oAksWM5eXqvsCKX1AypMr4g6
✔ Is initialized! (464ms)


1 passing (466ms)

✨  Done in 1.83s.

=========================

anchor clean
anchor build


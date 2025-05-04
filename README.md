# 🌿 Solana Staking Protocol

This is a simple **staking protocol** built on **Solana** using the [Anchor framework](https://book.anchor-lang.com/).
It allows users to stake SPL tokens into a vault and manage staking metadata associated with their wallet.

---

## 📦 Program Details

- **Framework:** Anchor
- **Token Standard:** SPL Token
- **Features:**  
  ✅ Stake SPL Tokens  
  ✅ Track staking status and slot

---

## 🧱 Overview

### 🟢 `initialize`

Initializes the **vault token account** that holds staked tokens.

#### Accounts

- `signer`: User paying for initialization;
- `token_vault_account`: PDA vault holding all staked tokens;
- `mint`: Token mint being staked;
- `token_program`, `system_program`: Standard program references;

### 📥  `stake`

Allows a user to stake a specific amount of tokens. Initializes two accounts per user:

- `stake_info_account`: Metadata about the staking action;
- `stake_account`: Token account for tracking staked tokens;

#### Accounts

- `signer`: The user staking tokens;
- `stake_info_account`: PDA holding stake metadata;
- `stake_account`: PDA token account holding staked funds;
- `user_token_account`: User's associated token account (source of tokens);
- `mint`: Token mint being staked;

### 🧬 Program Derived Addresses (PDAs)

Purpose Seed(s)
Vault b"vault"
StakeInfo per user b"stake_info" + user_pubkey
Stake token account b"token" + user_pubkey

### 🛠️ Development

Install Anchor

```bash
cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked
```

Build

```bash
anchor build
```

Deploy

```bash
anchor deploy
```

### Troubleshooting:

`anchor-spl` crate issue:

```text
https://github.com/solana-foundation/anchor/issues/3392
https://stackoverflow.com/questions/78362485/anchor-shows-errors-no-associated-item-named-anchor-private-gen-idl-type-fo
https://github.com/solana-foundation/anchor/issues/2745#issuecomment-1868379225
https://github.com/solana-foundation/anchor/pull/3133
https://github.com/solana-foundation/anchor/issues/3151
```

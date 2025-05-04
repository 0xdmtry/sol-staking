import * as anchor from "@coral-xyz/anchor";
import {Program} from "@coral-xyz/anchor";
import {SolStakingV2} from "../target/types/sol_staking_v2";
import {Connection, Keypair, PublicKey} from "@solana/web3.js";
import {createMint} from "@solana/spl-token";

describe("sol-staking-v2", () => {
    // Configure the client to use the local cluster.

    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    const payer = provider.wallet as anchor.Wallet;
    const connection = new Connection("http://127.0.0.1:8899", "confirmed");
    const mintKeypair = Keypair.fromSecretKey(new Uint8Array([
        252, 110, 126, 124, 18, 88, 197, 231, 44, 188, 131,
        110, 251, 232, 95, 235, 216, 218, 209, 26, 243, 158,
        229, 105, 99, 132, 122, 87, 173, 40, 89, 79, 240,
        17, 42, 136, 38, 51, 22, 105, 49, 227, 254, 221,
        242, 62, 75, 3, 150, 6, 159, 236, 210, 33, 130,
        190, 191, 189, 107, 124, 35, 73, 32, 23
    ]));

    // console.log(mintKeypair);

    anchor.setProvider(anchor.AnchorProvider.env());

    const program = anchor.workspace.solStakingV2 as Program<SolStakingV2>;

    async function createMintToken() {
        const mint = await createMint(
            connection,
            payer.payer,
            payer.publicKey,
            payer.publicKey,
            9,
            mintKeypair,
        );

        console.log(mint);
    }

    it("Is initialized!", async () => {

        // await createMintToken();

        let [vaultAccount] = PublicKey.findProgramAddressSync(
            [Buffer.from("vault")],
            program.programId
        )

        // Add your test here.
        const tx = await program.methods.initialize()
            .accounts({
                signer: payer.publicKey,
                tokenVaultAccount: vaultAccount,
                mint: mintKeypair.publicKey,
            })
            .rpc();
        console.log("Your transaction signature", tx);
    });
});

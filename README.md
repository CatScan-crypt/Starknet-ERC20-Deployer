<p align="center">
<img src="https://github.com/user-attachments/assets/56bd716b-1c89-4d3c-b03c-abb76dedcf78">
 </p>

 <h1 align="center">
 ERC20 Token Deployer for Starknet
 </h1>
 
An easy-to-install and deploy tool for publishing an ERC20 token on [Starknet](https://www.starknet.io/). &nbsp; \
With a simple installation and deployment process, you can quickly create and customize your ERC20 token on Starknet.
&nbsp;
&nbsp;


## Menu📑

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [First Time Deployment](#first-time-deployment)
- [Customization](#customization)
- [Verification](#verification)
- [TODO](#todo)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [Tested Environment](#tested-environment)

---

&nbsp;
## 🛠️Prerequisites🛠️
You can use this tool on:
- Bash: Linux Ubuntu > 24.04 | Windows - [WSL2](https://www.sitepoint.com/wsl2)

Before using this tool, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22.11.0 or higher)
- [curl](https://curl.se/)
- [git](https://git-scm.com/)&nbsp; 

\
``
``
Additionally, you'll need a deployed wallet on seploia(testnet) on either [ArgentX](https://www.argent.xyz/)
[<img src="https://github.com/user-attachments/assets/bd83597e-0ee3-483a-b299-88959d43c743" width="25" height="23">](https://www.argent.xyz/) 
or 
[Braavos](https://braavos.app/)
[<img src="https://github.com/user-attachments/assets/6391770a-c8a0-4f73-83fb-595bf13e137e" width="30" height="30">](https://braavos.app/)
for a test and mainnet deployment. &nbsp;

After you choose a wallet, change the network to sepolia(testnet): &nbsp; \
In Braavos just go to wallet setting and click on networks and change to sepolia. &nbsp; \
For ArgentX you can use [How to change network for ArgentX guide.](https://docs.argent.xyz/argent-wallets/argent-x/adding-custom-rpcs) &nbsp; 

To deploy a test token and to deploy the wallet on the blockchain you'll need some ETH in your wallet, you can use [blast's free faucet](https://blastapi.io/faucets/starknet-sepolia-eth) or [alchemy's free faucet](https://www.alchemy.com/faucets/starknet-sepolia) &nbsp; 

After your wallet is funded you can proceed to set it up on chain (deploy): &nbsp; \
[How to deploy guide for Braavos.](https://braavos.app/faq/setting-up-your-braavos-wallet-easy-starknet-guide/) &nbsp; \
[How to deploy guide for ArgentX.](https://support.argent.xyz/hc/en-us/articles/8802319054237-How-to-activate-deploy-my-Argent-X-wallet#:~:text=To%20deploy%20the%20wallet%2C%20you,to%20your%20own%20wallet%20address.) &nbsp; 

&nbsp;
&nbsp;

## Installation🦾

To install the Deployer, just run the following command in your terminal:

```bash
curl https://raw.githubusercontent.com/CatScan-crypt/Starknet-ERC20-Deployer/refs/heads/main/bash/curlPack.bash | bash
```
This will download and install all necessary files in your current working directory. &nbsp; \
&nbsp;

&nbsp;
Example output: &nbsp; \
![ezgif-5-6658a38e4b](https://github.com/user-attachments/assets/60a99204-7515-4cd3-891c-0b10b6193389)

&nbsp;
&nbsp;

## 🚀First Time Deployment🚀

Once the installation is complete, run the following command to deploy the test ERC20 token:

```bash
cd Starknet-ERC20-Deployer && npm run firstDeploy
```

You will be prompted to enter your private key and the address to deploy your token. &nbsp; \
Make sure your wallet is already deployed on sepolia with either [ArgentX](https://www.argent.xyz/) or [Braavos](https://braavos.xyz/).

&nbsp;
&nbsp;
Example first deploy: &nbsp; \
![ezgif-6-4abad87ace](https://github.com/user-attachments/assets/9c697f7d-697d-4730-a550-5eb3c5f9d7e0)

&nbsp;
## Customization📊

---

### Customizing Your ERC20 Token

After the initial test deployment, you can customize your ERC20 token by editing the `.env` file in the **Starknet-ERC20-Deployer** folder. Modify parameters like:

- Token Name
- Token Symbol
- Initial Supply

Alternatively, use the `npm run configure` command for command-line configuration:

```bash
npm run configure -- -m <method> -o <options>
```

### Methods

- **get**: Retrieves a configuration value (use `-o <parameter_name>`).
- **set**: Sets a configuration value (use `-o <parameter_name=value>`).

### Examples

- Get token name:

  ```bash
  npm run configure -- -m get -o TOKEN_NAME
  ```

- Set deployment network to mainnet:

  ```bash
  npm run configure -- -m set -o NETWORK=mainnet
  ```

---



Then to deploy your customized token just run:
```bash
npm run deploy
```
### Advanced Customization with Contract Builder

For more advanced customization, you can directly use the `Contract Builder`. This allows you to select specific components to include in your ERC20 contract, such as `mint_class` and `burn_class`.

&nbsp;
&nbsp;
`The upgraded contract will contain an automatic ownership on the token, this will give the ability to revoke or transfer ownership.`

To use the contract builder, run the following command:

```bash
npm run upgradeContract -- <component_name1> {`optional` <component_name2>}
```

Available components: `mint_class`, `burn_class`.

Example: To create a contract with mint and burn functionality, use:

```bash
npm run upgradeContract -- mint_class burn_class
```

&nbsp;
&nbsp;
&nbsp;

## Verification🐱‍👤
Deploying a base token with this tool will output a verified class hash, [sepolia class hash](https://sepolia.voyager.online/class/0x01a8655ab30252af2383100169d84090df14c39376d3da8fbe95d9548c2ad178).

[Sepolia deployed verified erc20 example.](https://sepolia.voyager.online/contract/0x001f7b137c8A87BFA8DD39EAdd0737784a3Da0d1c7Be415B8f74F4B5881eBD5C#tokenHolders) &nbsp; 

This tool also includes a script to verify your deployed contract on Voyager Block Explorer. To verify the contract, run the following command:

```bash
npm run verify
```

This will read the last deployed token and produce a Voyager verification.

You can use the `--name` flag to specify a name for the verification:

```bash
npm run verify -- --name theNameYouWant
```

In case you don't provide a name using the `--name` flag, the script will use the `class hash` of the contract as the verification name.



&nbsp;

## TODO✅

<h2>The following features are planned for future updates:</h2>
<details> 
<summary><h2> Phase 1(Completed)🎉 </h2> </summary>

- [x] Adding an example GIF or video for easier understanding.
- [x] Verifying the contract on Voyager.
- [x] Adding a CLI for easier configuration.
- [x] Introducing a component builder for customizing options like **ownable**, **mintable**, **burnable**, etc.
- [x] Adding Voyager Verifier support for contract verification.
</details>
<details open> 
<summary> <h2> Phase 2(In progress...)🛠 </h2> </summary> 

- [ ] Serving with Express.
- [ ] Adding a basic React UI.
- [ ] Frontend wallet connections and methods.
- [ ] Implementing SQL for tracking deployments.
- [ ] Publishing test website. 
</details>
<details> 
<summary ><h2 >Phase 3(TBD)📝 </h2> </summary>

- [ ] TBD
- [ ] TBD
- [ ] TBD
- [ ] TBD
- [ ] TBD
</details>

&nbsp;
## Acknowledgements💖
Special thanks to [robertkodra](https://github.com/robertkodra) for the examples and guidance shared on BasecampX, which helped in the creation of this project. 
&nbsp;
&nbsp;
## License🔐 
This project is licensed under the GNU License - see the [LICENSE](LICENSE) file for details.
&nbsp;
&nbsp;
## Tested Environment
- **OS**: Windows 10 WSL2: Ubuntu 24.04
- **Node.js Version**: v22.11.0



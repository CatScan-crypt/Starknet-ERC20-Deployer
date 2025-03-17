// src/utils/getCallData.js

import { CallData } from "starknet";
import { erc20ClassAbi } from "../components/erc20_class_abi";

export function getCallData(address, name, symbol, initialSupply) {
  const calldata = new CallData(erc20ClassAbi).compile("constructor", {
    name: name,
    symbol: symbol,
    decimals: 18n,
    initial_supply: { low: BigInt(initialSupply) * 10n ** 18n, high: 0n },
    recipient: address,
    permitted_minter: address,
    provisional_governance_admin: address,
    upgrade_delay: 0n,
  });
  return calldata;
}

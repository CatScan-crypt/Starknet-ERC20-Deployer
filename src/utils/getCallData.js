// src/utils/getCallData.js

import { CallData } from "starknet";
import sierraCodeRaw from "./contractClass.json";

export function getCallData(address, name, symbol, initialSupply) {
  const calldata = new CallData(sierraCodeRaw.abi).compile("constructor", {
    name: name,
    initial_value: initialSupply,
    symbol: symbol,
    decimals: 18n,
    owner: address,
    fixed_supply: { low: BigInt(initialSupply) * 10n ** 18n, high: 0n },
    recipient: address,
    account: address,
  });
  return calldata;
}

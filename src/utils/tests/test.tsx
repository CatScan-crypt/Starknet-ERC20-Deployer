import React from "react"; 
import {
  type UseDeclareContractArgs,
  useDeclareContract,
} from "@starknet-react/core";
import stringify from "safe-stable-stringify";
import sierraCodeRaw from "./boilerplate_erc20_contract.contract_class.json";
import casmCodeRaw from "./boilerplate_erc20_contract.compiled_contract_class.json";
import {hash} from "starknet";

export default function DeclareContract() {
  return (
    <div>
      <DeclareContractInner />
    </div>
  );
}

function DeclareContractInner() {
  const { isError, isPending, data, error, declare } = useDeclareContract({
    params,
  });

  return (
    <div>
      <p>Params</p>
      <p>Response</p>
      <pre>
        {stringify(
          {
            data,
            isPending,
            isError,
            error: error?.message,
          },
          null,
          2,
        )}
      </pre>
      <button
        onClick={() => declare()}
        disabled={isPending}
      >
        {isPending ? "Declaring..." : "Declare Contract"}
      </button>
    </div>
  );
}

// Contract params
const params: UseDeclareContractArgs = {
  compiled_class_hash: hash.computeCompiledClassHash(casmCodeRaw), 
  contract_class: {
    abi: JSON.stringify(sierraCodeRaw.abi), 
    contract_class_version: "0.1.0", 
    sierra_program: sierraCodeRaw.sierra_program, 
    entry_points_by_type: sierraCodeRaw.entry_points_by_type, 
  },
};

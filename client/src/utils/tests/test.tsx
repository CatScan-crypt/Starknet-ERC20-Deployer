import React from "react"; // This is required in a module context if you're using JSX
import {
  type UseDeclareContractArgs,
  useDeclareContract,
} from "@starknet-react/core";
import stringify from "safe-stable-stringify";
import sierraCodeRaw from "./boilerplate_erc20_contract.contract_class.json";
import casmCodeRaw from "./boilerplate_erc20_contract.compiled_contract_class.json";
import {hash } from "starknet";

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
      <pre>{stringify(params, null, 2)}</pre>

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
  compiled_class_hash: hash.computeCompiledClassHash(casmCodeRaw), // Compute the compiled class hash from the casm
  contract_class: {
    abi: JSON.stringify(sierraCodeRaw.abi), // Ensure ABI is properly stringified
    contract_class_version: "0x01", // Ensure you're using the correct contract version
    sierra_program: sierraCodeRaw.sierra_program, // Provide the Sierra program
    entry_points_by_type: sierraCodeRaw.entry_points_by_type, // Provide the entry points
  },
};

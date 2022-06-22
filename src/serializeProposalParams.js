import { useState } from "react";
import { useWasm } from "./WasmLoader";

export function SerializeProposal() {
  const { serializeParams } = useWasm();
  const [serializedParams, setSerializedParams] = useState("");
  const [err, setErr] = useState("");

  const onClick = () => {
    const params = {
      TxnID: 1234,
      ProposalHashData: "+KzyZSly8Amuqh2bYc/NhnArMJPBnDBJYE8Z24yzePM=",
    };

    try {
      const serialized = serializeParams(params);
      setSerializedParams(serialized.toString());
    } catch (err) {
      console.log("err", err);
      setErr(JSON.stringify(err));
    }
  };

  return (
    <div>
      {serializedParams && <p>Params success: {serializedParams}</p>}
      {err && <p>Params err: {err}</p>}
      <button onClick={onClick}>Serialize approve params</button>
    </div>
  );
}

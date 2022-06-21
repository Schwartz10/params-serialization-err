import { useContext, createContext } from "react";
import dynamic from "next/dynamic";

export const WasmContext = createContext({ loaded: false });

// Loads the wasm asyncronously and exposes it via a hook
export const WasmLoader = dynamic({
  ssr: false,
  loader: async () => {
    let rustModule = {};
    let loadError = null;
    try {
      rustModule = await import("@zondax/filecoin-signing-tools");
    } catch (err) {
      loadError = true;
    }

    const WasmProvider = ({ children }) => {
      return (
        <WasmContext.Provider value={{ ...rustModule, loaded: true }}>
          {children}
        </WasmContext.Provider>
      );
    };

    return WasmProvider;
  },
});

export const useWasm = () => {
  return useContext(WasmContext);
};

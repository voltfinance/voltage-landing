import { useCallback, useEffect, useState } from "react";

export default function useSingleContractCall (contract, method, args = []) {
    const [result, setResult] = useState(null)

    const call = async () => {
        if (!contract || !method) return

        const callResult = await contract.methods[method](...args).call()
        setResult(callResult)
    }

    useEffect(() => {
        call()
    }, [contract, method])

    return result
}

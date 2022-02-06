import { fromWei, toWei } from '../utils/number';
import { useTokenSaleContract } from "./useContract";
import useSingleContractCall from "./useSingleContractCall";
import useTokenBalance from "./useTokenBalance";

export default function useDerivedTokenSaleState (address, typedValue) {
    const tokenSaleContract = useTokenSaleContract(address)
    
    const typedValueWei = toWei(typedValue, 18)

    const startTime = useSingleContractCall(tokenSaleContract, 'startTime')
    const token = useSingleContractCall(tokenSaleContract, 'token')
    
    const maxPurchaseWei = useSingleContractCall(tokenSaleContract, 'purchaseLimit')
    const maxPurchase = fromWei(maxPurchaseWei, 18)
    
    const tokenBalanceWei = useTokenBalance(token)
    const tokenBalance = fromWei(tokenBalanceWei, 18)

    let inputError
    if (typedValue > maxPurchase) {
        inputError = 'Amount greater than max purchase amount'
    }

    return {
        tokenBalance,
        startTime,
        typedValueWei,
        inputError
    }
}

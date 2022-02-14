import React, {useEffect, useState} from "react";
import wallet from "@/assets/images/wallet.svg";
import { useWeb3Context } from '../../context/web3'
import useSwitchNetwork from '../../hooks/useSwitchNetwork'
import useFuseBalance from '../../hooks/useFuseBalance'
import { fromWei } from '../../utils/number'


const HomePage = () => {

  const { account, toggleWeb3Modal, chainId } = useWeb3Context()
  const switchNetwork = useSwitchNetwork()
  const fuseBalance = fromWei(useFuseBalance(account)  )

  return (
    <>
    
                   
    {!account ? (
        <button className='button-baseline' onClick={toggleWeb3Modal}>
          Connect wallet
        </button>
      ) : chainId !== 122 ? (
        <button className='button-baseline' onClick={switchNetwork}>
          Switch to Fuse
        </button>
      ) : (
       <div style={{display: 'flex', flexWrap: 'wrap'}}>
     <button className='button-balance' style={{borderLeft: '0px'}}>
     {Number(fuseBalance).toFixed(2)} Fuse
        </button>
        <button className="button-web3">
        {account.substring(0, 2)}...{account.substring(38)}
        <span></span>
        </button>
       </div>
      )}
        
          </>
  )

};

export default HomePage;

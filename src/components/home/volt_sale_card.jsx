import React, { useCallback, useState } from "react";
import useDerivedTokenSaleState from "../../hooks/useDerivedTokenSaleState";
import useSwapCallback from "../../hooks/useSwapCallback";
import NumericalInput from "../common/numerical_input";
import Select from "../common/select";
import arrowIcon from "../../assets/images/arrow.svg";
import info from "../../assets/images/info.svg";
import voltInfo from "../../assets/images/volt_info.png";
import docs from "../../assets/images/voltage_docs.svg";

import { useWeb3Context } from "../../context/web3";
import useSwitchNetwork from "../../hooks/useSwitchNetwork";
import { toast } from "react-toastify";
import Modal from "react-modal";
import styled from "styled-components";

const VoltSaleCard = () => {
  const { account, toggleWeb3Modal, chainId } = useWeb3Context();

  const [typedValue, setTypedValue] = useState();

  const [tokenSaleAddress, setTokenSaleAddress] = useState(null);

  const { tokenAmount, typedValueWei, fuseBalance, inputError } =
    useDerivedTokenSaleState(tokenSaleAddress, typedValue);

  const swapCallback = useSwapCallback(tokenSaleAddress);

  const switchNetwork = useSwitchNetwork();

  const tokenSaleContracts = CONFIG?.tokenSaleContracts ?? {};

  const options = Object.keys(tokenSaleContracts).map((tokenSaleContract) => ({
    value: tokenSaleContracts[tokenSaleContract],
    label: tokenSaleContract,
  }));

  const onMax = useCallback(() => {
    setTypedValue(fuseBalance);
  }, [fuseBalance]);

  const onSwap = useCallback(async () => {
    if (!swapCallback) return;

    try {
      await swapCallback(typedValueWei);

      setTypedValue(undefined);
      setTokenSaleAddress(undefined);
      toast.success("Swap successful");
    } catch (error) {
      console.error("Swap failed", error);
      toast.error("Swap failed");
    }
  }, [swapCallback, typedValueWei, setTypedValue, setTokenSaleAddress]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const Gradient = styled.div`
    padding: 20px;
    border-radius: 10px;
    color: linear-gradient(110deg, #3ad889 -43%, #f3fc1fc9 100%);
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 1.75px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(110deg, #3ad889 -43%, #f3fc1fc9 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #0b0c13 inset;
  `;

  const modalStyle = {
    overlay: {
      background: "transparent",
    },
    content: {
      color: "white",
      border: "none",
      background: "#0B0C13",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px"
    },
  };

  const style = {
    textAlign: 'right',
    ':hover': {
      textDecoration: 'underline',
      color: '#ffffff'
    }
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Voltage Info"
      >
        <Gradient>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={voltInfo} width={"685px"} />
            <a href="https://docs.voltage.finance" style={style}>
              {" "}
              <img src={docs} style={{ marginRight: "8px" }} />
              Voltage Docs →
            </a>
          </div>
        </Gradient>
      </Modal>
      <div className="eco-round-card grid-container">
        <div className="grid-x grid-margin-x align-bottom">
          <div className="cell small-12">
            <NumericalInput
              label="FUSE"
              value={typedValue}
              onChange={setTypedValue}
              onMax={onMax}
              showMax
            />
          </div>
          <div className="cell small-12">
            <Select
              placeholder="Choose price"
              defaultValue={tokenSaleAddress}
              onChange={(option) => setTokenSaleAddress(option.value)}
              options={options}
            />
          </div>
        </div>

        <div className="eco-round-card__arrow-icon">
          <img src={arrowIcon} alt="arrow icon" />
        </div>

        <div className="grid-x">
          <div className="small-24">
            <NumericalInput label="VOLT" value={tokenAmount} />
          </div>
        </div>
        {!account ? (
          <button className="button button--primary" onClick={toggleWeb3Modal}>
            Connect wallet
          </button>
        ) : chainId !== 122 ? (
          <button className="button button--primary" onClick={switchNetwork}>
            Switch to Fuse
          </button>
        ) : (
          <button
            className="button button--primary"
            onClick={onSwap}
            disabled={!!inputError}
          >
            {inputError ?? "Swap"}
          </button>
        )}
        <div className="info" onClick={openModal}>
          <span>
            More Info <img src={info} />
          </span>{" "}
        </div>
      </div>
    </>
  );
};

export default VoltSaleCard;

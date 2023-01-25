import { isAndroid, isBrowser, isIOS, isMobile } from 'react-device-detect'
import Arrow from '../../assets/arrow.svg'
import RocketShip from '../../assets/rocket-ship.png'
import Download from './download'

const EarlyAccessModal = () => {
  return (
    <div className="early-access-modal ">
      <div className="early-access-modal__content">
        <div className="early-access-modal__header">Join the mobile DeFi revolution</div>
        <div className="early-access-modal__body">
          <div>
            The waitlist is open, join and participate for a <b>$2000 prize</b>
          </div>

          <div>
            <span className="text-white">Get early access</span> to discover everything the Volt app has to offer
          </div>
        </div>

        <div
          onClick={() => {
            if (!isBrowser) {
              window.open('https://get.voltage.finance/gBMb', '_blank')
            }
          }}
          className="early-access-modal__download"
        >
          Download App
          <img className="early-access-modal__arrow" src={Arrow} />
        </div>
        <div className={`early-access-modal__buttons`}>
          <Download fluid type="apple" />
          <Download fluid type="google" />
        </div>
      </div>
      <img className="early-access-modal__image" src={RocketShip} />
    </div>
  )
}

export default EarlyAccessModal

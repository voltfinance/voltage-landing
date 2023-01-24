import { isBrowser } from 'react-device-detect'
import AppleLogo from '../../assets/apple-black.svg'
import GoogleLogo from '../../assets/google-black.svg'

const SOURCES = {
  apple: {
    desktopUrl: ' https://apps.apple.com/us/app/volt-defi/id6444159237',
    mobileUrl: 'https://get.voltage.finance/gBMb',
    logo: AppleLogo,
    text: 'Apple Store',
  },
  google: {
    desktopUrl: 'https://play.google.com/store/apps/details?id=finance.voltage.app',
    mobileUrl: 'https://get.voltage.finance/gBMb',
    logo: GoogleLogo,
    text: 'Google Store',
  },
}

const Download = ({ type }) => {
  let { mobileUrl, desktopUrl, logo, text } = SOURCES[type]
  return (
    <button
      onClick={() => {
        window.location = isBrowser ? desktopUrl : mobileUrl
      }}
      className="button--logo"
    >
      <img src={logo} />
      <div className="mt-0.5"> {text}</div>
    </button>
  )
}

export default Download

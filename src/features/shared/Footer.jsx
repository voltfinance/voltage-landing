import Logo from '../../assets/logo.svg'
import VoltTokenSymbol from '../../assets/volt.svg'
import Social from './Social'

const LINKS = [
  {
    name: 'Getting Started',
    to: 'https://docs-voltage.gitbook.io/voltage/welcome/introduction',
  },
  {
    to: 'https://staking.fuse.io/',
    name: 'Fuse Staking',
  },
  {
    to: 'https://chargeweb3.com/',
    name: 'Fuse Charge',
  },
  {
    to: '/app',
    name: 'The Volt App',
  },
  {
    to: 'https://docs-voltage.gitbook.io/voltage/welcome/introduction',
    name: 'Voltage Docs',
  },
  {
    to: 'https://form.typeform.com/to/RLauPver',
    name: 'Work with us',
  },
  {
    to: 'https://app.termly.io/document/privacy-policy/97091c5a-9b1a-4ad8-830a-f42931536a41',
    name: 'Privacy Policy',
  },
  {
    to: 'https://app.termly.io/document/terms-and-conditions/a0570e0f-56b0-4c85-b677-d819f6318e10',
    name: 'Terms & Conditions',
  },
]

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} className="footer__logo" />

      <div className="footer__container">
        <div className="links">
          {LINKS.map(({ name, to, onClick, icon }) => (
            <div
              onClick={async () => {
                if (onClick) {
                  return onClick()
                }

                window.open(to, '_blank')
              }}
              className={`links__item ${icon && 'flex'}`}
            >
              {name}
            </div>
          ))}
          <br></br>
          <div
            onClick={async () => {
              const tokenAddress = '0x34Ef2Cc892a88415e9f02b91BfA9c91fC0bE6bD4'
              const tokenSymbol = 'VOLT'
              const tokenDecimals = 18
              const tokenImage =
                'https://raw.githubusercontent.com/voltfinance/token-logos/main/logos/0x34Ef2Cc892a88415e9f02b91BfA9c91fC0bE6bD4/logo.png'
              try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await ethereum.request({
                  method: 'wallet_watchAsset',
                  params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                      address: tokenAddress, // The address that the token is at.
                      symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                      decimals: tokenDecimals, // The number of decimals in the token
                      image: tokenImage, // A string url of the token logo
                    },
                  },
                })

                if (wasAdded) {
                  console.log('Thanks for your interest!')
                } else {
                  console.log('Your loss!')
                }
              } catch (error) {
                console.log(error)
              }
            }}
            className="links__icon"
          >
            <img src={VoltTokenSymbol} />
            Add VOLT token
          </div>
        </div>

        <div className="footer__contact">
          <form className="signup" action="https://formspree.io/f/maykerbr" method="POST">
            <input type="email" name="email" placeholder="Enter Email" className="signup__input" />
            <button className="signup__button">Sign up</button>
          </form>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Footer

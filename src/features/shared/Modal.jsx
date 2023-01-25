import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'react-feather'
const Modal = ({ isOpen = true, onClose = () => {}, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [isOpen])
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, position: 'absolute', zIndex: 9999999999, background: 'rgba(0,0,0,0.5)' }}
            transition={{
              duration: 0.3,
            }}
          >
            <motion.div
              className="modal__content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
              }}
            >
              <div
                onClick={() => {
                  onClose()
                }}
                style={{ zIndex: 9999, cursor: 'pointer', position: 'absolute', right: '10px', top: '10px' }}
              >
                <X color="white" size={20} opacity={0.4} />
              </div>
              {children}
            </motion.div>
          </motion.div>
        </>
      )}{' '}
    </AnimatePresence>
  )
}

export default Modal

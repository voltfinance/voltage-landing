import React, { useState } from 'react'
import { object, string } from 'yup'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
// import axios from 'axios'
import { useModal } from 'react-modal-hook'
import ReactModal from 'react-modal'

const ERROR_MESSAGE = 'Something went wrong &#128078'

const NewsletterForm = () => {
  const dispatch = useDispatch()
  const [src, setSrc] = useState(null)

  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen overlayClassName='modal__overlay' className='modal__content'>
        <div className='iframe'>
          <iframe sameSite='none' secure={true} src={`https://gleam.io/1l1hH/frictionless-defi-landing-page?email=${src}`} frameBorder="0" allowFullScreen></iframe>
        </div>
      </ReactModal>
    )
  }, [src])

  const SignupSchema = object().shape({
    email: string().email().required()
  })

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { email } = values
        const body = {
          accountAddress: email,
          email,
          provider: 'HDWallet',
          subscribe: true,
          source: 'fuse.fi',
          displayName: 'fuse.fi'
        }

        try {
          setSrc(encodeURIComponent(email))
          // await axios.post('https://studio.fuse.io/api/v2/users', { body })
          // dispatch({ type: 'START_ANIMATION' })
          // setTimeout(() => {
          //   dispatch({ type: 'STOP_ANIMATION' })
          // }, 3000)
          // setSubmitting(true)
          // resetForm({ email: '' })
          // // if (response.status === 200) {
          // // } else if (response.status === 500) {
          // //   dispatch({ type: 'START_ANIMATION' })
          // //   setTimeout(() => {
          // //     dispatch({ type: 'STOP_ANIMATION' })
          // //   }, 3000)
          // //   setSubmitting(true)
          // // }
          showModal()
        } catch (error) {
          resetForm({ email: '' })
          setTimeout(() => {
          }, 3000)
          setSubmitting(true)
        }
      }}
    >
      {({ isSubmitting, dirty }) => (
        <Form className='form cell shrink'>
          <Field
            type='email'
            className='form__input'
            placeholder='Enter email'
            name='email'
          />
          <button type='submit' disabled={!dirty || isSubmitting} className='form__button'>Join Us! $50K Sweepstake</button>
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm

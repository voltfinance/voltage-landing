import React, { useState } from 'react'
import { object, string } from 'yup'
import { Formik, Form, Field } from 'formik'
import { useModal } from 'react-modal-hook'
import ReactModal from 'react-modal'

const NewsletterForm = ({ setMenuOpen, isOpen }) => {
  const [src, setSrc] = useState(null)

  const [showModal] = useModal(() => {
    return (
      <ReactModal isOpen={isOpen} overlayClassName='modal__overlay' className='modal__content'>
        <div className='iframe'>
          <iframe samesite='none' secure='true' src={`https://gleam.io/1l1hH/frictionless-defi-landing-page?email=${src}`} frameBorder='0' allowFullScreen />
        </div>
      </ReactModal>
    )
  }, [src, isOpen])

  const SignupSchema = object().shape({
    email: string().email().required()
  })

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { email } = values
        try {
          setSrc(encodeURIComponent(email))
          showModal()
          setMenuOpen(true)
        } catch (error) {
          resetForm({ email: '' })
          setTimeout(() => {
          }, 3000)
          setSubmitting(true)
        }
      }}
    >
      {({ isSubmitting, dirty }) => (
        <div className='form__wrapper'>
          <Form className='form cell shrink'>
            <Field
              type='email'
              className='form__input'
              placeholder='Enter email'
              name='email'
            />
            <button type='submit' disabled={!dirty || isSubmitting} className='form__button'>Sign for updates</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default NewsletterForm

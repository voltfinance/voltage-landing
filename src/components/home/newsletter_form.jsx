import React from 'react'
import { object, string } from 'yup'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'

const ERROR_MESSAGE = 'Something went wrong &#128078'

const NewsletterForm = () => {
  const dispatch = useDispatch()

  const SignupSchema = object().shape({
    email: string().email().required()
  })

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { email } = values
        const user = {
          accountAddress: email,
          email: email,
          provider: 'HDWallet',
          subscribe: true,
          source: 'fuse.fi',
          displayName: 'fuse.fi'
        }

        try {
          const response = await fetch('https://studio.fuse.io/api/v2/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(user)
          })

          dispatch({ type: 'START_ANIMATION' })
          setTimeout(() => {
            dispatch({ type: 'STOP_ANIMATION' })
          }, 3000)
          setSubmitting(true)
          resetForm({ email: '' })
          // if (response.status === 200) {
          // } else if (response.status === 500) {
          //   dispatch({ type: 'START_ANIMATION' })
          //   setTimeout(() => {
          //     dispatch({ type: 'STOP_ANIMATION' })
          //   }, 3000)
          //   setSubmitting(true)
          // }

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
          <button type='submit' disabled={!dirty || isSubmitting} className='form__button'>Sign for updates</button>
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm

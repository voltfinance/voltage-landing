import React from 'react'
import { object, string } from 'yup'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import axios from 'axios'

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
        const body = {
          accountAddress: email,
          email,
          provider: 'HDWallet',
          subscribe: true,
          source: 'fuse.fi',
          displayName: 'fuse.fi'
        }

        try {
          // const params = new URLSearchParams();
          // params.append('email', email);
          // params.append('api_key', 'bb1aae830b77944dea73be2774a2dc01e096e01b');
          // const response = await axios.post('https://api.kickofflabs.com/v1/157998/subscribe', params)
          // console.log({ ...response.data })
          // if (response.status === 200) {
          //   const infoRes = await axios.get(`https://api.kickofflabs.com/v1/157998/info?email=${email}`)
          //   console.log({ ...infoRes.data })
          // }
          await axios.post('https://studio.fuse.io/api/v2/users', { body })

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
          {/* <Field
            type='email'
            className='form__input'
            placeholder='Enter email'
            name='email'
            />
          */}

          <button type='button' disabled={!dirty || isSubmitting} className='form__button'>
            <a className="e-widget no-button generic-loader" href="https://gleam.io/1l1hH/frictionless-defi-landing-page" rel="nofollow">
              Join sweepstake $10k
            </a>
          </button>
          <script type="text/javascript" src="https://widget.gleamjs.io/e.js" async={true}></script>
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm

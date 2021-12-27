import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

import Layout from '../components/Layout'

// Some tips on animations: https://play.tailwindcss.com/YeZIs0aejf

// this is a tmp fix as react-hook-form is working on this issue: https://github.com/react-hook-form/resolvers/issues/271
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { yupResolver } = require('@hookform/resolvers/yup')

// react-hook-form example: https://react-hook-form.com/get-started#TypeScript'
// example with Yup validation: https://jasonwatmore.com/post/2021/09/03/next-js-form-validation-example-with-react-hook-form
interface IFormInput {
  firstName: string
  lastName: string
  email: string
  message: string
  phone: string
  type: string
}

const schema = yup.object({
  firstName: yup.string().required('First name is required').max(20, 'First name cannot be longer than 20 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .max(20, 'Last name cannot be longer than 20 characters')
    .matches(/^[a-z\']+$/i, "Last name must consist of a-z and ' characters"),
  email: yup.string().required('Email is required').email('Email is invalid'),
  type: yup.string().required('Type is required'),
  message: yup.string().required('Message is required').max(500),
  phone: yup
    .string()
    .when('type', { is: 'callback', then: yup.string().required('Phone is required when Type is Callback') }),
})

// TODO: put this in a common utility file
function classNames(...classes: any) { // eslint-disable-line
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) })

  const [showConfirm, setShowConfirm] = useState(false)

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    const ret = await fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    })
    if (ret.statusText !== 'OK') {
      console.error('Error response: ', ret)
    }
    // const elmnt = document.getElementById('top') as HTMLElement
    e?.target.reset()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setShowConfirm(true)
  }

  return (
    <Layout title='Contact | Webbtech'>
      <div className='bg-gray-100' id='top'>
        <div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 xl:py-20 lg:px-8'>
          <div className='relative bg-white shadow-xl rounded-2xl '>
            <h2 className='sr-only'>Contact us</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
              {/* Contact information */}
              <div className='relative overflow-hidden py-10 px-6 bg-gray-800 sm:px-10 xl:p-12 rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl '>
                <div className='absolute inset-0 pointer-events-none sm:hidden' aria-hidden='true'>
                  <svg
                    className='absolute inset-0 w-full h-full'
                    width={343}
                    height={388}
                    viewBox='0 0 343 388'
                    fill='none'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                      fill='url(#linear1)'
                      fillOpacity='.1'
                    />
                    <defs>
                      <linearGradient
                        id='linear1'
                        x1='254.553'
                        y1='107.554'
                        x2='961.66'
                        y2='814.66'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#fff' />
                        <stop offset={1} stopColor='#fff' stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                  aria-hidden='true'
                >
                  <svg
                    className='absolute inset-0 w-full h-full'
                    width={359}
                    height={339}
                    viewBox='0 0 359 339'
                    fill='none'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                      fill='url(#linear2)'
                      fillOpacity='.1'
                    />
                    <defs>
                      <linearGradient
                        id='linear2'
                        x1='192.553'
                        y1='28.553'
                        x2='899.66'
                        y2='735.66'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#fff' />
                        <stop offset={1} stopColor='#fff' stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
                  aria-hidden='true'
                >
                  <svg
                    className='absolute inset-0 w-full h-full'
                    width={160}
                    height={678}
                    viewBox='0 0 160 678'
                    fill='none'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                      fill='url(#linear3)'
                      fillOpacity='.1'
                    />
                    <defs>
                      <linearGradient
                        id='linear3'
                        x1='192.553'
                        y1='325.553'
                        x2='899.66'
                        y2='1032.66'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#fff' />
                        <stop offset={1} stopColor='#fff' stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className='text-3xl font-medium text-white'>Contact Information</h3>
                <dl className='mt-8 space-y-6'>
                  <dt>
                    <span className='sr-only'>Location</span>
                  </dt>
                  <dd className='flex text-base text-gray-200'>
                    Location:
                    <br />
                    Welland, Ontario, Canada
                  </dd>
                  <dt>
                    <span className='sr-only'>Office Hours</span>
                  </dt>
                  <dd className='flex text-base text-gray-200'>
                    Office Hours:
                    <br />
                    Mon-Fri 9:00AM to 5:00PM
                  </dd>
                </dl>
                <dl className='mt-8 space-y-6'>
                  {/*  <dt>
                    <span className='sr-only'>Phone number</span>
                  </dt>
                  <dd className='flex text-base text-gray-200'>
                    <PhoneIcon className='flex-shrink-0 w-6 h-6 text-gray-300' aria-hidden='true' />
                    <span className='ml-3'>+1 (905) 984-9393</span>
                  </dd> */}
                  <dt>
                    <span className='sr-only'>Email</span>
                  </dt>
                  <dd className='flex text-base text-gray-200'>
                    <MailIcon className='flex-shrink-0 w-6 h-6 text-gray-300' aria-hidden='true' />
                    <span className='ml-3'>info@webbtech.io</span>
                  </dd>
                </dl>
                <ul role='list' className='mt-8 flex space-x-12'>
                  {/*  <li>
                    <a className='text-gray-300 hover:text-gray-500' href='#'>
                      <span className='sr-only'>Facebook</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        aria-hidden='true'
                      >
                        <path
                          d='M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </li> */}
                  <li>
                    <a
                      className='text-gray-300 hover:text-gray-500'
                      href='https://github.com/pulpfree'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <span className='sr-only'>GitHub</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        aria-hidden='true'
                      >
                        <path
                          d='M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-300 hover:text-gray-500'
                      href='https://twitter.com/pulpfree'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <span className='sr-only'>Twitter</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        aria-hidden='true'
                      >
                        <path
                          d='M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                {/* <h3 className='sm:text-xl md:text-2xl font-medium text-gray-900'>{formMsg}</h3> */}
                <div className='relative'>
                  <h3
                    className={classNames(
                      'absolute',
                      showConfirm ? 'animate-fade-out opacity-0' : 'opacity-100',
                      'sm:text-xl md:text-2xl font-medium text-gray-900',
                    )}
                  >
                    Send us a message, we would love to hear from you!
                  </h3>
                  <div
                    className={classNames(
                      'absolute',
                      showConfirm ? 'animate-fade-in' : 'opacity-0',
                      'sm:text-xl md:text-2xl font-medium text-gray-900',
                    )}
                  >
                    Thanks so much!
                    <br />
                    Your message is on it&apos;s way to our desks
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classNames(
                    showConfirm && 'opacity-0 animate-fade-out',
                    'mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8',
                  )}
                >
                  <div>
                    <label htmlFor='firstName' className='form-label'>
                      First name
                    </label>
                    <div className='mt-1'>
                      <input
                        {...register('firstName')}
                        autoComplete='given-name'
                        className='form-input'
                        id='firstName'
                        name='firstName'
                        type='text'
                      />
                      <p className='form-error'>{errors.firstName?.message}</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor='lastName' className='form-label'>
                      Last name
                    </label>
                    <div className='mt-1'>
                      <input
                        {...register('lastName')}
                        autoComplete='family-name'
                        className='form-input'
                        id='lastName'
                        name='lastName'
                        type='text'
                      />
                      <p className='form-error'>{errors.lastName?.message}</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <div className='mt-1'>
                      <input
                        {...register('email')}
                        autoComplete='email'
                        className='form-input'
                        id='email'
                        name='email'
                        type='email'
                      />
                      <p className='form-error'>{errors.email?.message}</p>
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between'>
                      <label htmlFor='phone' className='form-label'>
                        Phone
                      </label>
                      <span id='phone-optional' className='text-sm text-gray-500'>
                        Optional
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        {...register('phone')}
                        aria-describedby='phone-optional'
                        autoComplete='tel'
                        className='form-input'
                        id='phone'
                        name='phone'
                        type='text'
                      />
                      <p className='form-error'>{errors.phone?.message}</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor='subject' className='form-label'>
                      Type
                    </label>
                    <div className='mt-1'>
                      <select {...register('type')} className='form-input'>
                        <option value=''></option>
                        <option value='callback'>Callback</option>
                        <option value='comment'>Comment</option>
                        <option value='question'>Question</option>
                      </select>
                      <p className='form-error'>{errors.type?.message}</p>
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label htmlFor='message' className='form-label'>
                        Message
                      </label>
                      <span id='message-max' className='text-sm text-gray-500'>
                        Max. 500 characters
                      </span>
                    </div>
                    <div className='mt-1'>
                      <textarea
                        {...register('message')}
                        aria-describedby='message-max'
                        className='form-input'
                        defaultValue={''}
                        id='message'
                        name='message'
                        rows={4}
                      />
                      <p className='form-error'>{errors.message?.message}</p>
                    </div>
                  </div>

                  <div className='sm:col-span-2 sm:flex sm:justify-end'>
                    <button
                      type='submit'
                      className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 transition duration-400 ease-in-out hover:bg-blue-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-accent sm:w-auto'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

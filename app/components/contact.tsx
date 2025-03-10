'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Cover } from '@/components/ui/cover';
import Notification from '@/components/daisyui/notification';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [showNotification, setShowNotification] = useState(false);

  async function onSubmit(data: FormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.success) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
      reset(); // Clear the form
    } else {
      setShowNotification(false);
    }



  }

  return (
    <>
      {showNotification && <Notification />}
      <form onSubmit={handleSubmit(onSubmit)} className=' max-w-md mx-auto relative p-8 rounded-md shadow-black shadow-2xl z-50 bg-clip-padding backdrop-filter backdrop-blur-xl'>
        <h1 className='mb-5 text-2xl font-semibold text-white text-center capitalize'><span className='text-blue-800'> stay </span><br /><Cover>in touch</Cover></h1>
        <br />
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-white'
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('name', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-white'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-white'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button type='submit' className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Submit
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;


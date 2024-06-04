
import { useForm,SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';


type contactProps ={
  fullname:string,
  email:string,
  subject:string,
  message:string
}
const contactSchema = yup.object().shape({
  fullname: yup.string().required('Full Name is Required'),
  email: yup.string().email('Invalid email').required('Email is Required'),
  subject: yup.string().required('Subject is Required'),
  message: yup.string().required('Message is Required')
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<contactProps>({
    resolver: yupResolver(contactSchema)
  });

 const onSubmit: SubmitHandler<contactProps> = async (data) => {
    const emailData = {
      personalizations: [
        {
          to: [{ email: 'ifeadelaja@gmail.com' }],
          subject: data.subject,
        },
      ],
      from: { email: data.email, name: data.fullname },
      content: [
        {
          type: 'text/plain',
          value: data.message,
        },
      ],
    };

    try {
      await axios.post('https://api.sendgrid.com/v3/mail/send', emailData, {
        headers: {
          Authorization: `Bearer YOUR_SENDGRID_API_KEY`,
          'Content-Type': 'application/json',
        },
      });
      alert('Message sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="playfair-display text-xl md:text-2xl lg:text-3xl font-bold py-2">Contact Us</h1>
        <div className="w-14 h-1 bg-[#BCDBFF] rounded-full" />
      </div>
      <div className="bg-white border-2 border-white shadow-xl max-w-2xl rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <form className="w-full mx-auto md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium open-sans text-gray-900 dark:text-white">Your Full Name</label>
              <input {...register('fullname')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium open-sans text-gray-900 dark:text-white">Your email</label>
              <input {...register('email')} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium open-sans text-gray-900 dark:text-white">Subject</label>
              <input {...register('subject')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium open-sans text-gray-900 dark:text-white">Message</label>
              <textarea {...register('message')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium open-sans rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Send Message
            </button>
          </form>
          <div className="w-full md:w-1/2">
            <img src="icons/customer_care.svg" alt="Customer Care" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

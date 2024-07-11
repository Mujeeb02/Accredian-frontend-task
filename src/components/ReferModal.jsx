import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Required'),
  referrerEmail: Yup.string().email('Invalid email address').required('Required'),
  refereeName: Yup.string().required('Required'),
  refereeEmail: Yup.string().email('Invalid email address').required('Required'),
});

API_URL=process.env.API_URL;
const ReferModal = ({ handleClose }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post(`${API_URL}`, values);
      toast("Referral successful");
      resetForm();
      handleClose();
    } catch (error) {
      alert('Error submitting referral. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 absolute z-50">
        <h2 className="text-xl font-semibold mb-4">Refer a Friend</h2>
        <Formik
          initialValues={{
            referrerName: '',
            referrerEmail: '',
            refereeName: '',
            refereeEmail: '',
            status: 'Pending',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Your Name</label>
                <Field
                  id="referrerName"
                  name="referrerName"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.referrerName && errors.referrerName && (
                  <div className="text-red-500 text-sm mt-1">{errors.referrerName}</div>
                )}
              </div>
              <div>
                <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Your Email</label>
                <Field
                  id="referrerEmail"
                  name="referrerEmail"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.referrerEmail && errors.referrerEmail && (
                  <div className="text-red-500 text-sm mt-1">{errors.referrerEmail}</div>
                )}
              </div>
              <div>
                <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Friend's Name</label>
                <Field
                  id="refereeName"
                  name="refereeName"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.refereeName && errors.refereeName && (
                  <div className="text-red-500 text-sm mt-1">{errors.refereeName}</div>
                )}
              </div>
              <div>
                <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Friend's Email</label>
                <Field
                  id="refereeEmail"
                  name="refereeEmail"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.refereeEmail && errors.refereeEmail && (
                  <div className="text-red-500 text-sm mt-1">{errors.refereeEmail}</div>
                )}
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={handleClose}
              >
                Close
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ReferModal;

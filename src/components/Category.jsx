import React from 'react';

const Category = () => {
  return (
    <div className='flex justify-center py-4'>
      <div className='bg-blue-100 flex items-center gap-8 px-8 py-2 rounded-full shadow-md'>
        <a href="#refer" className="text-gray-600 hover:text-blue-600 font-semibold">Refer</a>
        <a href="#benefits" className="text-gray-600 hover:text-blue-600 font-semibold">Benefits</a>
        <a href="#faqs" className="text-gray-600 hover:text-blue-600 font-semibold">FAQs</a>
        <a href="#support" className="text-gray-600 hover:text-blue-600 font-semibold">Support</a>
      </div>
    </div>
  );
};

export default Category;

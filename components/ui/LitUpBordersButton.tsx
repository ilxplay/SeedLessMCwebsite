import React from 'react'

const LitUpBordersButton = ({ title,
}: {
  title: string;


}
) => {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">

        {title}

      </div>
    </button>
  )
}

export default LitUpBordersButton
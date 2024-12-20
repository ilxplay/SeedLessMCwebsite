import React from 'react'

const LitUpBordersButton = ({ title, icon, position
}: {
  title: string;
  icon: React.ReactNode, position:
  string; handleClock?: () => void;
  otherClasses?: string;

}
) => {
  return (
    <button className="p-[3px] relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-2">
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </div>
    </button>
  )
}

export default LitUpBordersButton
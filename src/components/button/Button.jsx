import React from "react";
import cn from 'classnames'

const Button = ({ className, children, ...props}) => {
  return (
    <button
      type="button"
      className={cn("inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", {
        [className]: !!className
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

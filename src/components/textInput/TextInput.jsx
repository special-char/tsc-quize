import React, { memo } from "react";
import cn from "classnames";

const TextInput = ({ id, label, labelClass, inputClass, prefix, ...props }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      {label && (
        <label
          htmlFor={id}
          className={cn("block text-sm font-medium text-gray-700", {
            [labelClass]: !!labelClass,
          })}
        >
          {label}
        </label>
      )}
      <div className="mt-1 flex rounded-md shadow-sm">
        {prefix && <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
          {prefix}
        </span>}
        <input
          type="text"
          id={id}
          className={cn(
            "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            {
              [inputClass]: !!inputClass,
              'rounded-none rounded-r-md': !!prefix
            }
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default memo(TextInput);

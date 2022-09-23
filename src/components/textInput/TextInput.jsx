import React, { memo} from "react";
import cn from "classnames";

const TextInput = ({ id, label, labelClass, inputClass, ...props }) => {
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
      <input
        type="text"
        id={id}
        className={cn(
          "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
          {
            [inputClass]: !!inputClass,
          }
        )}
        {...props}
      />
    </div>
  );
};

export default memo(TextInput);

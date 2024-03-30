import { FaRegEdit } from "react-icons/fa";
const Card = ({ styles , title , description }) => {
  return (
    <div
      className={` ${styles}  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}
    >
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <FaRegEdit className="text-lg font-medium text-white" />
        </span>
      </div>
      <h3 className="mt-5 text-base font-medium tracking-tight">
      {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      {description}
      </p>
    </div>
  );
};

export default Card;

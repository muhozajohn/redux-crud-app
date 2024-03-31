import { FaRegEdit, FaTrash } from "react-icons/fa";
import Button from "../components/UI/Button";
const Card = ({ styles, title, description, deleteD, updateD }) => {
  return (
    <div
      className={` ${styles} flex justify-between flex-col ga-2  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}
    >
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <FaRegEdit className="text-lg font-medium text-white" />
        </span>
      </div>
      <h3 className="mt-5 text-base font-medium tracking-tight">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {description}
      </p>
      <div className="flex justify-between gap-2 ">
        <Button click={deleteD} styles={`hover:bg-red-600`} icon={<FaTrash />} />
        <Button click={updateD} icon={<FaRegEdit />} />
      </div>
    </div>
  );
};

export default Card;

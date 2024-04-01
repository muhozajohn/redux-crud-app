import { FaRegEdit, FaTrash } from "react-icons/fa";
import Button from "../components/UI/Button";
const Card = ({ styles, title, description, deleteD, image, updateD }) => {
  return (
    <div
      className={` ${styles} flex justify-between flex-col ga-2  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}
    >
      <div className=" w-14 h-14 ">
        <span className="inline-flex items-center justify-center p-1 bg-indigo-500 rounded-md shadow-lg">
         <img src={image} alt={image} />
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

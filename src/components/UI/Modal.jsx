import Button from "./Button";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Modal = ({ close, data, updateTutorial }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const UpDate = async () => {
    try {
      if (formik.isValid) {
        const formData = {
          title: formik.values.title,
          description: formik.values.description,
          // image: formik.values.image,
        };
        console.log("formData", formData);
        setLoading(true);
        dispatch(updateTutorial({ id: data._id, formData }));
        setLoading(false);
        // close();
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed To Ceate Tutorial", error);
    }
  };

  const initialValues = {
    title: data?.title || "",
    description: data?.description || "",
    // image: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: UpDate,
  });

  return (
    <div className=" p-4 absolute top-0 left-0 h-full items-end flex flex-col gap-6 justify-center bg-white w-full ">
      <Button icon={<IoMdClose />} styles="w-fit mr-40  " click={close} />
      <div className="flex flex-col gap-2 w-full md:w-1/2 mx-auto ">
        <h2 className="text-lg font-extrabold">Update Tutorial</h2>
        <form
          action=""
          className="flex flex-col gap-2"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-1 ">
            <label>Title</label>

            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              id="title"
              className=" bg-transparent p-2 border border-gray-400 outline-none "
              placeholder="Title .."
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label>Description</label>
            <textarea
              placeholder="Description .."
              className=" bg-transparent p-2 border border-gray-400 outline-none "
              name=""
              id="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          {loading ? (
            <Button
              icon={<AiOutlineLoading3Quarters />}
              styles={`scale-100`}
              click={() => formik.submitForm()}
            />
          ) : (
            <Button
              title="Update"
              styles={`scale-100`}
              click={() => formik.submitForm()}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;

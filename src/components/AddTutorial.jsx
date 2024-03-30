import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createTutorial } from "../slices/tutorialsSlice";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AddTutorial = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const AddTutorial = async () => {
    try {
      if (formik.isValid) {
        // const formData = new FormData();
        // formData.append("title", formik.values.title);
        // formData.append("description", formik.values.description);
        // formData.append("image", formik.values.image);
        const formData = {
          title: formik.values.title,
          description: formik.values.description,
          // image: formik.values.image,
        };
        console.log("formData", formData);
        setLoading(true);
        dispatch(createTutorial(formData));
        formik.resetForm();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed To Ceate Tutorial", error);
    }
  };

  const initialValues = {
    title: "",
    description: "",
    // image: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.title) {
      errors.title = "Title Required";
    }
    if (!values.description) {
      errors.description = "description Required";
    }
    // if (!values.image) {
    //   errors.image = "Image Required";
    // }
    return errors;
  };
  const formik = useFormik({
    validate,
    initialValues,
    onSubmit: AddTutorial,
  });

  return (
    <div className="flex flex-col gap-2 w-full md:w-1/2 mx-auto ">
      <h2 className="text-lg font-extrabold">AddTutorial</h2>
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-1 ">
          <label>Title</label>
          {formik.touched.title && formik.errors.title ? (
            <div className=" text-sm text-red-800 font-normal capitalize ">
              {formik.errors.title}
            </div>
          ) : null}
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
        {/* <div className="flex flex-col gap-1 ">
          <label>Image</label>
          {formik.touched.image && formik.errors.image ? (
            <div className=" text-sm text-red-800 font-normal capitalize">
              {formik.errors.image}
            </div>
          ) : null}
          <input
            type="file"
            id="image"
            onChange={(e) => formik.setFieldValue("image", e.target.files[0])}
            onBlur={formik.handleBlur}
            accept="image/*"
            className=" bg-transparent p-2 border border-gray-400 outline-none "
            placeholder="Title .."
          />
        </div> */}
        <div className="flex flex-col gap-1 ">
          <label>Description</label>
          {formik.touched.description && formik.errors.description ? (
            <div className=" text-sm text-red-800 font-normal capitalize">
              {formik.errors.description}
            </div>
          ) : null}
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
            title="AddTutorial"
            styles={`scale-100`}
            click={() => formik.submitForm()}
          />
        )}
      </form>
    </div>
  );
};

export default AddTutorial;

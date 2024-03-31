import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className=" py-3 w-full flex justify-center items-center ">
      <HashLoader color="#0075FF" loading={isLoading} size={20} />
    </div>
  );
};

export default Loading;
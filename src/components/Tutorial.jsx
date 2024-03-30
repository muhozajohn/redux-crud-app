import Card from "./Card";
import { selectAllTutorial, retrieveTutorials } from "../slices/tutorialsSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Tutorial = ({ data, card, data1 }) => {
  const dispatch = useDispatch();
  const tutorial = useSelector(selectAllTutorial);

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {card && (
        <>
          <Card
            styles={data}
            title="Redux ToolKit"
            description="The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space."
          />
        </>
      )}
      {data1 && (
        <>
          {tutorial.map((item, index) => (
            <Card
              key={index}
              styles={data}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Tutorial;

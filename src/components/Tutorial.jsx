import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Modal from "./UI/Modal";
import {
  selectAllTutorial,
  retrieveTutorials,
  deleteTutorial,
  updateTutorial,
} from "../slices/tutorialsSlice";

const Tutorial = () => {
  const dispatch = useDispatch();
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const tutorial = useSelector(selectAllTutorial);

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTutorial({ id }));
  };

  const handleSelectTutorial = (tutorialData) => {
    setSelectedTutorial(tutorialData);
  };

  const handleCloseModal = () => {
    setSelectedTutorial(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {tutorial.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            updateD={() => handleSelectTutorial(item)}
            deleteD={() => handleDelete(item._id)}
          />
        ))}
      </div>
      {selectedTutorial && (
        <Modal
          data={selectedTutorial}
          close={handleCloseModal}
          updateTutorial={updateTutorial} 
        />
      )}
    </>
  );
};

export default Tutorial;

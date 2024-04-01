import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Modal from "./UI/Modal";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
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
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  console.log(token)
  useEffect(() => {
    try {
      const tuto = dispatch(retrieveTutorials());
      if (tuto) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch project details", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTutorial({ id, token }));
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
        {loading ? (
          <Loading />
        ) : tutorial.length > 0 ? (
          tutorial.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item?.Image}
              description={item.description}
              updateD={() => handleSelectTutorial(item)}
              deleteD={() => handleDelete(item._id)}
            />
          ))
        ) : (
          <NoData />
        )}
      </div>
      {selectedTutorial && (
        <Modal
          data={selectedTutorial}
          close={handleCloseModal}
          updateTutorial={updateTutorial}
          retrieveTutorials={retrieveTutorials}
        />
      )}
    </>
  );
};

export default Tutorial;

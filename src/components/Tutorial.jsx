import Card from "./Card";
const Tutorial = ({data , card , data1}) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {card  && (
        <>
          <Card styles={data} />
          <Card styles={data} />
          <Card styles={data} />
          <Card styles={data} />
        </>
      )}
      {
        data1 && (
          <>
          <Card styles={data} />
        
          </>

      )}
    </div>
  );
};

export default Tutorial;

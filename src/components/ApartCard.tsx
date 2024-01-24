import { useNavigate } from "react-router-dom";

const ApartCard = ({
  title,
  cover,
  id,
}: {
  title: string;
  cover: string;
  id: string;
}) => {
  const navigate = useNavigate();
  const goToApart = (id: string) => {
    navigate(`/apart/${id}`);
  };

  return (
    <div
      className="w-full h-[300px] bg-primary rounded-xl  
        flex items-end p-4 bg-cover bg-center cursor-pointer relative"
      style={{ backgroundImage: `url(${cover})` }}
      onClick={() => goToApart(id)}
    >
      <h3 className="text-white z-10">{title}</h3>
      <div
        className="brightness-5 left-0 absolute w-full h-full rounded-xl bottom-0 z-1
      bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.4)]"
      ></div>
    </div>
  );
};

export default ApartCard;

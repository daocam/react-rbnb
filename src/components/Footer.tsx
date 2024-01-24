import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[150px] bg-black rounded-xl flex items-end justify-center py-4 mt-10">
      <div className="text-white text-center">
        <Link to="/">
          <h2 className="text-4xl mb-6">APART</h2>
        </Link>
        <p className="">Copyright © 2024 Tous droits réservés</p>
      </div>
    </div>
  );
};

export default Footer;

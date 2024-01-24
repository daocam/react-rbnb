import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-full text-primary text-center">
      <h2 className="sm:text-[200px] text-[150px] font-bold">404</h2>
      <p className="sm:text-3xl text-xl py-10">
        Oups! La page que vous demandez n'existe pas
      </p>

      <Link className="underline underline-offset-2 text-md" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;

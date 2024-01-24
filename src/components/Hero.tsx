import { HeroProps } from "../types";

const Hero = ({ children }: HeroProps) => {
  return (
    <div
      className="w-full h-[200px] bg-primary rounded-xl flex items-center justify-center text-white bg-cover bg-center px-4 sm:px-0"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1543306755-b5cbf78d366f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW4lMjBwbGVpbiUyMGFpcnxlbnwwfDB8MHx8fDA%3D)",
      }}
    >
      <h2 className="sm:text-4xl text-3xl">{children}</h2>
    </div>
  );
};

export default Hero;

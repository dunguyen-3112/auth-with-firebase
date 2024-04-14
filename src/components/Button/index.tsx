import { HTMLProps, startTransition } from "react";

interface IButton extends HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({ children, onClick, ...rest }: IButton) => {
  const handleClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  return (
    <button
      className="bg-orange-300 px-5 py-2 rounded-md text-white font-bold w-full"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

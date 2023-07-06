import { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

interface UsernameFormProps {
  isVisible: boolean;
  username: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function UsernameForm({
  isVisible,
  username,
  handleChange,
}: UsernameFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <motion.div
      className="top-half flex flex-col items-center"
      animate={!isVisible ? { y: 0 } : { y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="mb-3">Dev Duel</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-gray-900 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={username}
            onChange={handleChange}
            aria-label="username"
            placeholder="Enter username"
          />
          <button
            className="flex-shrink-0 hover:bg-gray-900 border-none hover:text-white text-sm border-4 text-black py-1 px-2 rounded"
            type="submit"
          >
            Create Game
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default UsernameForm;

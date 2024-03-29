import { useState } from "react";

const UserAction = () => {
  const [val, setVal] = useState("");

  const handleCLick = async () =>
    setVal(await Promise.resolve("Another Sub title"));

  return (
    <div>
      <button onClick={handleCLick}>Get Another Sub Title</button>
      <div>
        <span>{val}</span>
      </div>
    </div>
  );
};

export default UserAction;

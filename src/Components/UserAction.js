import { useState } from "react";

const UserAction = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      <button onClick={() => setVal("New Sub title")}>Get Sub Title</button>
      <div>
        <span>{val}</span>
      </div>
    </div>
  );
};

export default UserAction;

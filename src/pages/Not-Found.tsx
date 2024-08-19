import { MdOutlineError } from "react-icons/md";
import { TbError404 } from "react-icons/tb";
const NotFound = () => {
  return (
    <div className="container not-found">
      <TbError404 />
      <h1>Page Not Found</h1>
      <MdOutlineError />
    </div>
  );
};

export default NotFound;
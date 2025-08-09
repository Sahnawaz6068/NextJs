import axios from "axios";

const page = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/v1/user/details");
const data=response.data;

  return (
    <div>
      User Page
      <div>
        {data.name}
        <br />
        {data.email}
      </div>
    </div>
  );
};

export default page;

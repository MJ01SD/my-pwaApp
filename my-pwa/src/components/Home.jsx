import React from "react";

const Home = () => {
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,0]);
  const [flag, setFlag] = useState(false);

  return (
      <div className="">
        <input type="text" placeholder="enter tasks.."/>
        <button className="">Add</button>
        {
          numbers?.map((value) => {
            return <div key={value} className={`${flag ? "text-sm" : "text-lg"}`}>{value}</div>
          })
        }
      </div>
  );
};
export default Home;

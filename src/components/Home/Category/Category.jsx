import { useNavigate } from "react-router-dom";

import "./category.scss";

const Category = ({ categories, setCategories }) => {
  // console.log(categories);
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt="Category 1"
            />
          </div>
        ))}

        {/* <div className="category">
          <img src={cat1} alt="Category 1" />
        </div>
        <div className="category">
          <img src={cat2} alt="Category 1" />
        </div>
        <div className="category">
          <img src={cat3} alt="Category 1" />
        </div>
        <div className="category">
          <img src={cat4} alt="Category 1" />
        </div> */}
      </div>
    </div>
  );
};

export default Category;

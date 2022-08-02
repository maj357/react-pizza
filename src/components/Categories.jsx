import React from "react";

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Огненные",
    "Морские",
    "Детские",
  ];

  // Если мы на событие клика будем вызывать только одну фун-ию, то можно обойтись и анонимной () =>, но если мы помимо этого будем еще в этой фун-кции что то делать, то тогда нужно писать отдельную фун-кцию
  const onClickCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeCategory === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

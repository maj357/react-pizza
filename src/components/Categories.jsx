import React from "react";

function Categories({ categoryValue, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Огненные",
    "Морские",
    "Детские",
  ];

  // Если мы на событие клика будем вызывать только одну фун-ию, то можно обойтись и анонимной () =>, но если мы помимо этого будем еще в этой фун-кции что то делать, то тогда нужно писать отдельную фун-кцию
  // const onClickCategory = (index) => {
  //   setActiveCategory(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={categoryValue === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

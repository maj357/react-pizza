import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSceleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="133" cy="119" r="120" />
    <rect x="30" y="255" rx="15" ry="15" width="219" height="25" />
    <rect x="101" y="294" rx="0" ry="0" width="54" height="0" />
    <rect x="92" y="317" rx="0" ry="0" width="0" height="18" />
    <rect x="1" y="297" rx="5" ry="5" width="275" height="90" />
    <rect x="116" y="399" rx="26" ry="26" width="163" height="50" />
    <rect x="0" y="406" rx="5" ry="5" width="110" height="35" />
  </ContentLoader>
);

export default PizzaSceleton;

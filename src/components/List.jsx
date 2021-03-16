import React, { useContext } from "react";
import { appContext } from "./Context";

import Card from "./Card";

export default function List() {
  const { hotels } = useContext(appContext);

  return (
    <div>
      {hotels.length
        ? hotels.map((elem, index) => {
            return <Card hotel={elem} key={index} />;
          })
        : null}
    </div>
  );
}

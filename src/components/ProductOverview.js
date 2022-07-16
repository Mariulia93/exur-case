import Product from "./Product";
import { useState, useEffect } from "react";
const axios = require("axios").default;

export default function ProductOverview({ products }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://pfp-public-productdb-api.azurewebsites.net/api/picture/{{id}}"
      )
      .then((response) => {setImages(response.data.results);
    })
    .catch(function (error){
        console.log("no images");
    });
  }, []);
  useEffect(() => {
    console.log(images);
  });
  return (
    <div className="ProductOverview">
      <section>
        <h1 className="blueH">Se farlige og mangelfulde produkter</h1>
        <p>
          Når myndigheder i Danmark og resten af EU opdager et farligt eller et
          mangelfuldt produkt, offentliggør danske myndigheder information om de
          farlige og mangelfulde produkter. Alvorligheden af fejl og mangler
          afgør om et produkt er farligt eller mangelfuldt. Du kan komme
          alvorligt til skade på et farligt produkt. Et mangelfuldt produkt har
          mindre fejl på produktet eller i dokumentationen, men det er ikke
          farligt at bruge.
        </p>
        <p className="DropDownMenu">
          Leder du efter farlige fra for 10.juli 2021?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#0540F2"
            className="bi bi-arrow-down-square ArrowBottom"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </p>
      </section>
      <section className="ProductOverviewGrid">
        {products.map((p) => (
          <Product {...p} images={images}/>
        ))}
      </section>
    </div>
  );
}

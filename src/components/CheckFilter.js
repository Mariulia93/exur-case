// import { useState } from "react";
// import Product from "./Product";

export default function CheckFilter() {
  // const [farlige, setFarlige] = useState([]);
  // const [mangelfulde, setMangelfulde] = useState([]);

  // function FilterByProductType (product){
  //     if (product.complyanceType.id === 1){
  //         setFarlige;
  //         console.log(fage is working);
  //     }
  // }
  return (
    <section>
      <div className="FilterByProduct">
        <p className="boldFilter">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#0540F2"
            className="bi bi-arrow-right-square ArrowBottom"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
          Filtrer på produkttype
        </p>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox1">Farlige produkter</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox2">Mangelfulde produkter</label>
        </div>
      </div>
      <div className="FilterByCategory">
        <p className="boldFilter">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#0540F2"
            className="bi bi-arrow-right-square ArrowBottom"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
          Filtrer på produktkategori
        </p>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox3">Byggevarer</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox4">Diverse</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox5">ECO-design og energimærkning</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox6">Elevatorer og tovbaneanlæg</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox7">Elprodukter</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox8">Fyrværkeri og eksplosiver</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox9">Gasprodukter</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox10">Generel produktsikkerhed</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox11">Legetøj</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label for="checkbox12">Maskiner</label>
        </div>
        <input type="checkbox"></input>
        <label for="checkbox13">Metrologi</label>
      </div>
      <div>
        <input type="checkbox"></input>
        <label for="checkbox14">Personlige værnemidler</label>
      </div>
    </section>
  );
}

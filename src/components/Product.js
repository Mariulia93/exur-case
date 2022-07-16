export default function Product(props) {
  return (
    <article className="ProductBox">
      <img
        className="ImgSize"
        src={`https://pfp-public-productdb-api.azurewebsites.net/api/picture/${props.id}`}
        alt=" "
      ></img>
      <p className="blueTitle">{props.name}</p>
      <p className="categoryP">Kategory: {props.complianceType.name}</p>
    </article>
  );
}

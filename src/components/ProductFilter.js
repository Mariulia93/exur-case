import FreeTextSearch from "./FreeTextSearch";
import CheckFilter from "./CheckFilter";

export default function ProductFilter() {
  return (
    <section className="ProductFilter">
      <FreeTextSearch />
      <CheckFilter />
    </section>
  );
}

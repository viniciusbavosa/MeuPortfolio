import { FaSpinner } from "react-icons/fa";

export function Loader() {
  return (
    <section className="section-content-wrapper">
      <h1 className="section-title">
        <FaSpinner className="spinner-loader" />
      </h1>
    </section>
  );
}

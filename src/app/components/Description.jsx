export default function Description({ product }) {
  const description = product.description ?? "No description available.";

  return (
    <div className="mt-4 mb-4">
      <p className="leading-6 font-light text-gray-600">{description}</p>
    </div>
  );
}

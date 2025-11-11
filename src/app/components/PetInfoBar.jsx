export default function PetInfoBar({ product }) {
  const tags = product?.tags || [];

  return (
    <div className="mt-4 mb-4 flex gap-4">
      {tags.map((tag, index) => (
        <p
          key={index}
          className="rounded-full bg-blue-200 px-4 py-2 text-green-800/70"
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </p>
      ))}
    </div>
  );
}

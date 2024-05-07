export default function Button({
  children,
  type = "button"
}) {
  return (
    <button
      type={type}
      className={`bg-white rounded-2xl px-8 py-3 text-2xl hover:bg-calme-dark hover:text-white duration-300`}
    >
      {children}
    </button>
  )
}
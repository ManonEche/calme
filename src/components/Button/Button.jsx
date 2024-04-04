export default function Button({
  children
}) {
  return (
    <button
      className={`bg-white rounded-2xl px-8 py-4 text-2xl hover:bg-calme-light duration-150`}
    >
      {children}
    </button>
  )
}
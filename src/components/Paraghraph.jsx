import "../scss/components/paraghraph.scss";
export default function Paraghraph({children, name}) {
  return (
    <p className={name}>
      {children}
    </p>
  )
}
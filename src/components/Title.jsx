import "../scss/components/title.scss";
export default function Title({children}) {
  return (
    <h4 className="title">
      {children}
    </h4>
  )
}
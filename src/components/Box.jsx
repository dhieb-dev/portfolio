import "../scss/components/box.scss";
export default function Box({children}) {
  return (
    <div className="box">
      {children}
    </div>
  )
}
import "./InputControl.css"

function InputControl({ label, ...props }) {
  return (
    <div className="wrapper">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  )
}

export default InputControl

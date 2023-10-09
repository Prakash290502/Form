
const Display = ({ formData }) => {
  return (
    <div>
      <h1>Form Data</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}

export default Display;

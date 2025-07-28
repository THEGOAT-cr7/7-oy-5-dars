function Forminput({ label, type, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type={type}
        name={name}
        className="input w-full"
        placeholder="Type here"
      />
      <p className="label">Optional</p>
    </fieldset>
  );
}

export default Forminput;

function InputFieldComponent({ field, form }: any) {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleChange = (e: any) => {
    if (e.target.value.length <= 30) {
      field.onChange(e);
    }
  };
  return (
    <div style={{ marginBottom: 30 }}>
      <input id={name} {...field} onChange={handleChange} />
      <div className="custom-error">
        <span>{showError ? errors[name] : null}</span>
      </div>
    </div>
  );
}
export default InputFieldComponent;

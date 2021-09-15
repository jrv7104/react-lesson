function Input({ handler }) {
  const handleChange = (event) => {
    // Notify parent component of this change so that the state can be updated
    handler(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name" className="sr-only">
        Enter a name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter a name"
        className="border-2 border-black my-4 rounded-sm"
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;

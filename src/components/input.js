const Input = (attributes) => {
    const changeHandler = (event) => {
      const recentText = event.target.value;
      attributes.name === "title" ? 
        (attributes.onChange((oldText) => recentText.length <= 50 ? recentText : oldText))
        : (attributes.onChange(recentText));
    };
  
    return (
      <>
        {attributes.type === "textarea" ? (
          <textarea
            {...attributes}
            className=""
            value={attributes.value}
            spellCheck={false}
            onChange={changeHandler}
          />
        ) : (
          <input
            {...attributes}
            className=""
            spellCheck={false}
            value={attributes.value}
            onChange={changeHandler}
          />
        )}
      </>
    );
  };
  
  export default Input;
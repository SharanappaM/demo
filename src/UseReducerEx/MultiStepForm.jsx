import React, { useReducer } from "react";

const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    address: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "SET_FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleNext = () => dispatch({ type: "NEXT_STEP" });
  const handlePrev = () => dispatch({ type: "PREV_STEP" });
  const handleReset = () => dispatch({ type: "RESET" });

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Step {state.step}</h2>

      {state.step === 1 && (
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={state.formData.name}
          onChange={handleChange}
        />
      )}

      {state.step === 2 && (
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={state.formData.email}
          onChange={handleChange}
        />
      )}

      {state.step === 3 && (
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={state.formData.address}
          onChange={handleChange}
        />
      )}

      <div style={{ marginTop: "20px" }}>
        {state.step > 1 && <button onClick={handlePrev}>Previous</button>}
        {state.step < 3 && <button onClick={handleNext}>Next</button>}
        {state.step === 3 && (
          <button onClick={handleReset}>Submit & Reset</button>
        )}
      </div>

      <pre>{JSON.stringify(state.formData, null, 2)}</pre>
    </div>
  );
}

export default MultiStepForm;

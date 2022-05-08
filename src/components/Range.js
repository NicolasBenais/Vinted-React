import { Range } from "react-range";

export default function CustomRange({
  step,
  values,
  min,
  max,
  onChange,
  onFinalChange,
}) {
  return (
    <Range
      step={step || 5}
      min={min || 0}
      max={max || 500}
      values={values}
      onChange={onChange}
      onFinalChange={onFinalChange || (() => {})}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "50%",
            backgroundColor: "#ccc",
            borderRadius: "4px",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ index, props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "15px",
            width: "15px",
            borderRadius: "99px",
            backgroundColor: "#2DB0BA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "white 1px solid",
            outline: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-28px",
              backgroundColor: "#2DB0BA",
              color: "white",
              fontSize: "12px",
              lineHeight: "10px",
              padding: "4px",
              borderRadius: "4px",
              width: "auto",
            }}
          >
            <div style={{ display: "flex" }}>
              <span>{values[index]} </span>
              <span> €</span>
            </div>
          </div>
        </div>
      )}
    />
  );
}

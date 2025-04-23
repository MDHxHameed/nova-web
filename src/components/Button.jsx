import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="nova-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

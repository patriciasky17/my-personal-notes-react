const Button = ({ label, event }) => {
    return (
        <button
            type="button"
            onClick={event}
            data-action={label}
        >
            {label}
        </button>
    );
};

export default Button;
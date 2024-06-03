interface ButtonProps {
    bgColor: string;
    textColor: string;
    text: string;
}

const Button = (props: ButtonProps) => {
    return (
        <>
            <button
                type="button"
                className={`${props.bgColor} ${props.textColor} focus:outline-none font-semibold hover:opacity-80 focus:ring-4 rounded-md text-sm px-5 py-2.5 mb-2`}
            >
                {props.text}
            </button>
        </>
    )
}

export default Button;

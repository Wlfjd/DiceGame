import './Button.css'

function Button({ children, my_click, color = "blue", classNamess = '' }) {
    const classNames = `Button ${color} ${classNamess}`;
    return (
        <button className={classNames} onClick={my_click}>
            {children}
        </button>
    )
}

export default Button
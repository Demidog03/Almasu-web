import classes from "./Modal.module.css";

function Modal({ children, visible, setVisible, className, ...props }) {
    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}
             {...props}
        >
            <div
                className={classes.myModalContent + " " + className}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;

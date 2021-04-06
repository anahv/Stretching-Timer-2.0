import React from "react"

function Stepper({title, content, content2, onPlus, onMinus, testId}) {

    const stepperContent = content2 ? <>{content}  / {content2}</> : content

    return (
        <div className="col-md-3">
            <p className="stepperTitle" data-testid={testId}>{title}</p>
            <h2 className="stepperContent">
                {stepperContent}
            </h2>
            <div className="buttons">
                <button
                    className="stepperButton"
                    onClick={onMinus}>
                    <i className="fa fa-minus" />
                </button>
                <button
                    className="stepperButton"
                    onClick={onPlus}>
                    <i className="fa fa-plus" />
                </button>
            </div>
        </div>
    )
}

export default Stepper
import React from "react"
import PropTypes from 'prop-types';

function Button({title, icon, testId, color, onClick, className, id}) {
  return (
    <button id={id} className="button col-md-2" onClick={onClick} style={{background:color}}>{title}<i data-testid={testId} className={`fa fa-${icon}`}/></button>
  )
}

// Add mandatory fields here: 
Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  testId: PropTypes.string,
  onClick: PropTypes.func, 
  id: PropTypes.string
}

export default Button

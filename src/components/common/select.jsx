import React from 'react'
import ReactSelect from 'react-select'

const Select = ({ defaultValue, onChange, options, placeholder, ...rest }) => {
  return (
    <ReactSelect
      {...rest}
      classNamePrefix='react-select'
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
    />
  )
}

export default Select

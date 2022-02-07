import React from 'react'
import ReactSelect from 'react-select'

const Select = ({ defaultValue, onChange, options, placeholder }) => {
  return (
    <ReactSelect
      classNamePrefix='react-select'
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
    />
  )
}

export default Select

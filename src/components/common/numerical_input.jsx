import React from 'react'

const inputRegex = /'^\\d*(?:\\\\[.])?\\d*$'/

const escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const NumericalInput = ({
  value,
  onChange,
  placeholder,
  label,
  showMax,
  onMax,
  ...rest
}) => {
  const enforce = input => {
    if (input !== '' || inputRegex.test(escapeRegExp(input))) {
      onChange(input)
    }
    if (!input) {
      onChange('')
    }
  }

  return (
    <div className='numerical-input'>
      {label && <div className='numerical-input__label'>{label}</div>}
      <div className='numerical-input__inner'>
        <input
          {...rest}
          value={value}
          onChange={event => {
            enforce(event.target.value.replace(/,/g, '.'))
          }}
          className='numerical-input__input'
          inputMode='decimal'
          title='Token Amount'
          autoComplete='off'
          autoCorrect='off'
          type='text'
          pattern='^[0-9]*[.,]?[0-9]*$'
          placeholder={placeholder || '0'}
          minLength={1}
          maxLength={79}
          spellCheck='false'
        />
        {showMax && (
          <button
            className='button button--primary button--small'
            onClick={onMax}
          >
            Max
          </button>
        )}
      </div>
    </div>
  )
}

export default NumericalInput

import React from 'react'
import { useState } from 'react'

export default function CheckBoxApp() {
  const [checkboxes, setCheckboxes] = useState({
    termRead: false,
    termAccepted: false,
    newsletter: true,
    salesOffers: true,
  })

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [checkboxName]: !prevCheckboxes[checkboxName],
    }))
  }

    return (
    <div>
      <label>
        <input
        type='checkbox'
        checked={checkboxes.termRead}
        onChange={() => handleCheckboxChange('termRead')}
        />
        I read the term of the app
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={checkboxes.termAccepted}
          onChange={() => handleCheckboxChange('termAccepted')}
        />
        I accept the term of the app
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={checkboxes.newsletter}
          onChange={() => handleCheckboxChange('newsletter')}
        />
        I want to get the weekly newsletter
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={checkboxes.salesOffers}
          onChange={() => handleCheckboxChange('salesOffers')}
        />
        I want to get sales and offers
      </label>
    </div>
  )
}

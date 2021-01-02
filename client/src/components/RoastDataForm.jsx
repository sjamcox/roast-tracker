import React from 'react'

const RoastDataForm = () => {
  return (
    <form id='roast-data'>
      <label for='model'>Roaster Model:</label>
      <select form='roast-data' name='roaster-model'>
        <option value='FreshRoast SR500'>FreshRoast SR500</option>
        <option value='FreshRoast SR540'>FreshRoast SR540</option>
      </select>
      <label for='origin'>Origin:</label>
      <input type='text' name='origin' />
      <label for='region'>Region:</label>
      <input type='text' name='region' />
      <label for='grams'>Grams:</label>
      <input type='text' name='grams' />
      <label for='ambient-temp'>Ambient Temp:</label>
      <input type='text' name='ambient-temp' />
      <label for='notes'>Roasting Notes:</label>
      <textarea name='notes' />
    </form>
  )
}

export default RoastDataForm
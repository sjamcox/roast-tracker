import React from 'react'

const RoastDataForm = ({ data, update }) => {
  return (
    <form id='roast-data'>
      <label htmlFor='model'>Roaster Model:</label>
      <select form='roast-data' name='roaster' onChange={(e) => update(e.target.name, e.target.value)}>
        <option value={null}>Select a roaster ...</option>
        <option value='FreshRoast SR500'>FreshRoast SR500</option>
        <option value='FreshRoast SR540'>FreshRoast SR540</option>
      </select>
      <label htmlFor='beanOrigin'>Bean Origin:</label>
      <input type='text' name='beanOrigin' value={data.beanOrigin} onChange={(e) => update(e.target.name, e.target.value)}/>
      <label htmlFor='weight'>Weight:</label>
      <input type='text' name='weight' value={data.weight} onChange={(e) => update(e.target.name, e.target.value)}/>
      <label htmlFor='ambientTemp'>Ambient Temp:</label>
      <input type='text' name='ambientTemp' value={data.ambientTemp} onChange={(e) => update(e.target.name, e.target.value)}/>
      <label htmlFor='notes'>Roasting Notes:</label>
      <textarea name='notes' value={data.notes} onChange={(e) => update(e.target.name, e.target.value)}/>
    </form>
  )
}

export default RoastDataForm
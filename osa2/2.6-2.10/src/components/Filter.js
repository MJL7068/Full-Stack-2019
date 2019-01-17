import React from 'react'

const Filter = ({condition, handleCondition}) => {
    return(
      <form>
        <div>
          rajaa näytettäviä <input value={condition} onChange={handleCondition}/>
        </div>
      </form>
    )
  }

export default Filter
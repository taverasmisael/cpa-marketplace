import React from 'react'

import TextField from 'react-md/lib/TextFields'
import SelectField from 'react-md/lib/SelectFields'
import Button from 'react-md/lib/Buttons'

const OffersFilter = ({
  countries = [],
  categories = [],
  filtering = {
    cpa: false,
    cpi: false,
    cpl: false
  },
  onFilter
}) => (
  <form className="md-grid" onSubmit={onFilter}>
    <h2>Filter</h2>
    <TextField
      id="name"
      label="Name or OfferId"
      lineDirection="center"
      placeholder="New iPhone"
      className="md-cell--bottom"
    />
    <SelectField
      id="countries"
      label="Country"
      placeholder="Placeholder"
      className="md-cell--12"
      menuItems={countries}
    />
    <SelectField id="vertical" label="Category" placeholder="Adult" className="md-cell--12" menuItems={categories} />
    <div className="md-grid">
      <div className="md-cell--4">
        <Button flat primary={filtering.cpa}>
          CPA
        </Button>
      </div>
      <div className="md-cell--4">
        <Button flat primary={filtering.cpi}>
          CPI
        </Button>
      </div>
      <div className="md-cell--4">
        <Button flat primary={filtering.cpl}>
          CPL
        </Button>
      </div>
    </div>
    <div className="md-grid">
      <Button raised className="md-cell">
        Clear
      </Button>
      <Button type="submit" raised secondary className="md-cell">
        Filter
      </Button>
    </div>
  </form>
)

export default OffersFilter

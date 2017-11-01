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
  onFilter,
  onResetFilter,
  onNameChange,
  onCountryChange,
  onCategoryChange,
  toggleCPA,
  toggleCPI,
  toggleCPL
}) => (
  <form className="md-grid" onSubmit={onFilter} onReset={onResetFilter}>
    <h2>Filter</h2>
    <TextField
      id="name"
      label="Name or OfferId"
      lineDirection="center"
      placeholder="New iPhone"
      className="md-cell--bottom"
      onChange={onNameChange}
    />
    <SelectField
      id="countries"
      label="Country"
      placeholder="Placeholder"
      className="md-cell--12"
      menuItems={countries}
      itemValue="id"
      onChange={onCountryChange}
    />
    <SelectField id="vertical" label="Category" placeholder="Adult" className="md-cell--12" menuItems={categories} onChange={onCategoryChange} itemValue="id" />
    <div className="md-grid">
      <div className="md-cell--4">
        <Button flat primary={filtering.cpa} onClick={toggleCPA}>
          CPA
        </Button>
      </div>
      <div className="md-cell--4">
        <Button flat primary={filtering.cpi} onClick={toggleCPI}>
          CPI
        </Button>
      </div>
      <div className="md-cell--4">
        <Button flat primary={filtering.cpl} onClick={toggleCPL}>
          CPL
        </Button>
      </div>
    </div>
    <div className="md-grid">
      <Button type="reset" raised className="md-cell">
        Clear
      </Button>
      <Button type="submit" raised secondary className="md-cell">
        Filter
      </Button>
    </div>
  </form>
)

export default OffersFilter

import React, { memo } from 'react'
import { Card, Typography, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

function Panel({ updateAt, onChange, data, country, getCoviddata }) {

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
      </ItemStyled>
    </MenuItem>
  )
  return (
    <Card>
      <CardPanelContentStyled>
        <div >
          <Typography variant="h5" component="span" color="primary">COVID19</Typography>
          <br/>
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography> 
          <br/>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)
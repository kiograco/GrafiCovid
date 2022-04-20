import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases,casesPerOneMillion,deathsPerOneMillion,totalTests,testsPerOneMillion } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />
  const internationalNumberFormat = new Intl.NumberFormat('en-US')
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(cases))} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(todayDeaths))} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(todayCases))} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(deaths))} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(casesPerOneMillion))} label="Casos por milhão" color="#6388a7" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(deathsPerOneMillion))} label="Mortos por milhão" color="#356118" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(totalTests))} label="Total de testes" color="#a75a12" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(testsPerOneMillion))} label="Testes por milhão" color="#360412" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(internationalNumberFormat.format(recovered))} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)
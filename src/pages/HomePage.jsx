import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from 'uuid';
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { ALL_COUNTRIES } from "../config";

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const navigate = useNavigate()

  const handleSearch = (search, region) => {
    let data = [...countries]

    if(region) {
      data = data.filter(el => el.region.includes(region))
    }
    if(search) {
      data = data.filter(el => el.name.toLowerCase().includes(search.trim().toLowerCase()))
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    if(!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }
  }, [])

  useEffect(() => {
    handleSearch()
  }, [countries])

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString()
              },
              {
                title: 'Region',
                description: c.region
              },
              {
                title: 'Capital',
                description: c.capital
              }
            ]
          }
          return <Card key={v4()} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />
        })}
      </List>
    </>
  )
}
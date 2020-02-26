import React from 'react'
import './App.css'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  TextField,
  Avatar,
  ListItemIcon
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { ShowChart, WbSunny, Explore, FastRewind } from '@material-ui/icons'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      item: {
        weather: '',
        temperature: '',
        icon: '',
        pressure: '',
        speed: ''
      },
      placeName: ''
    }
    this.apiToken = '586fff59618d6d3e1be423e10c6f0ae6'
  }

  async getData (id) {
    const getJSON = (uri, options) =>
      window
        .fetch(uri, options)
        .then(res => res.json())
        .then(json => ({
          weather: json.weather[0].description,
          icon: json.weather[0].icon,
          temperature: json.main.temp,
          pressure: json.main.pressure,
          speed: json.wind.speed
        }))

    const options = { method: 'get' }
    const uri =
      'https://api.openweathermap.org/data/2.5/weather?lang=ja&units=metric'
    const params = `&appid=${this.apiToken}&id=${id}`
    const data = await getJSON(uri + params, options)
    this.setState({ item: data })
  }

  handleUpdate (event) {
    const index = event.target.dataset.optionIndex
    const place = this.state.data[index]
    this.getData(place.id)
    this.setState({ placeName: place.name })
  }

  componentDidMount () {
    this.setState({
      data: [
        { name: '岡山県 岡山市', id: 1858311 },
        { name: '鳥取県 鳥取市', id: 1849892 },
        { name: '広島県 広島市', id: 1862413 },
        { name: '島根県 松江市', id: 1861084 },
        { name: '山口県 山口市', id: 1863418 },
        { name: '徳島県 徳島市', id: 1858902 },
        { name: '香川県 高松市', id: 1857665 },
        { name: '愛媛県 松山市', id: 1926099 },
        { name: '高知県 高知市', id: 1859146 },
        { name: '福岡県 福岡市', id: 1859307 },
        { name: '大分県 大分市', id: 1864750 },
        { name: '宮崎県 宮城市', id: 1856710 },
        { name: '佐賀県 佐賀市', id: 1853303 },
        { name: '熊本県 熊本市', id: 1858419 },
        { name: '長崎県 長崎市', id: 1856156 },
        { name: '鹿児島県 鹿児島市', id: 1860825 },
        { name: '沖縄県 那覇市', id: 1894616 }
      ]
    })
  }

  render () {
    console.log(this.state)
    return (
      <div className='App'>
        <Card>
          <div class='midashi'>
            <CardHeader title='中国・四国・九州地方の天気情報' />
          </div>
          <CardActions>
            <SelectorView
              data={this.state.data}
              handleUpdate={this.handleUpdate.bind(this)}
            />
          </CardActions>
          <CardContent>
            <ListView item={this.state.item} />
          </CardContent>
        </Card>
      </div>
    )
  }
}

const SelectorView = props => (
  <Autocomplete
    options={props.data}
    getOptionLabel={option => option.name}
    renderInput={params => (
      <TextField
        {...params}
        label='地域を選ぶ'
        variant='outlined'
        style={{ width: 500 }}
        fullWidth
      />
    )}
    onChange={props.handleUpdate}
  />
)
const ListView = props => {
  const { weather, icon, temperature, pressure, speed } = props.item
  const formatTemperature = temperature ? `気温 ${temperature}℃` : ''
  const formatPressure = pressure ? `気圧 ${pressure}Pa` : ''
  const formatSpeed = speed ? `風速 ${speed}m/s` : ''
  const path = `http://openweathermap.org/img/wn/${icon}.png`
  const image = icon ? <Avatar src={path} alt={weather} /> : <WbSunny />
  console.log('props', props)
  return (
    <List>
      <ListItem>
        <ListItemIcon>{image}</ListItemIcon>
        <ListItemText primary={weather} />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <ShowChart />
        </ListItemIcon>
        <ListItemText primary={formatTemperature} />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <Explore />
        </ListItemIcon>
        <ListItemText primary={formatPressure} />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <FastRewind />
        </ListItemIcon>
        <ListItemText primary={formatSpeed} />
      </ListItem>
    </List>
  )
}
export default App

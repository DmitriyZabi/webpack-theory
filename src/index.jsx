import Post from '@models/Post'
import json from '@/assets/json'
import WebPackLogo from '@/assets/logo.png'
import xml from '@/assets/xml.xml'
import csv from '@/assets/csv.csv'
import * as $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
import '@/styles/styles.css'
import '@/styles/less.less'
import '@/styles/scss.scss'
import '@/babel.js'

const post = new Post('Webpack Post Title', WebPackLogo)

console.log('Post to String', post.toString())
console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <h2>Pure CSS</h2>
    <hr />
    <div className="card-less">
      <h2>Less</h2>
    </div>
    <div className="card-scss">
      <h2>SCSS</h2>
    </div>
    <div className="card-jquery">
      <h2></h2>
    </div>
  </div>
)
render(<App />, document.getElementById('app'))

$('.card-jquery h2').text('Jquery is worked')

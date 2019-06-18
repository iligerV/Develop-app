import React from 'react'
import PropTypes from 'prop-types'
import { Article } from './Article'

class News extends React.Component {
  async componentDidMount() {
    const { getDatasSuccess, getDatasError } = this.props

    await fetch('/data/newsData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        return getDatasSuccess(data)
      })
      .catch(data => {
        getDatasError()
      })
  }

  renderMainNewsTemplate = () => {
    const { news } = this.props

    return (
      <div className="news">
        {this.renderNews()}
        {news.length ? (
          <strong className={'news__count'}>
            Всего новостей: {news.length}
          </strong>
        ) : null}
      </div>
    )
  }

  renderNews = () => {
    const { news } = this.props

    if (news.length) {
      return news.map(item => {
        if (item.text.match(/желтый/)) {
          return <Article className="yellow" key={item.id} data={item} />
        } else if (item.text.match(/голубой/)) {
          return <Article className="blue" key={item.id} data={item} />
        } else {
          return <Article className="" key={item.id} data={item} />
        }
      })
    }
  }

  render() {
    return <React.Fragment>{this.renderMainNewsTemplate()}</React.Fragment>
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired,
}

export { News }

import React from 'react'
import PropTypes from 'prop-types'
import { Article } from './Article' // идти в components не нужно, так как мы уже в этой директории

class News extends React.Component {
  renderMainNewsTemplate = () => {
    this.props.getDatas()
    const { data, isLoading } = this.props

    if (!isLoading) {
      return <p>Загрузка...</p>
    } else {
      return (
        <div className="news">
          {this.renderNews()}
          {data.length ? (
            <strong className={'news__count'}>
              Всего новостей: {data.length}
            </strong>
          ) : null}
        </div>
      )
    }
  }

  renderNews = () => {
    const { data } = this.props
    let newsTemplate = null

    data.length
      ? (newsTemplate = data.map(function(item) {
          let test
          if (item.text.match(/желтый/)) {
            test = <Article className="yellow" key={item.id} data={item} />
          } else if (item.text.match(/голубой/)) {
            test = <Article className="blue" key={item.id} data={item} />
          } else {
            test = <Article className="" key={item.id} data={item} />
          }
          return test
        }))
      : (newsTemplate = <p>К сожалению новостей нет</p>)

    return newsTemplate
  }

  render() {
    return <React.Fragment>{this.renderMainNewsTemplate()}</React.Fragment>
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired,
}

export { News }

import React from 'react' // подключение библиотеки React
import { connect } from 'react-redux'
import { Add } from '../components/Add' // ./ = текущая директория,
import { News } from '../components/News' // далее мы идем в директорию components и в нужный компонент
import { getDatas } from '../actions/NewsActions'
import './App.css' // подключение файла стилей

class App extends React.Component {
  static getDerivedStateFromProps(props) {
    let nextFilteredNews
    // смотрим в state.news (ранее смотрели в props)
    // и проверяем, чтобы не клоинировать null
    // например, в момент первой отрисовки
    if (Array.isArray(props.news)) {
      nextFilteredNews = [...props.news]
      nextFilteredNews.forEach(item => {
        if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
          item.bigText = 'СПАМ'
        }
      })
      return {
        filteredNews: nextFilteredNews,
      }
    }
    return null
  }

  handleAddNews = data => {
    // const nextNews = [data, ...this.props.news]
    // this.setState({ news: nextNews })
  }

  render() {
    const { news, getDatasAction } = this.props

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        <News
          isLoading={news.isLoading}
          data={news.news}
          getDatas={getDatasAction}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => {
  return {
    news: store.news,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDatasAction: () => dispatch(getDatas()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

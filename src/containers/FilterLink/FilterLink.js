import { connect } from '@tarojs/redux'
import Taro, { Component } from '@tarojs/taro'
import { Text } from '@tarojs/components'
import classnames from 'classnames'

import { setVisibilityFilter } from '../../actions'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'

import './FilterLink.scss'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const mapStateToProps = ({visibilityFilter}) => ({
  visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => {
    dispatch(setVisibilityFilter(filter))
  }
})

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class FilterLink extends Component {
  onClickHandler = () => {
    console.log('onClickHandler', this.props.filter)
    this.props.setFilter(this.props.filter)
  }

  render () {
    const {filter, visibilityFilter} = this.props
    const text = FILTER_TITLES[filter]
    const active = visibilityFilter === filter
    return (
      <Text
        className={classnames({'filters-link': true, 'selected': active})}
        onClick={this.onClickHandler}
      >
        {text}
      </Text>
    )
  }
}

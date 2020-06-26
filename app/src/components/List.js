import React from 'react'
import {connect} from 'react-redux'

const List = ({list, isLoading, error}) => {
  
    return (
        <div>
            {isLoading && <p>Loading, please wait...</p>}
            {/* Create more detailed list with pictures & styling for stretch */}
            {list && list.map((v, k) => <p key={k.id}>{v.name} <small><a href="#">view character</a></small></p>)}
            {/* make anchor act as a button to draw another component over the screen until it's closed displaying details about character */}
            {error && <p>An error has occured</p>}
        </div>
    )
}

const mapPropsToState = state => {
    return {
        isLoading: state.isLoading,
        list: state.list,
        error: state.error
    }

}

export default connect(mapPropsToState)(List)
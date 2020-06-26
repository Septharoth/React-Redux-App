import axios from 'axios'

export const BEGIN = "BEGIN"
export const SUCCESS = "SUCCESS"
export const FAIL = "FAIL"

export const api = data => dispatch => {
    dispatch({type: BEGIN})

    axios
        .get('https://rickandmortyapi.com/api/character')
        .then( res => {
            dispatch({type: SUCCESS, payload: res.data.results})
            console.log(res)
        })
        .catch( err => {
            dispatch({type: FAIL, payload: err.response})
        })
}
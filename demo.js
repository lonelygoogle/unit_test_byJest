import axios from 'axios'

export const runCallback = (callback) => {
    callback('hsq')
}

export const creatObject = (classItem) => {
    new classItem()
}

export const getData = () => {
    return axios.get('./api').then(res => res.data)
}
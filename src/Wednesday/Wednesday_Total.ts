import React from 'react'


// Вопрос:
//
// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true
//
// copy
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 XXX
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.
//
// Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?
//
// copy
// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// const store = createStore(combineReducers({
//     users: usersReducer
// }))
//
// store.XXX(() => {
//     console.log('state changed')
// })
//
// store.dispatch({type: 'ANY'})
//
// Вопрос:
//
// Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
//
// copy
// import {combineReducers, createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector} from 'react-redux'
// import React from 'react'
//
// let initialState = {items:
//    [
//     {id: 1, name: 'Dimych'},
//     {id: 2, name: 'Ignat'}
//    ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
//
// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })
//
// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>
//
// const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//
//   const users = XXX
// ???? useSelector(selector) ????
//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <Users/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )
//
// Вопрос:
//
// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
//
// Найдите в чем причина.
//
// Исправленную версию строки напишите в качестве ответа.
//
// Пример ответа: const incSec = () => setSeconds(seconds + 1)
//    ??? const incSec = useCallback(() => setSeconds(seconds + 1), [seconds]) ???
//
//
// copy
// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//     const [temp, setTemp] = useState(100)
//     const [seconds, setSeconds] = useState(0)
//
//     const resetTemp = useCallback(() => setTemp(0), [])
//
//     const incSec = useCallback(() => setSeconds(seconds + 1), [])
//
//     return <>
//         <TempDisplay temp={temp} resetTemp={resetTemp}/>
//         <SecDisplay seconds={seconds} incSec={incSec}/>
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{marginBottom: '10px'}} onClick={props.reset}>
//             <p>
//                 <b>Температура: </b>{props.temp} &#176;
//             </p>
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//         </div>
//     )
// })
//
// const SecDisplay = React.memo((props: any) => {
//     console.log('Render SecDisplay')
//     return (
//         <div>
//             <p><b>Секунды:</b> {props.seconds} c </p>
//             <button style={{marginRight: '20px'}}
//                     onClick={props.incSec}>
//                 Увеличить время на 1 секунду
//             </button>
//         </div>
//     )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'))

// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// Найдите в чем причина.
// Исправленную версию строки напишите в качестве ответа

// Пример ответа: const incSec = () => setSeconds(seconds + 1)
//
// Что нужно написать вместо XXX и YYY,
//
// чтобы избавиться от лишнего перерендера компонента ButtonsPanel
//
// при нажатии на кнопку "Увеличить на 10 секунд" ?
//
// Ответ дайте через пробел: 111 222
//
// copy
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
//
// type ButtonType = {
//    id: number
//    title: string
//    forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//    {id: 1, title: 'delete', forAdminOnly: true},
//    {id: 2, title: 'update', forAdminOnly: true},
//    {id: 3, title: 'create', forAdminOnly: false},
// ]
//
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//
//    const [seconds, setSeconds] = useState(0)
//
//    const increaseSeconds = () => setSeconds(seconds + 10)
//
//    const correctButtons = XXX(() => {
//        return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//    }, [YYY])
//
//    return <>
//        <ButtonsPanel buttons={correctButtons}/>
//        <div>
//            <p>
//                <b>Секунды: {seconds}</b>
//            </p>
//            <button onClick={increaseSeconds}>
//                Увеличить на 10 секунд
//            </button>
//        </div>
//    </>
// }
//
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//    console.log('Render ButtonsPanel')
//    return (
//        <div style={{marginBottom: '15px'}}>
//            <div style={{marginBottom: '15px'}}>
//                <b>Панель с кнопками</b>
//            </div>
//            <div>
//                {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//            </div>
//        </div>
//    )
// })
//
// Вопрос:
//
// Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть: true true true?
//
// copy
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'USER-NAME-UPDATED':
//             return XXX
//
//         default:
//             return state
//     }
// }
//
// const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})
//
//
// const state = {
//     count: 10,
//     user: {
//                name: 'Dimych',
//                age: 18,
//                isMarried: true,
//                status: "offline"
//    },
//     books: ['you don\'t know JS']
// }
// const newState = reducer(state, updateUserNameAC('Dmitry'))
//
// console.log(newState.user.name === 'Dmitry')
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)
import React from 'react'


// Вопрос:
//
// Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?
//
// copy
// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
//
// const store = createStore(combineReducers({
//     users: usersReducer,
//     XXX
// }))
//
// store.subscribe(() => {
//    const login = store.getState().auth.login
//    console.log(login)
// })
//
// store.dispatch({type: 'ANY'})
// export default store;
//
// Вопрос:
//
// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
//
// copy
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return {
//                 ...state,
//                 [action.trackId]: {
//                     id: action.trackId, likesCount: 0
//                 }
//             }
//         default:
//             return state
//     }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
// const state = {
//     12: {id: 12, likesCount: 10},
//     14: {id: 14, likesCount: 2},
//     100: {id: 100, likesCount: 0},
// }
//
// type: 'TRACK-ADDED'
// const newState = reducer(state, addTrackAC(300))
// console.log(newState[300].likesCount === 0)
//


// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
//
// Вопрос:
//
// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
//
// copy
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC =(trackId: number) =>(XXX)
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
//
// const newState = reducer(state, deleteTrackAC(14))
// console.log(newState.length === 2)
//
// {type: 'TRACK-DELETED', trackId}
//
// Вопрос:
//
// Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть: true true true?
//
// copy
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'USER-NAME-UPDATED':
//             return {...state, user: {...state.user, name: action.name}}
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

//Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?
//
// Вопрос:
//
// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.
//
// copy
// import React, {useState, useReducer, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }
//
// function Counter() {
//     const [value, setValue] = XXX(changeCounter, 0)
//     const [isCounter, setIsCounter] = YYY(true)
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }
//
//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{marginBottom: "20px"}}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{...btnStyles, backgroundColor: "red"}}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//                 </div>
//                 : <div style={{textAlign: "center"}}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{...btnStyles, backgroundColor: "green"}}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Counter/>, document.getElementById('root')
// );
// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.






//
// Вопрос:
//
// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
//
// copy
// import {createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector, useDispatch} from 'react-redux'
// import React from 'react'
//
// const students = {students:
//    [
//        {id: 1, name: 'Bob', age: 23},
//        {id: 2, name: 'Alex', age: 22}
//     ]
// }
// type AddStudentAT = {
//     type: "ADD-STUDENT"
//     name: string
//     age: number
// }
//
// const studentsReducer = (state = students, action: AddStudentAT) => {
//     switch (action.type) {
//         case "ADD-STUDENT":
//             return {
//                 ...state,
//                 students: [...state.students, {
//                     name: action.name,
//                     age: action.age
//                 }]
//             }
//     }
//     return state
// }
//
// const appStore = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//     const students = useSelector((state: RootStateType) => state.students)
//     return (
//         <ul>
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//         </ul>
//     )
// }
// const App = () => {
//     return <StudentList />
// }
//
// ReactDOM.render(<div>
//         <XXX  YYY={ZZZ}>
//             <App/>
//         </XXX>
//     </div>,
//     document.getElementById('root')
// )
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
//
//
//
//
//

//
// Вопрос:
//
// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент удалялся из списка? Напишите через пробел.
//
// copy
// import {createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector, useDispatch} from 'react-redux'
// import React from 'react'
//
// const students = {
//     students: [
//         {id: 1, name: 'Bob'},
//         {id: 2, name: 'Alex'},
//         {id: 3, name: 'Donald'},
//         {id: 4, name: 'Ann'},
//     ]
// }
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter(s => s.id !== action.id)
//             }
//     }
//     return state
// }
//
// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//     const listItemStyles = {
//         width: "100px",
//         borderBottom: "1px solid gray",
//         cursor: "pointer",
//     }
//     const students = useSelector((state: RootStateType) => state.students)
//     const dispatch = useDispatch()
//     const studentsList = students.map(s => {
//         const removeStudent = () => {
//             XXX(YYY( ZZZ))
//         }
//         return (
//             <li key={s.id}
//                 style={listItemStyles}
//                 onClick={removeStudent}>
//                 {s.name}
//             </li>)
//     })
//     return (
//         <ol>
//             {studentsList}
//         </ol>
//
//     )
// }
//
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <StudentList/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// // удалялся из списка? Напишите через пробел.
// ?????????? dispatch RemoveStudentAC s.id ??????

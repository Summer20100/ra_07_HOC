import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import s from './Aggregation.module.css'
import data from './data/data.json'


function YearTable(props) {
    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map((item, ind) => (
                    <tr key={ ind }>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function SortTable(props) {
    console.log('SortTable', props);

    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {props.list.map((item, ind) => (
                    <tr key={ ind }>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function MonthTable(props) {
    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map((item, ind) => (
                    <tr key={ ind }>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};


// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
// export default class App extends React.Component {
//     state = {
//         list: []
//     };

//     render() {
//         const {list} = this.state;
//         return (
//             <div id="app">
//                 <MonthTable list={list} />
//                 <YearTable list={list} />
//                 <SortTable list={list} />
//             </div>
//         );
//     }
// }

function Element ( {component, list} ) {
    switch(component) {
        case 'MonthTable':
            return <MonthTable list={list.listOfMonth} />
        case 'YearTable':
            return <YearTable list={list.listOfYear} />
        case 'SortTable':
            return <SortTable list={list.list} />
        default:
            alert( "Нет таких значений компоненты" )
    }
}

const Aggregation = () => {
    const [datalist, setDataList] = useState(data)

    let url = import.meta.env.VITE_AGGREGATION_URL

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setDataList(data))
            .catch(error => console.error(error))
    }, [])


    const { list } = datalist


    const nameMonth = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'Aug',
        8: 'Sept',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    const GetTable = (mylist) => {
        let listOfMonth = mylist.map((el) => {
            return (
                {
                    month: nameMonth[new Date(el.date).getMonth()],
                    numberOfMonth: new Date(el.date).getMonth(),
                    amount: el.amount
                }
            )
        })
        let listOfYear = mylist.map((el) => {
            return (
                {
                    year: new Date(el.date).getFullYear(),
                    amount: el.amount
                }
            )
        })

        const compareDates = (a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
            }
        
        list.sort(compareDates)

        return ({
            listOfMonth: listOfMonth,
            listOfYear: listOfYear,
            list: mylist
        })
    }

    const allList = GetTable(list)

    return (
        <Routes>
        <Route path='/aggregation' element={
            <div className="mainContainer">
                <div id="app">                    
                    <Element component='MonthTable' list={ allList } />
                    <Element component='YearTable' list={ allList } />
                    <Element component='SortTable' list={ allList } />
                </div>
            </div>
        } />
        </Routes>
    )
}


export default Aggregation


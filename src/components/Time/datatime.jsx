import React, {useState} from 'react';
import s from './Time.module.css'

function DateTime(props) { 
  return (
      <p className={ s.date }>{props.date}</p>
  )
}

function DateTimePretty(props) {
  let text = ''
  const currentTime = new Date()
  const videoTime = new Date(props.date)
  const diff = (currentTime - videoTime) / 60000

  const Diff = (val) => {
    if (val > 1440) {
      return `${Math.round(val/1440)} дней назад`
    } else if (val > 60) {
      return `5 часов назад`
    } else if (val < 61) {
      return `12 минут назад`
    } else {
      console.log('Хьюстон! Нам нужна помощь!')
    }
  }
  
  
  return (
    <DateTime date={ Diff(diff) } />
  )
}

function Video(props) {
    return (
        <div className={ s.video }>
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map((item, ind) => <Video url={item.url} date={item.date} key={ ind } />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-08-10 14:19:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-08-18 12:19:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-08-18 14:19:00'
        },
    ]);

    return (
      <div className={ s.flex }>
        <VideoList list={list}/>
      </div>
    );
}
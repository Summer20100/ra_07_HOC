import { useState } from 'react';
import s from './Highlight.module.css'


// во 2 у вас будут уже 2 обертки для new & popular, например

// const withNew = (WrappedComponent) => {
// return function NewComponent(props) {
// return (
// <div className="wrap-item wrap-item-new">
// <span className="label">New!</span>
// <WrappedComponent {...props} />
// </div>
// );
// };
// };

// function New(props) {
//   return (
//     <div className="wrap-item wrap-item-new">
//       <span className="label">New!</span>
//       {props.children}
//     </div>
//   )
// };

const withNew = (WrappedComponent, props) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      <WrappedComponent {...props} />
    </div>
  )
}

// function Popular(props) {
//   return (
//     <div className="wrap-item wrap-item-popular">
//       <span className="label">Popular!</span>
//       {props.children}
//     </div>
//   )
// };

const withPopular = (WrappedComponent, props) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      <WrappedComponent {...props} />
    </div>
  )
};

function Article(props) {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
};

function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};

function Rating({ item }) {
  const { views, type } = item
  if (views < 100) {
    switch (type) {
      case 'video':
        return (
          // <New>
          //   <Video {...item} />
          // </New>
          withNew(Video, item)
        );
      case 'article':
        return (
          // <New>
          //   <Article {...item} />
          // </New>
          withNew(Article, item)
        );
    }
  } else {
    switch (type) {
      case 'video':
        return (
          // <Popular>
          //   <Video {...item} />
          // </Popular>
          withPopular(Video, item)
        );
      case 'article':
        return (
          // <Popular>
          //   <Article {...item} />
          // </Popular>
          withPopular(Article, item)
        );
    }
  }
}

function List(props) {
  return props.list.map((item, ind) => <Rating item={item} key={ind} />)
};

export default function App() {
  const [list, setList] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return (
    <div className={s.flex} >
      <List list={list} />
    </div>
  );
}
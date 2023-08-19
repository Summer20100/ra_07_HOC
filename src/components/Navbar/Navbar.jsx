import s from './Navbar.module.css'
import { MyLinkButton, NameLesson } from './../../mystyle.jsx'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      <NameLesson />
      <MyLinkButton link='/time'>TIME</MyLinkButton>
      <MyLinkButton link='/highlight'>HIGHTLIGHT</MyLinkButton>
      <MyLinkButton link='/aggregation'>AGGREGATION</MyLinkButton>
    </div>
  )
}

export default Navbar 

import airbnb from '/assets/airbnb-logo.png'

export default function Navbar() {
  return (
    <div className="nav-bar min-h-[4.37rem] min-w-[34.47rem] shadow-lg shadow-slate-300">
      <img src={airbnb} alt="airbnb logo" height = "25" className="py-6 w-[5.31rem] pl-5"/>
    </div>
  )
}

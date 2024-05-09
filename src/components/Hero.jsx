import photo from '/assets/photo-grid.png'
export default function Hero() {
  return (
    <>
        <img src={photo} alt="photo grid" className="mx-auto mt-6 w-[395px] h-[232px]"/>
        <div className='text-left px-9 font-poppins'>
            <h1 className='text-4xl font-semibold text-[#000000] mt-8'>
            Online Experiences
            </h1>
            <p className=' max-w-[320px] mt-4 text-base font-light text-[#222222]'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div> 
    </>
  )
}
import star from '/assets/star.png'

export default function Card(prop) {
  return (
    <div className='relative min-w-max'>
        <img src={`/assets/${prop.item.coverImg}`} alt=''  className='rounded-lg max-w-[176px] max-h-[235px] '/>
        <p className=' text-[#222222] rounded-sm font-normal text-xs bg-white p-[0.1rem] absolute top-2 left-2' >{prop.item.openSpots > 0 ? "Available" : "Sold Out"}</p>
        <div>
            <img src={star} className='inline w-3 h-3'/>
            <p className='inline text-xs font-light text-[#222222]'> {prop.item.stats.rating} <span className='font-light text-[#918E9B]'>({prop.item.stats.reviewCount}) {prop.item.location}</span></p>
            <p className=' text-[#222222] font-light text-xs'>{prop.item.title}</p>
            <p><span className='text-xs font-semibold'> From ${prop.item.price} / person</span></p>
        </div>
    </div>
  )
}


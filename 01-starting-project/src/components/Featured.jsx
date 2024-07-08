import img1 from '../assets/sirio-7_ZNLVlJchs-unsplash.jpg'
import img2 from '../assets/rayul-_M6gy9oHgII-unsplash.jpg'
export default function Featured(){
return(
    <div className="grapper flex justify-between pt-9 items-center max-md:flex-col-reverse">
        <div className="images w-1/2 flex justify-between max-md:w-full">
<img src={img1} alt="" className='object-cover w-1/2 pr-2'/>
<img src={img2} alt="" className='object-cover w-1/2' />
        </div>
        <div className="text w-1/2 pl-16 max-md:w-full max-sm:pl-8">
            <h4 className='text-sky-500 font-semibold pb-4'>Featured Products</h4>
            <h1 className='text-3xl font-bold pb-4 max-lg:text-2xl max-md:text-4xl max-sm:text-3xl'>We love what we do</h1>
            <p className='flex flex-col text-neutral-500 pb-4 max-sm:text-xs' >
                <span>Problems trying to resolve the conflict between </span><span>the two major realms of Classical physics: </span><span>Newtonian mechanics.</span>
            </p>
            <p className='flex flex-col text-neutral-500 max-sm:text-xs max-lg:text-sm max-md:pb-7 '>
                <span>Problems trying to resolve the conflict between </span><span>the two major realms of Classical physics: </span><span>Newtonian mechanics.</span>
            </p>
       
        </div>
    </div>
)
}
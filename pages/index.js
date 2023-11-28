// import '../app/globals.css'
// import '../app/style.css'
// import '../app/animation.css'

import Slide from '/compoments/slide'
import Card from '/compoments/card'

export default function Index() {

    return (
       <>
         <div className='max-w-screen-xl mx-auto lg:py-7 lg:px-7 px-3 py-3'>
           <Slide/>
           <h1 className='font-bold mt-5'>Event Music</h1>
             <div className='flex flex-row gap-3'>
               <Card id={0} image_asset="/image/card01.jpg" title={'Mahalini Fabula 2.0 Live in Concert'} time={'28 Oct 2023'} price={10000}/>
               <Card id={1} image_asset="/image/card02.jpg" title={'INDONESIA UNITED IN WORSHIP'} time={'14 Oct - 26 Oct 2023'} price={5000}/>
               <Card id={2} image_asset="/image/card03.jpg" title={'RICHARD MARX : The Songwriter Tour'} time={'05 Oct 2023'} price={12000}/>
             </div>
         </div>
         </>
      )
    }
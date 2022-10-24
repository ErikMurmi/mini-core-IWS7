import React from 'react'
import User  from 'components/User/User'
import UserList from 'components/User/UserList'
import Bonus from 'components/Bonus/Bonus'
import BonusQuarantine from 'components/BonusQuarantine/BonusQuarantine'
import CartProvider from 'store/CartProvider'

export default function Home() {
  return (
    <CartProvider>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-6">
            < User/>
          </div>
          <div className="col-6">
            <Bonus />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BonusQuarantine />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

// export default function Index(){
//   return(    
//     <CartProvider>
//       <div className="container" style={{ marginTop: 20 }}>
//         <div className="row">
//           <div className="col-6">
//             < User />
//           </div>
//         </div>
//       </div>
//     </CartProvider>
//     )
// }



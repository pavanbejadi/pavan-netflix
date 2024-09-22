import './index.css'
import {Component} from 'react'

class Netflix extends Component{
    Netflix = () => {
        window.location.href='https://www.netflix.com';
    }
    render(){
        return(
            <div className='bg-container'>
                <h1 className='netflix-logo'>NETFLIX</h1>
           <h1 className='heading'>Who's watching?</h1>
           <div className='profile-container'>
            <div className='profile-card'>
                <img className='profile' src="https://i.pinimg.com/564x/41/f8/ce/41f8ce76328ee64c0d8bf40d6c9fadd8.jpg" alt="Netflix Profile" />
                <p className='profile-name'>Pavan</p>
            </div>
            <div className='profile-card'>
                <img className='profile' src="https://i.pinimg.com/564x/a7/dd/68/a7dd68048215a79dd911205109803965.jpg" alt="Netflix Profile" />
                <p className='profile-name'>Kenny</p>
            </div>

            <div className='profile-card'>
                <img className='profile' src="https://i.pinimg.com/originals/60/2d/05/602d0546b0f634a41c0597cd765e6ed5.gif" alt="Netflix Profile" />    
                <p className='profile-name'>Roney</p>
            </div>

            <div className='profile-card'>
                <img className='profile' src="https://i.pinimg.com/736x/0a/22/33/0a223334ec63fdad92ca9a34b477a794.jpg" alt="Netflix Profile" />
                <p className='profile-name'>kids</p>
            </div>

            <div className='profile-card'>
                <img className='profile' src="https://i.pinimg.com/564x/74/20/10/7420109d5f783aa4d860f5451362184f.jpg" alt="Netflix Profile" />
                <p className='profile-name'>Rishith</p>
            </div>
           
           </div>

           <div className='btn-container'>
            <button onClick={this.Netflix} className='btn'>Manage Profiles</button>
           </div>
        </div>
        )
        
    }
}

export default Netflix
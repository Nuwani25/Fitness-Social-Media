import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDash() {
  return (
    <div className='w-72 h-[200px] bg-white rounded-xl'>
        <div className='bg-gradient-to-r from-blue-400 to-blue-500 rounded-e-lg h-14'> 
        <div className='flex gap-3 ml-4  '>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-white font-medium mt-2'> OliviaJohnson</h1>
            <h1 className='text-slate-50 font-medium text-sm'>oliviaj@gmail.com</h1> 
            </div>


        </div>

        </div>


        <Link to="/create">
      <div
        className='mt-8 text-xl flex gap-4 cursor-pointer 
                  bg-blue-400 hover:bg-blue-600 
                  text-white 
                  h-10 rounded-lg 
                  transition-all duration-300 ease-in-out shadow-md 
                  hover:shadow-lg'
      >
        <img
          className='w-6 h-6 mt-2 ml-8'
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png"
        />
        <h1 className='mt-1 font-medium text-white'>Post</h1>
      </div>
    </Link>
        

        <div className='mt-10'>
            <div>

            </div>
           
            <div className='ml-4 text-blue-500 text-lg font-medium mt-3'>Active Users</div>
         
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Sophia Brown</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>

        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://www.slazzer.com/blog/wp-content/uploads/2022/11/Professional-Profile-Picture-005.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Ava Wilson</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://img.freepik.com/free-photo/crazy-man-funny-expression_1194-3133.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Noah Smith</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B6V0mxFbSf25cnxc5QntGStilTtjimuC0N_OnfaHTQ&s"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Liam Carter</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://img.freepik.com/premium-photo/profile-picture-happy-young-caucasian-man-spectacles-show-confidence-leadership-headshot-portrait-smiling-millennial-male-glasses-posing-indoors-home-employment-success-concept_774935-1446.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Daniel Cooper</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://images.theconversation.com/files/314111/original/file-20200207-43095-1kj7lht.jpg?ixlib=rb-4.1.0&rect=0%2C109%2C4331%2C3051&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Charlotte Lee</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/mike-fox-467499-unsplash.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'>Evelyn Anderson</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        

        </div>
        
    </div>
  )
}



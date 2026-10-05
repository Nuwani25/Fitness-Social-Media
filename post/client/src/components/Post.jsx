import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Post() {
  const { currentUser } = useSelector((state) => state.user);
  const [workouts, setWorkouts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [filter, setfilter] = useState([]);
  const [query, setQuery] = useState(" ");
  const [ItemDelete, setItemToDelete] = useState("");
  const [commentText, setCommentText] = useState("");
  
  const [selectedPostId, setSelectedPostId] = useState(null);
  console.log(ItemDelete);
 console.log(workouts)
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`http://localhost:8081/api/Get`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setWorkouts(data);
            console.log("Success")
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchItems();
  }, []);

  const handleDeleteConfirmation = (postId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this post?");
    if (userConfirmed) {
      handleDeleteUser(postId);
    }
  };

  const handleDeleteUser = async (postId) => {
    try {
      // Optimistically remove the post from the state
      setWorkouts((prev) => prev.filter((workout) => workout.id !== postId));

      const res = await fetch(`http://localhost:8081/api/delete/${postId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        // Rollback on failure
        const errorText = await res.text();
        alert("Failed to delete post: " + errorText);
        setWorkouts((prev) => prev.concat(workouts.find((w) => w.id === postId)));
      } else {
        alert("Post deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the post.");
      setWorkouts((prev) => prev.concat(workouts.find((w) => w.id === postId)));
    }
  };



  const handleLike = async (postId) => {
    try {
        const res = await fetch(`http://localhost:8081/api/like/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.ok) {
            const updatedWorkouts = workouts.map((workout) => {
                if (workout.id === postId) {
                    workout.likes++;
                }
                return workout;
            });
            setWorkouts(updatedWorkouts);
        }
    } catch (error) {
        console.error("Error liking post:", error);
    }
};


const handleComment = async (postId, commentText) => {
  try {
    const res = await fetch(`http://localhost:8081/api/comment/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: commentText }), // Remove userId from the body
    });
    if (res.ok) {
      alert("Your comment has been added")
      window.location.reload()
    }
  } catch (error) {
    console.error("Error posting comment:", error);
  }
};



  return (
    <div className="bg-[#f3f4f6] w-full">
    <div className="flex justify-center items-center">
      <div>
      <input
  className="w-[450px] h-11 rounded-3xl bg-white mt-6 border border-blue-500 px-3"
  type="text"
  placeholder="  Search...."
  name=""
  id=""
/>


      </div>
    </div>

    <div className="flex justify-center mt-4">
      <div className="flex flex-wrap justify-center gap-8">
      <div className="max-h-[700px] w-full overflow-y-auto  scrollbar-none">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="w-[550px] h-[720px] bg-white mt-10 mb-5 border-none rounded-2xl "
          >
            <div className="px-6 py-4">
                <div className="">
                <div className='flex gap-3 ml-4  '>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
          
            <div>
                <h1 className='text-slate-800 font-medium mt-3'> OliviaJohnson</h1>
                <h4 className="text-[10px]  text-gray-800 whitespace-nowrap">{moment(workout.created).format("YYYY-MM-DD HH:mm:ss")}</h4>
               
            </div>
            <div className="flex gap-4 ml-72">
            <Link to={`/updatepost/${workout.id}`}>
    <img
      className="w-6 h-6"
      src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
      alt="Edit Icon"
    />
  </Link>

  <button
  className="mt-[-29px]"
  onClick={() => handleDeleteConfirmation(workout.id)}
>
  <img
    className="w-6 h-6"
    src="https://cdn-icons-png.freepik.com/512/542/542724.png"
    alt="Delete Icon"
  />
</button>
            

            </div>
            


        </div>
        

                </div>
               
               <div className="flex gap-2 ml-4 mt-2 ">
                <div className="text-blue-700">
                #post #popular
                </div>
               <div className="  text-gray-700 "> 
                  
                   {workout.title} </div>

               </div>
                

              <div className="mt-5">
              <img src={workout.image && workout.image[0]} alt="" className='w-[500px] h-80 mt-2 rounded-xl'/>
              </div>



              <div className=" flex gap-2 mt-4">
                <div>
               
                <button className="mt-3 ml-1 " onClick={() => handleLike(workout.id)}> <FontAwesomeIcon icon={faHeart} className=" text-border hover:text-red-100 text-red-700 text-2xl" /></button>
                <div className="ml-4 text-[10px]">{workout.likes}</div>
                </div>
            <button onClick={() => setSelectedPostId(workout.id)}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39MC8P4nQc7W1X59HDxu66eEfGlUfNURWjW7IIUuirA&s"  alt=""  className='w-8 h-8 object-cover mt-[-6px] rounded-full'/>
            </button>
             
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRxA34bc9afVlpRRAEXhaHkX-KBdT9gn3CUaqJDXftA&s"  alt=""  className='w-8 h-8 object-cover mt-2 rounded-full'/>
                

              </div>
             
             <div className="flex gap-2">
             <h3 className="font-semibold text-md text-gray-700 mt-4 mb-2">
             OliviaJohnson
              </h3>
              <h3 className="font-extralight text-sm text-gray-700 mt-5 w-[400px] break-words ">
              {workout.content}
              </h3>

             </div>
             <div className="mt-2 flex">
             


             {selectedPostId === workout.id && (
                      <>
                        <input
                          type="text"
                          value={commentText}
                          maxLength={20}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder=" Comment..."
                          className="w-[420px] ml-2 text-slate-700 h-10 rounded-full bg-slate-50"
                        />
                        <button className=" ml-8 text-blue-700 font-medium" onClick={() => handleComment(workout.id, commentText)}>Post</button>
                      </>
                    )}

                  
                  
              
             </div>

             

             <div className="w-[500px] h-[85px] rounded-2xl bg-slate-50 mt-4 border-2 border-blue-500">
             <div className="flex ml-4 font-medium text-blue-500">Comments</div>
             <div className="max-h-14 overflow-y-auto  scrollbar-none">

                {workout.comments.map((comments, index) => (
                  <div key={index} className="gap-2">
                    <div className="font-extralight text-sm ml-6 mt-2 text-gray-700">
                   {comments.comment}
                    </div>
                    <div className=" ml-8  text-[10px] font-extralight text-gray-600">
                    
                     {moment(comments.createdAt).fromNow()}
                    </div>
                    <div>

                    
                 </div>
                

                  </div>
                ))}

                
                </div>

             </div>
              
              
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  </div>
  );
}




export const SideNav = ({results}) =>{

    return <div className="side-nav">
        <img src="" alt="" />
        <p>Review Answers Here</p>
        {review?.map((ans1,id)=><h4>#{id+1}:{ans1}</h4>)}
        
    </div>
}
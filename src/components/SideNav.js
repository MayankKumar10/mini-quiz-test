export const SideNav = ({results}) =>{

    return <div className="side-nav card">
        <img src="" alt="" />
        <p>Review Answers Here</p>
        {results?.map((ans1,id)=><h4>#{id+1}:{ans1.a}</h4>)}
    </div>
}
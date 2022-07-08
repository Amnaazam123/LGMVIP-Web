import React from 'react';
export default function showUsers({users,loadUsers, Loading}){
    console.log(typeof(users))
    return(
        <>
            <button onClick={loadUsers} className="btn">Click Me to Call Api</button>
            <div className='snail'>
                <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" className={Loading?"loading":"unloading"}/>
            </div>
            <div>
            {
                users.map((u)=>(

                    <div key={u.id} className="card">
                        <div className='avator'><img src={u["avatar_url"]}/></div>
                        <div className='content'>
                            <div className='name'><b>Name : </b>{u["login"]}</div>
                            <div className='name'><b>Repos Link : </b>{u["repos_url"]}</div> 
                            <div className='name'><b>Followers Link : </b>{u["followers_url"]}</div>
                             <div className='name'><b>Following Links : </b>{u["following_url"]}</div> 
                            <div className='name'><b>Organization Link : </b>{u["organizations_url"]}</div>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}
import React, { useEffect, useState } from 'react'

const UserEffectEX = () => {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(100);
    //     }, 4000)
    //     document.title = "MRU"
    // }, [count]);
    const [users,setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json().then(data =>{
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[])
    return (
        <div className='parent'>UseEffect
        {
            users.map((user,index)=>{
                return(
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </React.Fragment>
                )
            })
        }
        </div>
    )
}
export default UserEffectEX;

import React from 'react'
import "./Pagination.css"

function Pagination({totalPosts, postPerPage, paginate, currentPage}) {
    const pageNumbers = []
    for(let i =1; i<= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
        // console.log(currentPage, pageNumbers)
    }
    return (
        <div className='pagination'>
            {pageNumbers.map(number=>(
                <li key={number}><button className={currentPage === number ? "active":undefined} onClick={()=>paginate(number)} 
                >{number}</button></li>
                ))}
        </div>
    )
}

export default Pagination

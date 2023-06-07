import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
export default function Home() {
  let [data, setData] = useState("")

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/search/shows?q=all`).then(res => {
      if (data === "") {
        setData(res.data)
      } else {

      }
    }).catch(err => {
      console.log(err)
    })
  })

  let change = (elem) => {
    localStorage.setItem("movies", JSON.stringify(elem))
  }

  return (
    <>
      <div className="fluid-container" >
        <div className='row' style={{ margin: "0px" }}>
          {data && data.map((elem, id) => {
            return <div key={id} className='d-flex justify-content-center col-sm-12 col-md-6 col-lg-6' >

              <div key={id} className="card mb-3" style={{ maxWidth: "540px", }} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={elem.show.image.original} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{elem.show.name}</h5>
                      <p className="card-text">premiered {elem.show.premiered}</p>
                      <p className="card-text">rating {elem.show.rating.average}<svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom:"20px",color:"blue"}} width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></p>
                      <button type="button" className="btn btn-primary" onClick={() => change(elem)}><Link style={{ textDecoration: "none", color: "white" }} to="/Summary" className="card-text" >know more</Link></button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

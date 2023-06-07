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
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

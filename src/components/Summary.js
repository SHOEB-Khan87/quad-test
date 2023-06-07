import React, { useState } from 'react'
import { Link } from "react-router-dom"
export default function Summary() {
  let [form, setForm] = useState({
    date: "",
    time: "",
    adult: "",
    email: "",
    name: ""
  })

  let getData = () => {
    let data = localStorage.getItem("movies");
    if (data) {
      return JSON.parse(data)

    } else {

    }
  }

  let [data, setData] = useState(getData())

  let change = (e) => {
    setForm((prev) => {
      let helper = { ...prev }
      helper[`${e.target.id}`] = e.target.value;
      return helper
    })
  }

  let submit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(form))
  }

  return (
    <>
      <div className='fluid-container' >
        <div className='row' style={{ margin: "0px" }} >
          <div className='d-flex justify-content-center'  >
            <div className='col-sm-12 col-md-6 col-lg-6' >
              <div class="card mb-3" >
                <img src={data.show.image.original} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{data.show.name}</h5>
                  <p class="card-text">{data.show.summary.replaceAll(/(<p[^>]+?>|<p>|<\/p>|<b>|<\/b>)/img, "")}</p>
                  <p class="card-text"><small class="text-muted">Runtime {data.show.runtime} Minutes</small></p>
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Your Ticket</button>
                </div>
              </div></div>
          </div>
        </div>
      </div>










      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Your Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
              <form>
                <div className="mb-2" >
                  <p className="col-form-label">Movie title: <h3> {data.show.name}</h3></p>

                </div>
                <div className="mb-2">
                  <label htmlFor="date" className="col-form-label">The date you want to attend:</label>
                  <input onChange={change} type="date" value={form.date} className="form-control" id="date" />
                </div>
                <div className="mb-2">
                  <label htmlFor="time" className="col-form-label">What time suits you?</label>
                  <input onChange={change} type="time" value={form.time} className="form-control" id="time" />
                </div>
                <div className="mb-2">
                  <label htmlFor="adult" className="col-form-label">Number of tickets for adults:</label>
                  <input onChange={change} type="number" value={form.adult} className="form-control" id="adult" />
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="col-form-label">Email address:</label>
                  <input onChange={change} type="email" value={form.email} className="form-control" id="email" />
                </div>
                <div className="mb-2">
                  <label htmlFor="name" className="col-form-label">Reservation name:</label>
                  <input onChange={change} type="text" value={form.name} placeholder='Enter FullName' className="form-control" id="name" />
                </div>
                <div className="mb-2 d-flex justify-content-center">
                  <button type="submit" onClick={submit} className="btn btn-primary" data-bs-dismiss="modal">submit</button>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

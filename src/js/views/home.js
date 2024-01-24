import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, actions } = useContext(Context)
	const { contacts } = store

	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					{contacts.map((contact) => {
						return (

							<div key={contact.id} className="border">
								<div className="row d-flex justify-content-evenly">
									<div className="col-md-3 mt-3 mb-3">
										<img src="https://picsum.photos/150" className="rounded-circle shadow-4-strong border border-dark" alt="..." />
									</div>
									<div className="col-md-4 mt-2">
										<div className="card-body ">
											<h5 className="fw-bold card-title">{contact.full_name}</h5>
											<p className="card-text text-secondary p-0 m-0 ms-2">{contact.address}</p>
											<p className="card-text text-secondary p-0 m-0 ms-2">{contact.phone}</p>
											<p className="card-text text-secondary p-0 m-0 ms-2">{contact.email}</p>
										</div>
									</div>
									<div className=" col-md-4 d-flex flex-column  align-items-center">
										<div className="mt-5 mb-10">
											<Link to={`/Edit/${contact.id}`}>
												<i className="text-dark fa-solid fa-pen-to-square"></i>
											</Link>
											<i type="button" onClick={() => actions.deleteContact(contact.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-trash mt-5 ms-3"></i>
										</div>

										{/* <i type="button" onClick={() => actions.deleteContact(contact.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-trash mt-5 mb-10"></i> */}

									</div>
								</div>
							</div>
						)
					})}
					{/* <Link className="d-flex justify-content-center" to="/Form">
						<button className="mt-4 btn btn-primary text-center">Crear Contacto</button>
					</Link> */}
				</div>
			</div>
		</div>
	)

};
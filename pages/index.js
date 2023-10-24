import Layout from "../components/Layout";
import Link from "next/link";

import {  experiences, projects } from "../profile";

const Index = ({ data }) =>{
  const santi = data.data.santi
  const skills = data.data.skills
  
  console.log(data)

  return (
    <Layout>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body dark-bg text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <img src="/profile.jpeg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1><strong>{santi.fullName}</strong></h1>
                <h3>{santi.shorName}</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <i className="fas fa-envelope fa-lg"></i> E-mail: {santi.email}
                      </p>
                    </div>
                    <div className="col-6">
                      <p>
                        <i className="fas fa-phone-square-alt fa-lg"></i> Teléfono :
                        {santi.phone}
                      </p>
                    </div>
                    <div className="col-6">
                      <p>
                        <i className="fas fa-home fa-lg"></i>Dirección :
                        {santi.address}
                      </p>
                    </div>
                    <div className="col-6">
                      <p>
                        <i className="fas fa-globe fa-lg"></i> Nacionalidad :
                        {santi.nacionalty}.
                      </p>
                    </div>
                    <div className="col-6">
                      <p>
                        <i className="fab fa-github fa-lg"></i> Github:
                        <a href="{santi.github}" target="__blank">  {santi.github}</a>
                      </p>
                    </div>
                  </div>
                </div>
  
                <a className="btn btn-primary btn-lg rounded-0 my-3" target="_blank" href="#" download>Descargar CV</a>
  
              </div>
            </div>
          </div>
        </div>
      </header>
  
      {/* Second section */}
  
      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>
  
              {/* Skill Progress  */}
              {skills.map(({ name, percentage, id }) => (
                <div className="py-3" key={id}>
                  <h5>{name}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>
  
              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sint excepturi ea explicabo. Illum suscipit illo, porro
                      quisquam voluptatem officiis fugiat vel animi aliquam
                      inventore rem. Quo laudantium temporibus cupiditate. Aut?
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme">
                <a className="btn btn-light">Know More</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Porfolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body dark-bg">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#!">Know More</a>
                      </div>
                    </div>
                  </div>
                ))}
  
                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/portfolio">
                      <a className="btn btn-outline-light">More Projects</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/main-data');
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    // Manejar el error de la consulta a la API
    return {
      props: {
        data: null,
      },
    };
  }
}
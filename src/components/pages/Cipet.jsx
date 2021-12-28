import react from 'react'
import CIPETB from '../layout/CIPETB.png'
const Cipet = () => {
    return (

<div className="card mb-3">
            <img src={CIPETB} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">About CIPET</h5>
    <p className="card-text">CIPET Centre in the state of Madhya Pradesh was established at Bhopal in the year 1988. Bhopal city is the capital of M.P. well known as "City of Lakes". In this beautiful green city, CIPET is located nearby BHEL in Govindpura Industrial Area on J.K.Road. This Centre's campus area is 6 acres and Govt.of Madhya Pradesh has sanctioned additional 11 acres of land for expansion. The city is fast growing as Educational Hub of the country.</p>
    <p className="card-text">CIPET-Bhopal is providing training, technical and consultancy services in Design, CAD/CAM/CAE, Tool Room, Plastic Processing and Testing. The centre is consistently progressing and provided placement of trainees through campus interview. The centre has following specific achievements in various areas of training, technical and research and development activities.</p>
          <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <ol class="list-group list-group-numbered">
  <li class="list-group-item">POSTGRADUATE DIPLOMA PROGRAM</li>
  <li class="list-group-item">POST DIPLOMA PROGRAM</li>
            <li class="list-group-item">DIPLOMA PROGRAMS</li>
            <li class="list-group-item">DIPLOMA IN PLASTICS MOULD TECHNOLOGY</li>
</ol>
  </div>
</div>
    );

};
export default Cipet;
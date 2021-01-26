import React from 'react';
import './App.css';

export function App() {
  return (
      <main className="flex-shrink-0">
        <div className="container">
          <h3 className="mt-5">Personlig læring danske noter</h3>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#basic">Basic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                 aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade show active" id="basic">

            </div>
            <div className="tab-pane fade" id="profile">
              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation
                +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table
                craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
                ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
                mollit.</p>
            </div>
            <div className="tab-pane fade" id="dropdown1">
              <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer,
                iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                Leggings gentrify squid 8-bit cred pitchfork.</p>
            </div>
            <div className="tab-pane fade" id="dropdown2">
              <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master
                cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party
                locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                they sold out farm-to-table VHS viral locavore cosby sweater.</p>
            </div>
          </div>

          <table className="table table-bordered table-sm">
            <thead>
            <tr>
              <th colSpan={2}>Pronomen</th>
              <th>Subjekt Pronomener</th>
              <th>Objeckt Pronomener</th>
              <th colSpan={2}>Posessive Pronomener</th>
              <th>Refleksive Pronomener</th>
            </tr>
            </thead>
            <tr>
              <th rowSpan={5}>Ental</th>
              <td>1.person</td>
              <td>jeg</td>
              <td>mig</td>
              <td colSpan={2}>min/mit/mine</td>
              <td>mig</td>
            </tr>
            <tr>
              <td>2.person</td>
              <td>du (De)</td>
              <td>dig (Dem)</td>
              <td colSpan={2}>din/dit/dine (Deres)</td>
              <td>dig (Dem)</td>
            </tr>
            <tr>
              <td rowSpan={3}>3.person</td>
              <td>han</td>
              <td>ham</td>
              <td>hans</td>
              <td rowSpan={3}>sit/sin/sine</td>
              <td rowSpan={3}>sig</td>
            </tr>
            <tr>
              <td>hun</td>
              <td>hende</td>
              <td>hendes</td>
            </tr>
            <tr>
              <td>den/det</td>
              <td>den/det</td>
              <td>dens/dets</td>
            </tr>
            <tr>
              <th rowSpan={3}>Flertal</th>
              <td>1.person</td>
              <td>vi</td>
              <td>os</td>
              <td colSpan={2}>vores</td>
              <td>os</td>
            </tr>
            <tr>
              <td>2.person</td>
              <td>I</td>
              <td>jer</td>
              <td colSpan={2}>jeres</td>
              <td>jer</td>
            </tr>
            <tr>
              <td>3.person</td>
              <td>de</td>
              <td>dem</td>
              <td colSpan={2}>deres</td>
              <td>sig</td>
            </tr>
          </table>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">Ugedage (Weekdays)</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="text-right">Mandag
                        <br/>Tirsdag
                        <br/>Onsdag
                        <br/>Torsdag
                        <br/>Fredag
                        <br/>Lørdag
                        <br/>Søndag</p>

                      <p className="text-right">Hverdage
                        <br/>Weekend</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="text-muted">Monday
                        <br/>Tuesday
                        <br/>Wednesday
                        <br/>Thursday
                        <br/>Friday
                        <br/>Saterday
                        <br/>Sunday</p>
                      <p className="text-muted">Weekdays
                        <br/>Weekend</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">HV-spøgsmål</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className="text-right">
                        Hvem
                        <br/>Hvor
                        <br/>Hvorfor
                        <br/>Hvad
                        <br/>Hvordan
                        <br/>Hvornår
                        <br/>Hvor længe
                        <br/>Hvor mange
                        <br/>Hvilken</p>
                    </div>
                    <div className="col">
                      <p className="text-muted">
                        Who
                        <br/>What
                        <br/>Where
                        <br/>Why
                        <br/>How
                        <br/>When
                        <br/>How long
                        <br/>How many
                        <br/>Which
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

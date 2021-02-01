import React from 'react';

export function Basic() {
  return (
      <div className="tab-pane fade show active" id="basic" role="tab">
        <div className="row mt-3">
          <div className="col">
            <table className="table bg-dark table-hover table-bordered table-sm">
              <thead>
              <tr className="text-muted">
                <th colSpan={2}>Pronomen</th>
                <th>Subjekt Pronomener</th>
                <th>Objeckt Pronomener</th>
                <th colSpan={2}>Posessive Pronomener</th>
                <th>Refleksive Pronomener</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th rowSpan={5} className="text-muted">Ental</th>
                <td className="text-muted">1.person</td>
                <td>jeg</td>
                <td>mig</td>
                <td colSpan={2}>min/mit/mine</td>
                <td>mig</td>
              </tr>
              <tr>
                <td className="text-muted">2.person</td>
                <td>du (De)</td>
                <td>dig (Dem)</td>
                <td colSpan={2}>din/dit/dine (Deres)</td>
                <td>dig (Dem)</td>
              </tr>
              <tr>
                <td rowSpan={3} className="text-muted">3.person</td>
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
                <th rowSpan={3} className="text-muted">Flertal</th>
                <td className="text-muted">1.person</td>
                <td>vi</td>
                <td>os</td>
                <td colSpan={2}>vores</td>
                <td>os</td>
              </tr>
              <tr>
                <td className="text-muted">2.person</td>
                <td>I</td>
                <td>jer</td>
                <td colSpan={2}>jeres</td>
                <td>jer</td>
              </tr>
              <tr>
                <td className="text-muted">3.person</td>
                <td>de</td>
                <td>dem</td>
                <td colSpan={2}>deres</td>
                <td>sig</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <h3>Ugedage (Weekdays)</h3>
            <table className="table bg-dark table-hover table-bordered table-sm">
              <tbody>
              <tr>
                <td>Mandag</td>
                <td>Monday</td>
              </tr>
              <tr>
                <td>Tirsdag</td>
                <td>Tuesday</td>
              </tr>
              <tr>
                <td>Onsdag</td>
                <td>Wednesday</td>
              </tr>
              <tr>
                <td>Torsdag</td>
                <td>Thursday</td>
              </tr>
              <tr>
                <td>Fredag</td>
                <td>Friday</td>
              </tr>
              <tr>
                <td>Lørdag</td>
                <td>Saterday</td>
              </tr>
              <tr>
                <td>Søndag</td>
                <td>Sunday</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <h3>HV-spøgsmål</h3>
            <table className="table bg-dark table-hover table-bordered table-sm">
              <tbody>
              <tr>
                <td>Hvem</td>
                <td>Who</td>
              </tr>
              <tr>
                <td>Hvor</td>
                <td>Where</td>
              </tr>
              <tr>
                <td>Hvorfor</td>
                <td>Why</td>
              </tr>
              <tr>
                <td>Hvad</td>
                <td>What</td>
              </tr>
              <tr>
                <td>Hvordan</td>
                <td>How</td>
              </tr>
              <tr>
                <td>Hvornår</td>
                <td>When</td>
              </tr>
              <tr>
                <td>Hvilken</td>
                <td>Which</td>
              </tr>
              <tr>
                <td>Hvor længe</td>
                <td>How long</td>
              </tr>
              <tr>
                <td>Hvor mange</td>
                <td>How many</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <h3>Måned</h3>
            <table className="table bg-dark table-hover table-bordered table-sm">
              <tbody>
              <tr>
                <td>Januar</td>
              </tr>
              <tr>
                <td>Februar</td>
              </tr>
              <tr>
                <td>Marts</td>
              </tr>
              <tr>
                <td>April</td>
              </tr>
              <tr>
                <td>Maj</td>
              </tr>
              <tr>
                <td>Juni</td>
              </tr>
              <tr>
                <td>Juli</td>
              </tr>
              <tr>
                <td>August</td>
              </tr>
              <tr>
                <td>September</td>
              </tr>
              <tr>
                <td>Oktober</td>
              </tr>
              <tr>
                <td>November</td>
              </tr>
              <tr>
                <td>December</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <h3>Årstider</h3>
            <table className="table bg-dark table-hover table-bordered table-sm">
              <tbody>
              <tr>
                <td>sommer</td>
              </tr>
              <tr>
                <td>efterår</td>
              </tr>
              <tr>
                <td>vinter</td>
              </tr>
              <tr>
                <td>forår</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-3">
            <h3>Numre</h3>
            <div className="row">
              <div className="col">
                <ol>
                  <li>en</li>
                  <li>to</li>
                  <li>tre</li>
                  <li>fire</li>
                  <li>fem</li>
                  <li>seks</li>
                  <li>syv</li>
                  <li>otte</li>
                  <li>ni</li>
                  <li>ti</li>
                  <li>elleve</li>
                  <li>tolv</li>
                  <li>tretten</li>
                  <li>fjorten</li>
                  <li>femten</li>
                  <li>seksten</li>
                  <li>sytten</li>
                  <li>atten</li>
                  <li>nitten</li>
                  <li>tyve</li>
                </ol>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li>10 - ti</li>
                  <li>20 - tyve</li>
                  <li>30 - tredive</li>
                  <li>40 - fyrre</li>
                  <li>50 - halvtreds</li>
                  <li>60 - tres</li>
                  <li>70 - halvfjerds</li>
                  <li>80 - firs</li>
                  <li>90 - halvfems</li>
                  <li>100 - hundrede</li>
                </ul>
              </div>

            </div>

          </div>
          <div className="col"><h3>Ordinære tal</h3>
                <ol>
                  <li>forste</li>
                  <li>anden</li>
                  <li>tredje</li>
                  <li>fjerde</li>
                  <li>femte</li>
                  <li>sjette</li>
                  <li>syvende</li>
                  <li>ottende</li>
                  <li>niende</li>
                  <li>tiende</li>
                  <li>ellevte</li>
                  <li>tolvte</li>
                  <li>trettende</li>
                  <li>fjortende</li>
                  <li>femtende</li>
                  <li>sekstende</li>
                  <li>syttende</li>
                  <li>attende</li>
                  <li>nittende</li>
                  <li>tyvende</li>
                </ol>
                <ul>
                  <li>tredivte</li>
                  <li>enogtredivte</li>
                </ul>
              </div>

        </div>
      </div>
  );
}

import "./Skill.css";
function Skill() {
  return (
    <div className="bg-secondary text-center py-5 ">
      <div className="skill-content mb-5">
        <h1>Skills</h1>
        <p>
          sdsd dsadasd dsadsa dsadasd dasalkdl; ksa; l;dkas;lk;
          dsalkmdlksaldmsal djaskmdlksj lkdaslkj lkdlsa ldjsalsdsa
          dsa;dasalkdldasdl,sa,dsdasdsafmakldmf dsafmalsmlmsadmassdsadsa dsddas
          ;lk;k;lk; o opi pi m ln iu i ;l ; dasdmasmdasmdfmassd dsad sadsad
          dasfm;asmf;asm;fm;saf;as;lfk;all
        </p>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3 text-center ">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item bg-secondary">My Interests</li>
            <li className="list-group-item bg-secondary">Html</li>
            <li className="list-group-item bg-secondary">Css</li>
            <li className="list-group-item bg-secondary">JavaScript</li>
            <li className="list-group-item bg-secondary">React</li>
          </ul>
        </div>
        <div className="col-md-5 align-items-center ">
          <ul className="list-group list-group-flush py-5 ">
            <div className="progress mb-3" style={{height:"25px"}} role="progressbar" aria-label="Example with label" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: "80%" , backgroundColor:"#00000061"}}>
                Html-80%
                </div>
            </div>
            <div className="progress mb-3" style={{height:"25px"}} role="progressbar" aria-label="Example with label" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: "70%", backgroundColor:"#00000061" }}>
                Css-70%%
                </div>
            </div>
            <div className="progress mb-3" style={{height:"25px"}} role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: "75%" ,backgroundColor:"#00000061" }}>
                JavaScript-75%
                </div>
            </div>
            <div className="progress mb-3" style={{height:"25px"}} role="progressbar" aria-label="Example with label" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: "60%" ,backgroundColor:"#00000061" }}>
                React-60%
                </div>
            </div>
           
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Skill;

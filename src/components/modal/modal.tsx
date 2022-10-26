import './modal.css'

const Modal = () => {
  return (
    <div>
      <div className="modalItem">
        <div className="addSiteModal">Add data</div>
        <div className="dashBoardForm">
          <form action="" className="modalForm">
            <div className="url">
              <div className="classLabel">URL</div>

              <input type="text" className="inputStyle" />
            </div>
            <div className="firstLine">
              <div className="siteName">
                <div className="classLabel">Site Name</div>

                <input type="text" className="inputStyle" />
              </div>
              <div className="selectFolder">
                <div className="classLabel">select/Folder</div>
                <input type="text" className="inputStyle" />
              </div>
            </div>
            <div className="firstLine">
              <div className="userName">
                <div className="classLabel">user siteName</div>
                <input type="text" className="inputStyle" />
              </div>
              <div className="sitePassword">
                <div className="classLabel">site password</div>
                <input type="text" className="inputStyle" />
                <img
                  src={require('../../assets/icons/eye_on.png')}
                  alt="eye"
                  className="passwordEye"
                />
              </div>
            </div>
            <div className="textArea">
              <div className="classLabel">notes</div>
              <textarea className="inputStyle" />
            </div>
            <div className="modalButton">
              <button className="modalButtons button2 " type="reset">
                Reset
              </button>
              <button className="modalButtons button2" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal

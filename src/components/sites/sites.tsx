import './sites.css'
import { useState } from 'react'
import Card from '../card/card'
import Modal from '../modal/modal'

const Sites = () => {
  const [contents, setContents] = useState(false)
  const [modal, setModal] = useState('')
  return (
    <div>
      <div className="siteContainer">
        <div className="marginContainer">
          <div className="sites">Sites</div>
          <div className="searchBar">
            <div className="search">
              <input type="text" placeholder="search" className="searchInput" />
              <img
                src={require('../../assets/icons/search.png')}
                alt="icon"
                className="searchImage"
              />
            </div>
            <div className="plus">
              <img
                src={require('../../assets/icons/add_btn.png')}
                alt="icon"
                onClick={() => {
                  setModal('false')
                }}
              />
            </div>
          </div>
        </div>
        {contents ? (
          <div className="center">
            <div className="addSiteContainer">
              <div className="addSites">
                Please Click on the “+” symbol to add sites
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="socialMediaDesktop">
              <div className="socialMedia">
                <div className="media">Social Media</div>
                <div className="mediaCount">07</div>
              </div>
            </div>

            <div className="socialMediaMobile">
              <div className="socialMedia">
                <div className="sites_1">Sites</div>
                <div className="mobileMedia">
                  <div className="media">Social Media</div>
                  <div className="mediaCount">07</div>
                </div>
              </div>
            </div>

            <div className="card">
              <Card />
            </div>
            <div className="addButton">
              <img
                src={require('../../assets/icons/add_btn.png')}
                alt="icon"
                onClick={() => {
                  setModal('false')
                }}
              />
            </div>
          </div>
        )}
      </div>

      {modal ? (
        <div className="modal">
          <div className="overlay">
            <div className="modelInfo">
              <div className="modalContent">
                <Modal />
                <button className="close-modal">
                  <img
                    src={require('../../assets/icons/close_btn.png')}
                    alt="drop"
                    className="closeImg"
                    onClick={() => {
                      setModal('')
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Sites

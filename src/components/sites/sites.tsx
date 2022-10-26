import './sites.css'
import { useState } from 'react'
import Card from '../card/card'

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
            {/* <div className="modalContent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              similique numquam necessitatibus beatae animi blanditiis
              laudantium deserunt, facere magnam voluptas quia in ipsum
              molestias. Doloremque eius ipsam in ad molestiae facere doloribus
              itaque provident dolorem ducimus sequi, vero debitis id optio.
              Similique dolor temporibus, autem, quod sint earum ea
              exercitationem ut quas soluta hic blanditiis eum quidem. Quae
              libero nihil enim totam, voluptates laudantium rerum eum iusto
              dolorem ex. Et vel exercitationem quae culpa corporis officia
              vitae eveniet possimus aut laborum ut itaque autem perferendis
              cupiditate eaque hic dicta labore animi quas architecto, expedita
              tempora modi! Accusantium quo rem sunt!
              <button
                className="close-modal"
             
              >
                <img
                  src={require('../../assets/icons/close_btn.png')}
                  alt="drop"
                  className="closeImg"
                />
              </button>
            </div> */}
            <div className="modelInfo">
              <div className="modalContent">Lorem, ipsum</div>
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

import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="description-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes
          <br /> all the time. Clothes have always been a marker of the era and
          we are in <br />a revolution. Your fashion makes you been seen and
          heard that way you
          <br /> are. So, celebrate the seasons new and exciting fashion in your
          own
          <br /> way.
        </p>
        <button type="button" className="btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="img"
      />
    </div>
  </div>
)
export default Home

import MainMenu from "./common/MainMenu";
import './PricingPage.cs'

function PricingPage() {
  return (
    <div className="landing">
        <header className="App-header">
          <MainMenu />
        </header>
        <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div className="card h-100">
        <img src="..." class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a short card.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
}

export default PricingPage;

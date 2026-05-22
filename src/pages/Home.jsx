import "./Home.css";

import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import HeroCarousel from "../components/HeroCarousel";

import products from "../data/products";

function Home({ search }) {

  const electronics = products.filter(p => p.category === "electronics");
  const fashion = products.filter(p => p.category === "fashion");
  const mobiles = products.filter(p => p.category === "mobiles");
  const home = products.filter(p => p.category === "home");
  const beauty = products.filter(p => p.category === "beauty");
  const groceries = products.filter(p => p.category === "groceries");

  // ✅ SEARCH FILTER (ALL PRODUCTS ONLY)
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <HeroCarousel />

      {/* SEARCH RESULT SECTION */}
      {search && (
        <section className="section">
          <h2 className="section-title">Search Results</h2>

          <div className="products-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(item => (
                <ProductCard key={item.id} {...item} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </section>
      )}

      {/* ELECTRONICS */}
     <section id="electronics" className="section">
        <h2 className="section-title">Electronics</h2>
        <div className="products-container">
          {electronics.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* FASHION */}
   <section id="fashion" className="section">
        <h2 className="section-title">Fashion</h2>
        <div className="products-container">
          {fashion.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* MOBILES */}
      <section id="mobiles" className="section">
        <h2 className="section-title">Mobiles</h2>
        <div className="products-container">
          {mobiles.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* HOME */}<section id="home" className="section">
        <h2 className="section-title">Home</h2>
        <div className="products-container">
          {home.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* BEAUTY */}
     <section id="beauty" className="section">
        <h2 className="section-title">Beauty</h2>
        <div className="products-container">
          {beauty.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* GROCERIES */}
     <section id="groceries" className="section">
        <h2 className="section-title">Groceries</h2>
        <div className="products-container">
          {groceries.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* ALL PRODUCTS */}
      {!search && (
        <section className="section">
          <h2 className="section-title">All Products</h2>
          <div className="products-container">
            {products.map(item => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

export default Home;
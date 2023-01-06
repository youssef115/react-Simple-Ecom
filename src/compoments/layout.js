import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { HomeIcon,CartIcon } from './icons';
import Search from './search'

function layout({categories}) {
    const renderCategories = () => {
        return categories.data.map((c) => (
            <li key={c.id} className="items">
                <Link className="items" to={`/categories/${c.id}`}>{c.title}</Link>
            </li>
        ));
    };
  return (
    <>
    <header>
        <div id="headerHomeIcon">
            <Link to="/"><HomeIcon width={40}/></Link>
        </div>
        <Search/>
        <div id="headerTile">Youssef Najjar Store</div>
        <div id="headerCartIcon">
            <Link to="/basket"><CartIcon width={40}/></Link>
        </div>
    </header>
    <section>
        <nav>
            {categories.errorMessage && (
                <div>Error: {categories.errorMessage}</div>
            )}

            <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </section>

    <footer>
        <Link to="/" className='footerLinks'>Go to Home Page</Link>
        |<Link to="/basket" className='footerLinks'>basket</Link>
    </footer>
</>
  )
}

export default layout
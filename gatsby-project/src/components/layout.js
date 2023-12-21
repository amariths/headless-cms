import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {Link} from "gatsby";
import UseNavigation from "../hooks/use-Navigation";

const Layout = ({ children }) => {

const navigation = UseNavigation()


    return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        {navigation.map((edge) => {
            return (

      <li class="nav-item active">
        <a class="nav-link" href={edge.node.url}>{edge.node.title}</a>
      </li>

        )
})}
    </ul>
  </div>
</nav>
      <main className="main">{children}</main>
      <footer className="footer">Footer</footer>
    </div>

)
    }


export default Layout

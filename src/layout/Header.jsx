import { Link } from "react-router-dom"     


const Header = () => {
  return (
    <>
     <header>
        <div className="world-logo">
            <Link to="/">
                <img src="/world-globe.png" alt="" />
            </Link>
        </div>

        <nav className="header-mainnav">
            <ul>
                <li>
                    <Link to="/">
                        <button>Main</button>
                    </Link>
                </li>
                <li>
                    <Link to="/countries">
                        <button>Countries</button>
                    </Link>
                </li>
                <li>
                    <Link to="/form">
                        <button>Solicitar información</button>
                    </Link>
                </li>
                <li>
                    <Link to="/user">
                        <button>Área personal</button>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
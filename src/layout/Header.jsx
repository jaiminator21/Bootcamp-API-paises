import { Link } from "react-router-dom"     


const Header = () => {
  return (
    <>
     <header>
        <nav>
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
            </ul>

            <ul>
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
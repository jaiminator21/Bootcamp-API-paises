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
               
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
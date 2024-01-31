import logo from '/logo2.png'

export default function Header() {

    return (

        <>

            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="50" alt="Logo" />
                    </a>
                    <button id="nav-btn">
                        <b>Try the app</b>
                    </button>
                </div>
            </nav>

        </>

    )

}
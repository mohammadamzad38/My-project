

const NavBar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
          
    return (
        <nav>
            <ul className="flex">
                {
                    routes.map(route => <li  key={routes.id}><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
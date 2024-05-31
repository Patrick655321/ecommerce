import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useGlobalContext } from "../utils/globalStateContext";

function NavBar() {
  const navBarItems = [
    {
      title: "Products",
      id: "#products",
    },
    {
      title: "Add Product",
      id: "#addProduct",
    },
    {
      title: "Cart",
      id: "#cart",
    },
  ];

  const { store, dispatch } = useGlobalContext()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {navBarItems.map((item) => {
              return (
                <a style={{ textDecoration: "none" }} 
                href={item.id} key={item.title}>
                  <Button sx={{ my: 2,
                     color: "white",
                      display: "block" }}>
                    {item.title}
                  </Button>
                </a>
              );
            })}
          </Box>
          {store.loggedInUsername}
          {store.loggedInUsername && (
            <button 
            onClick={() => {
              dispatch({
                type: 'setToken',
                data: null
              })
              dispatch({
                type: "setLoggedInUsername",
                data: null
              })
            }}>Logout</button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

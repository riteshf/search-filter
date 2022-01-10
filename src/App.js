import { ChakraProvider, Container, Grid } from "@chakra-ui/react";

import { SearchOptions } from "./components/SearchOptions/SearchOptions";
import response from "./__data/Shops_attributes_response.json";
import { FilterProvider } from "./context/FilterContext";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const options = response.response.data;
  return (
    <ChakraProvider>
      <Container maxW="container.xl" mt={8}>
        <Grid templateColumns="1fr 1fr 1fr">
          <div className="col bg-white">
            <FilterProvider options={options}>
              <SearchOptions />
            </FilterProvider>
          </div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;

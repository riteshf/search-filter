import response from "./__data/Shops_attributes_response.json";
import { ChakraProvider, Container, Grid } from "@chakra-ui/react";
import { SearchFilter } from "@search-filter/react";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const options = response.response.data;
  return (
    <ChakraProvider>
      <Container maxW="container.xl" mt={8}>
        <Grid templateColumns="1fr 1fr 1fr">
          <div className="col bg-white">
            <SearchFilter options={options} />
          </div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;

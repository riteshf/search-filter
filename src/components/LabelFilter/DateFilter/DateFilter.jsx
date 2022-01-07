import React, { useContext, useState } from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";

import { FilterContext } from "../../../context/FilterContext";

export const DateFilter = ({ labelOption = {} }) => {
  const { nomanclature } = useContext(FilterContext);
  const typeNomenclature = nomanclature[labelOption.type];
  const [dateFilter, setDateFilter] = useState({});

  return (
    <Grid templateColumns="1fr 1fr" columnGap={2}>
      {typeNomenclature.map((n, index) => (
        <Box key={index}>
          <Text as="label" fontSize="10px">
            {n.label}
          </Text>
          <ReactDatePicker
            selected={dateFilter[n.key]}
            onChange={(date) => setDateFilter({ ...dateFilter, [n.key]: date })}
          />
        </Box>
      ))}
    </Grid>
  );
};

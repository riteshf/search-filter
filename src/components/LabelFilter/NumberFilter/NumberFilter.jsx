import React, { useContext, useState } from "react";
import {
  Box,
  Grid,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderThumb,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";

import { FilterContext } from "../../../context/FilterContext";

export const NumberFilter = ({ labelOption = {} }) => {
  const { nomanclature } = useContext(FilterContext);
  const typeNomenclature = nomanclature[labelOption.type];

  const [sliderValue, setSliderValue] = React.useState({
    start_range: 0,
    end_range: 0,
  });

  return (
    <RangeSlider
      defaultValue={[sliderValue.start_range, sliderValue.end_range]}
      min={labelOption.start_range}
      max={labelOption.end_range}
      onChange={([start, end]) =>
        setSliderValue({
          start_range: start,
          end_range: end,
        })
      }
      my={2}
    >
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="tomato" />
      </RangeSliderTrack>
      {typeNomenclature.map((n, index) => (
        <RangeSliderThumb
          key={index}
          boxSize={6}
          index={index}
          onChange={(newValue) =>
            setSliderValue({
              ...sliderValue,
              [n.key]: newValue,
            })
          }
        >
          <Tooltip label={n.label} aria-label={n.key}>
            <Text fontSize="14px" aria-label={n.key}>
              {sliderValue[n.key]}
            </Text>
          </Tooltip>
        </RangeSliderThumb>
      ))}
    </RangeSlider>
  );
};

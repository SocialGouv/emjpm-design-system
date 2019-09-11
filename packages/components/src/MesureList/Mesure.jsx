import styled from '@emotion/styled';
import { Button, Card, Text } from '@socialgouv/emjpm-ui-core';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Box, Flex } from 'rebass';
import { Female, Male } from 'styled-icons/fa-solid';
import { KeyboardArrowRight } from 'styled-icons/material';

import {
  cardStyle,
  columnStyle,
  decorationStyle,
  descriptionStyle,
  labelStyle,
  MandatairelistStyle,
  statusStyle,
  subtitleStyle,
  titleStyle,
} from './style';

const GrayArrow = styled(KeyboardArrowRight)`
  color: #717172;
`;

const GrayMale = styled(Male)`
  color: '#333333';
`;

const GrayFemale = styled(Female)`
  color: '#333333';
`;

const Mesure = (props) => {
  const { type, ville, numeroRg, dateOuverture, age, civilite, status, id, validate, Link, href } = props;
  console.log(href);
  return (
    <Card sx={cardStyle} width="100%">
      <Box sx={decorationStyle(status)} />
      <Flex sx={MandatairelistStyle} {...props}>
        <Box width="300px">
          <Text sx={titleStyle}>
            {numeroRg}
            <Text sx={statusStyle(status)}>{status}</Text>
          </Text>
          <Text sx={subtitleStyle}>{type}</Text>
        </Box>

        <Flex>
          <Box alignSelf="center" pt="4px" mr="1">
            <Fragment>{civilite === 'F' ? <GrayFemale size="24" /> : <GrayMale size="24" />}</Fragment>
          </Box>
          <Box>
            <Text sx={labelStyle}>Age</Text>
            <Text sx={descriptionStyle}>{age}</Text>
          </Box>
        </Flex>

        <Flex width="150px" sx={columnStyle(true, true)}>
          <Text sx={labelStyle}>Commune</Text>
          <Text sx={descriptionStyle}>{ville}</Text>
        </Flex>

        <Flex sx={columnStyle(false, false)}>
          <Text sx={labelStyle}>Decision du</Text>
          <Text sx={descriptionStyle}>{dateOuverture}</Text>
        </Flex>

        <Box sx={columnStyle(true, true)}>
          <Button onClick={() => validate(id)} variant="outline">
            Valider la mesure
          </Button>
        </Box>

        <Flex>
          <Box width="15px" alignSelf="center" pt="4px" mr="1">
            <Link href={href}>
              <GrayArrow size="24" />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
};

Mesure.propTypes = {
  Link: PropTypes.func.isRequired,
  age: PropTypes.number.isRequired,
  civilite: PropTypes.string.isRequired,
  dateOuverture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  numeroRg: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  ville: PropTypes.string.isRequired,
};

export { Mesure };

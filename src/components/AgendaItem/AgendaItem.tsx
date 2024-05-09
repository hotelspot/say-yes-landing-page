import React, { FC } from 'react';
import {
  ADescription,
  ATitle,
  Avatar, AvatarContainer, AvatarImage,
  Avatars,
  Container, Description, Time, TimeWrapper, Title, Wrapper,
} from './AgendaItem.styled';
import { AvatarJuliuszZglinski } from '../../assets';
import { TimeContainer } from '../Header/Header.styled';

export type AgendaItemProps = {
  time:string;
  title:string
  description?:string
  avatars?: {
    img:string;
    name:string;
    desc?:string;
  }[]
}

export const AgendaItem: FC<AgendaItemProps> = ({
  time,
  title,
  description,
  avatars,
}) => (
  <Container>
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TimeWrapper>
        <Time>{time}</Time>
      </TimeWrapper>
    </Wrapper>
    <Avatars>
      {avatars?.map(({ img, desc, name }) => (
        <Avatar>
          <AvatarImage src={img} />
          <AvatarContainer>
            <ATitle>{name}</ATitle>
            <ADescription>
              {desc}
            </ADescription>
          </AvatarContainer>
        </Avatar>
      ))}
    </Avatars>
  </Container>
);

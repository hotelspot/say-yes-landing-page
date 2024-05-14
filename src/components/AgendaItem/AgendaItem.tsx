import React, { FC, ReactNode } from 'react';
import {
  ADescription,
  ATitle,
  Avatar, AvatarContainer, AvatarImage,
  Avatars,
  Container, Description, Time, TimeWrapper, Title, Wrapper,
  Owner,
} from './AgendaItem.styled';
import { AvatarJuliuszZglinski } from '../../assets';
import { TimeContainer } from '../Header/Header.styled';

export type AgendaItemProps = {
  time:string;
  title:string
  description?:string|ReactNode
  avatars?: {
    img:string;
    name:string;
    desc?:string;
    owner?:string;
  }[]
}

// @ts-ignore
export const AgendaItem: FC<AgendaItemProps> = ({
  time,
  title,
  description,
  avatars,
}) => (
  <Container>
    <Wrapper>
      <Title>{title}<Time>{time}</Time></Title>
      <Description>{description}</Description>
    </Wrapper>
    {(avatars && avatars?.length > 0) &&(
        <Avatars>
          {avatars?.map(({ img, desc, name, owner }) => (
              <Avatar>
                {owner && (<Owner>{owner}</Owner>)}
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
    ) }

  </Container>
);

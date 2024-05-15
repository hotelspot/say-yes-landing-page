import React, { FC, ReactNode } from 'react';
import {
  ADescription,
  ATitle,
  Avatar, AvatarContainer, AvatarImage,
  Avatars,
  Container, Description, Time, TimeWrapper, Title, Wrapper,
  Owner, AvatarAlone, AvatarLabel, AvatarLabel2,
} from './AgendaItem.styled';
import { AvatarJuliuszZglinski } from '../../assets';
import { TimeContainer } from '../Header/Header.styled';

export type AgendaItemProps = {
  time:string;
  title:string
  description?:string|ReactNode
  isDiscus?: boolean,
  isSmall?: boolean,
  alone?: boolean,
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
  isDiscus,
  isSmall,
    alone
}) => (
  <Container isDiscus={isDiscus} isSmall={isSmall}>
    {!alone ? (
        <>
          <Wrapper
              isDiscus={isDiscus}
              isSmall={isSmall}
          >
            <Title>{title}<Time>{time}</Time></Title>
            <Description>{description}</Description>
          </Wrapper>
          {( avatars && avatars?.length > 0) &&(
              <Avatars isDiscus={isDiscus}>
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
        </>
    ): (
        <AvatarAlone>
          {avatars?.map(({ img, desc, name, owner }) => (
              <Avatar full={true}>
                {owner && (<Owner>{owner}</Owner>)}
                <AvatarImage src={img} />
                <AvatarContainer>
                  <ATitle>{name}</ATitle>
                  <AvatarLabel>
                    {time}
                  </AvatarLabel>
                  <ADescription>
                    {desc}
                  </ADescription>
                  <AvatarLabel2>
                    {title}
                  </AvatarLabel2>
                </AvatarContainer>
              </Avatar>
          ))}
        </AvatarAlone>
    ) }


  </Container>
);

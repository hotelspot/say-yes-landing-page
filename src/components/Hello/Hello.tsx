import React, { FC } from 'react';

type HelloProps = {
    label: string;
}
export const Hello: FC<HelloProps> = ({ label }) => <div>{label}</div>;

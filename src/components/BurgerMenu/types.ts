import React from 'react';

export type TBurgerMenuProps = {
    isOpened: boolean;
    toggleIsOpened: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

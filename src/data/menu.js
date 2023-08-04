import {
  icon1,
  icon8,
  icon3,
  icon4,
  icon6,
  icon7,
  contact,
  transfer,
  bank,
  symbol,
} from '../constants/imagePath';

export const MENU = [
  {
    display: true,
    category: 'Transfer Money',
    menus: [
      {
        name: 'Phone Number',
        icon: contact,
        display: true,
      },
      {
        name: 'Bank Transfer',
        icon: symbol,
        display: true,
      },
      {
        name: 'Self Transfer',
        icon: transfer,
        display: true,
      },
      {
        name: 'Check Balance',
        icon: bank,
        display: true,
      },
    ],
  },
  {
    display: false,
    category: 'Payments Category',
    menus: [
      {
        name: 'Gas',
        icon: icon1,
        display: true,
      },
      {
        name: 'Fast Tag',
        icon: icon3,
        display: true,
      },
      {
        name: 'Gas',
        icon: icon4,
        display: true,
      },
      {
        name: 'Card',
        icon: icon3,
        display: true,
      },
      {
        name: 'Play Store',
        icon: icon6,
        display: true,
      },
      {
        name: 'Recharge',
        icon: icon3,
        display: true,
      },

      {
        name: 'Card',
        icon: icon3,
        display: true,
      },
      {
        name: 'Play Store',
        icon: icon6,
        display: true,
      },
    ],
  },
  {
    category: 'Credeit card',
    display: true,
    menus: [
      {
        name: 'Gas',
        icon: icon1,
        display: true,
      },
      {
        name: 'Fast Tag',
        icon: icon3,
        display: true,
      },
      {
        name: 'Gas',
        icon: icon4,
        display: true,
      },
      {
        name: 'Card',
        icon: icon3,
        display: true,
      },
      {
        name: 'Play Store',
        icon: icon6,
        display: true,
      },
      {
        name: 'Recharge',
        icon: icon3,
        display: true,
      },

      {
        name: 'Card',
        icon: icon3,
        display: true,
      },
      {
        name: 'Play Store',
        icon: icon6,
        display: true,
      },
    ],
  },
];

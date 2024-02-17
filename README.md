# Currency Converter Chrome Extension

## Preview of the Chrome Extension

![Preview of the Currency Converter Chrome Extension](/Image.png)

## Video Demo

[![Video Demo of the Currency Converter Chrome Extension](https://img.youtube.com/vi/MeWLNWDKukQ/hqdefault.jpg)](https://www.youtube.com/watch?v=MeWLNWDKukQ)

## Overview

The Currency Converter is a Chrome Extension that allows users to convert amounts between different currencies using real-time exchange rates. It features a simple, user-friendly interface with pre-populated currency options, including a set of popular currency buttons for quick access.

## Features

- **Instant Currency Conversion**: Convert between a wide range of global currencies.
- **Swap Currencies**: Easily swap between the selected 'From' and 'To' currencies to reverse the conversion direction.
- **Popular Currency Shortcuts**: Clickable buttons for commonly used currencies to quickly set the conversion currency.
- **Up-to-date Exchange Rates**: Fetches the latest exchange rates from a reliable API.
- **Error Handling**: Provides user feedback when an incorrect amount is entered.
- **Simple UI**: A user-friendly interface with a clean design that's easy to navigate.

## Installation

You can install the extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/hkd-currency-converter/iljbaefgjagfjplmmckmekmdapbdhddk).

## Usage

To use the Currency Converter, follow these simple steps:

1. **Select Currency**: The default currency for conversion is set to HKD (Hong Kong Dollar). Use the dropdown menu to select the currency you want to convert to.
2. **Enter Amount**: Type in the amount you wish to convert in the input field.
3. **Convert**: Click the 'CONVERT' button to get the conversion result.
4. **Popular Currencies**: Use the popular currency buttons to quickly set the conversion currency without using the dropdown. This will only change the conversion target currency and not the original HKD currency.
5. **Swap Currencies**: Use the 'Swap' button if you need to switch the selected currencies in the dropdown menus.

## Error Handling

If you enter an amount less than or equal to zero, the extension will display an error message:
ERROR: Accept only amount larger than zero, please try again.

Simply enter a new amount greater than zero to proceed with the currency conversion.

## API Key

This extension uses the `api-ninjas.com` service for currency conversion. An API key is required for the service to function. Replace the placeholder API key in the `index.js` file with your valid API key.

## Customization

You can customize the list of currencies by modifying the `currencyList` object in the `index.js` file. Ensure that the currency symbols and names are correctly paired.

## Support

If you encounter any issues or have any questions about the Currency Converter, please feel free to open an issue on the GitHub repository or contact the developer directly.

## Acknowledgments

- Thanks to `api-ninjas.com` for providing the currency conversion API.

Happy converting!

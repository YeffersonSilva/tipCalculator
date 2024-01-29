# Tip Calculator Script

## Overview
This JavaScript script provides a simple yet powerful tool for calculating tips based on the total bill amount, the percentage of the tip, and the number of people sharing the bill. It dynamically updates the displayed tip amount, total bill with the tip included, and how much each person should pay if the bill is split. This functionality is essential for web applications related to dining, services, or anywhere tipping is customary.

## Features
- **Dynamic Tip Calculation**: Automatically calculates the tip based on a percentage of the bill.
- **Bill Splitting**: Evenly splits the total bill, including the tip, among a specified number of people.
- **User Input Validation**: Converts user input to numerical values ensuring accurate calculations.
- **Formatted Output**: Nicely formats the calculated amounts for display, enhancing user experience.

## Prerequisites
This script is written in JavaScript and intended for use in web applications. Ensure your project is set up to run JavaScript, typically within an HTML document.

## Integration
1. Include the JavaScript code in your web project. You can either directly embed it within an HTML file using `<script>` tags or save it as a separate `.js` file and link to it from your HTML.
2. Ensure you have HTML elements with the following IDs in your document for the script to function correctly:
   - An input field for the bill amount (`yourBill`)
   - Input fields for the tip percentage (`tipInput`) and number of people splitting the bill (`splitInput`)
   - Elements to display the tip percentage (`tipPercent`), tip value (`tipValue`), total bill with tip (`totalWithTip`), split details (`splitValue`), and bill amount per person (`billEach`)

## Usage
To use this script, users should enter the bill amount, select their desired tip percentage, and specify how many people will be splitting the bill. The script automatically updates the displayed information based on the input provided, offering a real-time breakdown of the tip amount, total bill, and individual shares.

## Customization
You can easily customize the script to fit the needs of your application, such as modifying the `formatMoney` function to support different currencies or adjusting the `formatSplit` function to handle larger groups more efficiently.

## Contributing
Feel free to fork the repository and submit pull requests with any enhancements, bug fixes, or improvements you have made to the script.

## License
This script is open-sourced under the MIT license. Feel free to use it in your personal or commercial projects as you see fit.

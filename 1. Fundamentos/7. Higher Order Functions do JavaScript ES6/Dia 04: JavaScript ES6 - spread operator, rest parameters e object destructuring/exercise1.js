const rectangleArea = (...dimensions) => dimensions.reduce((acc, curr) => {
    return acc = acc * curr;
}, 1);

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});
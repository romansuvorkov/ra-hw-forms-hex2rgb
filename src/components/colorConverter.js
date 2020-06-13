export default function colorConverter(input) {
    const RedString = input.slice(1,3);
    const GreenString = input.slice(3,5);
    const BlueString = input.slice(5);
    const RedNumb = parseInt(RedString, 16);
    const GreenNumb = parseInt(GreenString, 16);
    const BlueNumb = parseInt(BlueString, 16);
    const result = `${RedNumb}, ${GreenNumb}, ${BlueNumb}`;
    return result;
}
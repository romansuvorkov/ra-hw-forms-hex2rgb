export default function valueCheck(input) {
    const result = /^#[a-fA-F\d]{6}$/.test(input);
    return result;

}
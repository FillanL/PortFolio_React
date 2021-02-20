const size = {
    "xs": "320px",
    "sm": "768px",
    "lg": "1200px",
}
const screenSize = {
    "xs": `(min-width :${size.xs})`,
    "sm": `(min-width : ${size.sm})`,
    "lg": `(min-width : ${size.lg})`
};
const Component = {
    xs:`@media only screen and ${screenSize.lg}`,
    sm:`@media only screen and ${screenSize.sm}`,
    lg:`@media only screen and ${screenSize.lg}`
};
export default Component

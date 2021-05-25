import lightTheme from "./lightTheme"
import darkTheme from "./darkTheme"

// export default function(style) {
//   if (style === "light") {
//     return lightTheme
//   }
//   else {
//     return darkTheme
//   }
// }

export default (style) => style === "light" ? lightTheme : darkTheme

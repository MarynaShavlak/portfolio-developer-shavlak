export const devInterviewPosts = [
  {
    category: "Logical Operators",
    title: "alert(alert(1) || 2 || alert(3))",
    date: "07/05/2025",
    text: "This challenge tests how OR (`||`) short-circuits and how alert calls behave when nested. The inner alert executes first and returns `undefined`, which is falsy, prompting evaluation of the next operand. The `||` operator stops once it finds a truthy value. It's a practical test of understanding operator behavior mixed with function side effects."
  },
  {
    category: "Logical Operators",
    title: "alert(1 && null && 2)",
    date: "07/05/2025",
    text: "This expression examines how AND (`&&`) handles falsy values in a chain. Since `&&` returns the first falsy operand, execution stops when `null` is encountered. It doesn’t evaluate the final operand because the overall expression is already falsy. This is a great reminder that `&&` doesn’t always return `true` or `false` but instead returns the actual operand."
  },
  {
    category: "Logical Operators",
    title: "alert(alert(1) && alert(2))",
    date: "07/05/2025",
    text: "In this snippet, nested alerts are combined with the AND (`&&`) operator. The first alert shows a message and returns `undefined`, a falsy value, so the second alert is never executed. It demonstrates how short-circuiting works when dealing with function return values. Understanding the evaluation order is key here."
  },
  {
    category: "Logical Operators",
    title: "alert(null || 2 && 3 || 4)",
    date: "07/05/2025",
    text: "This one mixes `||` and `&&` operators to test your understanding of operator precedence. The AND expression is evaluated first due to its higher priority. Then, the OR chain is evaluated left to right, returning the first truthy result. Recognizing how these operators are prioritized is crucial for predicting outcomes."
  },
  {
    category: "Logical Operators",
    title: "alert(null || 2 || undefined)",
    date: "07/05/2025",
    text: "A simple but effective test of how OR (`||`) operates in JavaScript. The expression evaluates from left to right and returns the first truthy value. `null` and `undefined` are both falsy, so they are skipped. It's a foundational example of truthy/falsy evaluation behavior."
  },
  {
    category: "Type Conversion",
    title: "!!(a && b) vs (a && b)",
    date: "07/05/2025",
    text: "This comparison helps clarify how JavaScript treats truthy values versus actual return values. Using `!!` converts any expression to a strict boolean. Without it, `a && b` returns one of the operands, not a boolean. It's a key distinction when you want true boolean logic versus checking the value itself."
  },
  {
    category: "Type Conversion",
    title: "!!'false' == !!'true'",
    date: "07/05/2025",
    text: "This expression seems confusing but boils down to how strings are treated in boolean contexts. Both `'false'` and `'true'` are non-empty strings, so both are truthy. Double negation (`!!`) converts them to `true`. It’s a solid reminder that content doesn’t affect a string’s truthiness—length does."
  },
  {
    category: "Type Coercion",
    title: "[] + null + 1",
    date: "07/05/2025",
    text: "This task explores type coercion during addition involving arrays, `null`, and numbers. An empty array is first coerced into an empty string. The rest of the expression is then treated as string concatenation. It reveals how JavaScript's loose typing can lead to unexpected string outputs."
  },
  {
    category: "Type Coercion",
    title: "['x'] == 'x'",
    date: "07/05/2025",
    text: "This comparison looks strange at first glance but reveals JavaScript’s coercion mechanisms. The array is converted to a string via `.toString()`, which results in `'x'`. Then `'x' == 'x'` is a straightforward comparison. It’s a neat example of how objects are coerced when compared to primitives."
  },
  {
    category: "Logical Operators / Coercion",
    title: "Decode the Alert Sequence!",
    date: "07/05/2025",
    text: "A collection of quirky alert-based expressions showcasing logical evaluation, operator precedence, and type coercion. These are the kinds of puzzles often seen in interviews or code assessments. Each alert hides a subtle behavior of JavaScript’s engine. Understanding these will sharpen your JS logic skills significantly."
  }
];

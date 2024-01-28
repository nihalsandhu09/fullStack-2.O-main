/**In JavaScript, both == and === are used for comparison, but they behave differently:

== is the equality operator. It checks for equality after doing type coercion. This means it tries to convert the operands to the same type before making the comparison. For example, 1 == '1' would return true because the values are equal after type coercion.

=== is the strict equality operator. It checks for equality without doing type coercion. It compares both the value and the type of the operands. For example, 1 === '1' would return false because even though their values are the same, their types (number and string) are different.

It's generally recommended to use === (strict equality) because it avoids unexpected type coercion and ensures a more explicit comparison. It's more precise and can prevent certain types of bugs that might arise from implicit type conversions. */
/** 7.2.14Abstract Equality Comparison
The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is the same as Type(y), then
Return the result of performing Strict Equality Comparison x === y.
If x is null and y is undefined, return true.
If x is undefined and y is null, return true.
If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
Return false.
7.2.15Strict Equality Comparison
The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is different from Type(y), return false.
If Type(x) is Number, then
If x is NaN, return false.
If y is NaN, return false.
If x is the same Number value as y, return true.
If x is +0 and y is -0, return true.
If x is -0 and y is +0, return true.
Return false.
Return SameValueNonNumber(x, y).
NOTE
This algorithm differs from the SameValue Algorithm in its treatment of signed zeroes and NaNs. */
console.log(1 == '1')
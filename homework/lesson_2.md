## A better ATM

The ATM we've built in lesson 2 is a bit of a problem: Each time you withdraw some money, a technician has to come round to restart it. It would be kinda good if it would at least run until your money is all withdrawn.

We've briefly looked at `while` loops today. they should help you to solve this problem. Have a good think about what the exact condition is you want to test for, though. You may want to withdraw more money than is available and the ATM should not allow for that (We'll get into overdraft fees in another lesson), but maybe that's not directly a cause to shut down the ATM?

## Remember `parseInt`?

During class, you've briefly discussed withdrawing fractions of $CURRENCY_UNIT, but obviously that doesn't make a ton of sense for an ATM. if you wrap your `prompt()` into `parseInt()`, JavaScript will try to parse the number you're giving it as an integer.

```JavaScript
let withdrawal = parseInt(prompt("Amount to withdraw? "));
```

## Stretch goal 1: Check for reasonable amounts

- You cannot withdraw negative numbers. That would be a deposit (See Stretch goal 2)
- Most ATMs in germany at least use 10 EUR bills as their smallest unit. Which means that the amount the user wants should fit that. How can you check if that's the case? (Hint: Remember the modulo operator?)

## Stretch goal 2: Allow for deposits

Some german ATMs also allow for deposits. Think about how you want to present this to the user. Do you want to ask them beforehand if they want to withdraw or deposit? Like this, maybe?

```
Do you want to withdraw (w) or deposit (d)? Enter letter w or d: w
How much do you want to withdraw? 100
Your balance is now 900 EUR. Please retrieve 100 EUR from the Slot below.
```

Alternatively, as a sort of ATM for business pros, you could allow the user to use negative numbers for withdrawal and positive numbers for deposits. But make sure you communicate this well:

```
Enter amount (negative for withdrawal, positive for deposit): -100
You've withdrawn 100 EUR, your balance is now 900 EUR.
```

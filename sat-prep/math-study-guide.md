# SAT Math Complete Study Guide

## Overview

The SAT Math section contains 44 questions across two 35-minute modules (22 questions each). Approximately 75% are multiple choice and 25% are student-produced response (grid-in). A built-in Desmos calculator is available for all questions.

The four content domains are:
1. **Algebra** (~35% of questions)
2. **Advanced Math** (~35% of questions)
3. **Problem Solving and Data Analysis** (~15% of questions)
4. **Geometry and Trigonometry** (~15% of questions)

---

## Domain 1: Algebra

### Linear Equations in One Variable

**Key Concepts:**
- Solve equations of the form ax + b = c
- Distribute, combine like terms, isolate the variable
- Understand when equations have no solution or infinitely many solutions

**No solution:** When simplification leads to a false statement (e.g., 0 = 5)
**Infinite solutions:** When simplification leads to a true identity (e.g., 0 = 0)

**Example:**
Solve: 3(2x - 4) + 5 = 2(3x - 1)

6x - 12 + 5 = 6x - 2
6x - 7 = 6x - 2
-7 = -2

This is false, so there is **no solution**.

### Linear Equations in Two Variables

**Key Concepts:**
- Slope-intercept form: y = mx + b (m = slope, b = y-intercept)
- Standard form: Ax + By = C
- Point-slope form: y - y1 = m(x - x1)
- Slope formula: m = (y2 - y1) / (x2 - x1)

**Parallel lines** have equal slopes.
**Perpendicular lines** have slopes that are negative reciprocals (m1 * m2 = -1).

**Example:**
A line passes through (2, 5) and (6, 13). What is its equation in slope-intercept form?

m = (13 - 5) / (6 - 2) = 8/4 = 2
y - 5 = 2(x - 2)
y = 2x + 1

### Systems of Linear Equations

**Methods:**
1. **Substitution:** Solve one equation for a variable, substitute into the other
2. **Elimination:** Add or subtract equations to eliminate a variable
3. **Graphing:** The solution is the point of intersection

**Number of solutions:**
- One solution: Lines intersect at one point (different slopes)
- No solution: Lines are parallel (same slope, different y-intercepts)
- Infinite solutions: Lines are identical (same slope, same y-intercept)

**Example:**
Solve: 2x + 3y = 12 and 4x - y = 5

From the second equation: y = 4x - 5
Substitute: 2x + 3(4x - 5) = 12
2x + 12x - 15 = 12
14x = 27
x = 27/14

y = 4(27/14) - 5 = 108/14 - 70/14 = 38/14 = 19/7

### Linear Inequalities

**Key Concepts:**
- Solve like equations, but **flip the inequality sign when multiplying or dividing by a negative**
- Graph on a number line: open circle for < or >, closed circle for ≤ or ≥
- Systems of inequalities: the solution is the overlapping shaded region

**Example:**
Solve: -3x + 7 > 16

-3x > 9
x < -3 (sign flips because we divided by -3)

### Key Formulas for Algebra
- Slope: m = (y2 - y1) / (x2 - x1)
- Slope-intercept form: y = mx + b
- Point-slope form: y - y1 = m(x - x1)
- Standard form: Ax + By = C
- Distance = rate x time
- Direct variation: y = kx
- Inverse variation: y = k/x

---

## Domain 2: Advanced Math

### Quadratic Equations

**Forms:**
- Standard form: ax² + bx + c = 0
- Factored form: a(x - r)(x - s) = 0, where r and s are roots
- Vertex form: a(x - h)² + k, where (h, k) is the vertex

**Solving methods:**
1. **Factoring:** Find two numbers that multiply to ac and add to b
2. **Quadratic formula:** x = (-b ± √(b² - 4ac)) / 2a
3. **Completing the square**

**The discriminant (b² - 4ac):**
- Positive: Two real solutions
- Zero: One real solution (repeated root)
- Negative: No real solutions (complex roots)

**Example:**
Solve: 2x² - 7x + 3 = 0

Using the quadratic formula:
x = (7 ± √(49 - 24)) / 4
x = (7 ± √25) / 4
x = (7 ± 5) / 4
x = 3 or x = 1/2

**Vertex of a parabola:**
- x-coordinate: x = -b / (2a)
- y-coordinate: substitute back into the equation

### Polynomial Functions

**Key Concepts:**
- Degree of a polynomial determines the maximum number of turning points (degree - 1) and x-intercepts (degree)
- End behavior depends on the leading coefficient and degree
  - Even degree, positive leading coefficient: up on both ends
  - Even degree, negative leading coefficient: down on both ends
  - Odd degree, positive leading coefficient: down left, up right
  - Odd degree, negative leading coefficient: up left, down right

**Operations:**
- Add/subtract by combining like terms
- Multiply using distribution (FOIL for binomials)
- Factor using GCF, grouping, special patterns

**Special Factoring Patterns:**
- Difference of squares: a² - b² = (a + b)(a - b)
- Perfect square trinomials: a² + 2ab + b² = (a + b)²
- Sum of cubes: a³ + b³ = (a + b)(a² - ab + b²)
- Difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)

**Example:**
Factor completely: 3x³ - 12x

3x(x² - 4) = 3x(x + 2)(x - 2)

### Rational Expressions and Equations

**Key Concepts:**
- Simplify by factoring numerator and denominator, then canceling common factors
- To add/subtract, find a common denominator
- To solve rational equations, multiply through by the LCD and check for extraneous solutions
- A value is excluded from the domain if it makes any denominator equal to zero

**Example:**
Simplify: (x² - 9) / (x² + 5x + 6)

= (x + 3)(x - 3) / (x + 2)(x + 3)
= (x - 3) / (x + 2), where x ≠ -3

### Exponential Functions and Equations

**Key Concepts:**
- Exponential growth: f(x) = a * b^x where b > 1
- Exponential decay: f(x) = a * b^x where 0 < b < 1
- Growth/decay rate: if b = 1 + r, then r is the rate of growth (positive) or decay (negative)
- Compound interest: A = P(1 + r/n)^(nt)

**Rules of Exponents:**
- a^m * a^n = a^(m+n)
- a^m / a^n = a^(m-n)
- (a^m)^n = a^(mn)
- a^0 = 1
- a^(-n) = 1/a^n
- a^(1/n) = nth root of a
- a^(m/n) = (nth root of a)^m

**Example:**
A population starts at 500 and increases by 3% per year. Write a function for the population after t years.

P(t) = 500(1.03)^t

### Radical Expressions

**Key Concepts:**
- √(ab) = √a * √b
- √(a/b) = √a / √b
- To solve radical equations, isolate the radical and square both sides
- Always check for extraneous solutions

**Example:**
Solve: √(2x + 3) = x - 1

Square both sides: 2x + 3 = x² - 2x + 1
0 = x² - 4x - 2
x = (4 ± √(16 + 8)) / 2 = (4 ± √24) / 2 = (4 ± 2√6) / 2 = 2 ± √6

Check: x = 2 + √6 ≈ 4.45 → √(2(4.45) + 3) = √11.9 ≈ 3.45 and 4.45 - 1 = 3.45. Valid.
Check: x = 2 - √6 ≈ -0.45 → √(2(-0.45) + 3) = √2.1 ≈ 1.45 and -0.45 - 1 = -1.45. Not valid (extraneous).

Solution: x = 2 + √6

### Nonlinear Systems

**Key Concepts:**
- A system with one linear and one quadratic equation can have 0, 1, or 2 solutions
- Solve by substitution: substitute the linear expression into the quadratic

**Example:**
Solve: y = x + 1 and y = x² - 3

x + 1 = x² - 3
0 = x² - x - 4
x = (1 ± √17) / 2

### Key Formulas for Advanced Math
- Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a
- Discriminant: D = b² - 4ac
- Vertex: (-b/2a, f(-b/2a))
- Exponential growth/decay: y = a * b^t
- Compound interest: A = P(1 + r/n)^(nt)
- Difference of squares: a² - b² = (a + b)(a - b)

---

## Domain 3: Problem Solving and Data Analysis

### Ratios, Rates, and Proportions

**Key Concepts:**
- Ratio: a comparison of two quantities (a:b or a/b)
- Rate: a ratio with different units (e.g., miles per hour)
- Unit rate: a rate with denominator 1
- Proportion: two equal ratios (a/b = c/d → ad = bc)

**Example:**
If 3 workers can paint a house in 8 days, how long would it take 5 workers?

3 * 8 = 5 * d
d = 24/5 = 4.8 days

### Percentages

**Key Concepts:**
- Percent = (part / whole) * 100
- Percent increase: ((new - original) / original) * 100
- Percent decrease: ((original - new) / original) * 100
- Successive percent changes: multiply the multipliers

**Example:**
A shirt originally costs $40. It is marked up 25%, then put on sale for 20% off. What is the final price?

After markup: $40 * 1.25 = $50
After discount: $50 * 0.80 = $40

(Note: A 25% increase followed by a 20% decrease does NOT return to the original price in general; it does here coincidentally. The multiplier is 1.25 * 0.80 = 1.00.)

### Statistics

**Measures of Central Tendency:**
- **Mean:** sum of values / number of values
- **Median:** middle value when data is ordered (average of two middle values if even count)
- **Mode:** most frequent value

**Measures of Spread:**
- **Range:** maximum - minimum
- **Standard deviation:** measures how spread out values are from the mean
  - A larger standard deviation means more spread
  - Adding a constant to all values does not change the standard deviation
  - Multiplying all values by a constant multiplies the standard deviation by that constant

**Example:**
Data set: 3, 7, 7, 10, 13
Mean = (3 + 7 + 7 + 10 + 13) / 5 = 40/5 = 8
Median = 7 (the middle value)
Mode = 7 (appears most often)
Range = 13 - 3 = 10

### Data Interpretation

**Types of Displays:**
- **Scatterplots:** Show relationships between two quantitative variables
  - Line of best fit (least-squares regression)
  - Correlation coefficient r: ranges from -1 to 1
  - r² tells you the proportion of variance explained
- **Bar graphs/histograms:** Compare categories or show distributions
- **Box plots:** Show five-number summary (min, Q1, median, Q3, max)
- **Two-way tables:** Show relationships between two categorical variables

**Key Concepts for Scatterplots:**
- Positive association: as x increases, y increases
- Negative association: as x increases, y decreases
- An outlier is a point far from the trend

### Probability

**Key Concepts:**
- P(event) = favorable outcomes / total outcomes
- P(A or B) = P(A) + P(B) - P(A and B)
- P(A and B) = P(A) * P(B) if A and B are independent
- Conditional probability: P(A|B) = P(A and B) / P(B)
- Complement: P(not A) = 1 - P(A)

**Example:**
A bag contains 4 red and 6 blue marbles. Two marbles are drawn without replacement. What is the probability both are red?

P(1st red) = 4/10
P(2nd red | 1st red) = 3/9
P(both red) = (4/10)(3/9) = 12/90 = 2/15

### Linear and Exponential Growth

**Key Concepts:**
- Linear growth: constant rate of change (adding the same amount each period)
- Exponential growth: constant percent change (multiplying by the same factor each period)
- Linear: y = mx + b
- Exponential: y = a * b^x

**How to tell the difference in a table:**
- If differences between consecutive y-values are constant → linear
- If ratios between consecutive y-values are constant → exponential

### Sampling and Inference

**Key Concepts:**
- A random sample is representative of the population
- Larger samples give more reliable estimates
- Margin of error decreases as sample size increases
- Correlation does not imply causation — only randomized controlled experiments can establish causation

### Key Formulas for Problem Solving and Data Analysis
- Percent change: ((new - old) / old) * 100
- Probability: favorable / total
- Mean: sum / count
- Expected value: sum of (value * probability) for each outcome

---

## Domain 4: Geometry and Trigonometry

### Lines and Angles

**Key Concepts:**
- Supplementary angles sum to 180°
- Complementary angles sum to 90°
- Vertical angles are equal
- When a transversal crosses parallel lines:
  - Corresponding angles are equal
  - Alternate interior angles are equal
  - Co-interior (same-side interior) angles are supplementary

### Triangles

**Key Concepts:**
- Sum of interior angles = 180°
- Exterior angle = sum of the two non-adjacent interior angles
- Triangle inequality: any side < sum of the other two sides
- Pythagorean theorem (right triangles): a² + b² = c²

**Special Right Triangles:**
- 30-60-90: sides in ratio x : x√3 : 2x
- 45-45-90: sides in ratio x : x : x√2

**Area of a triangle:** A = (1/2)bh

**Similar triangles:**
- Corresponding angles are equal
- Corresponding sides are proportional
- If the scale factor is k, then the ratio of areas is k²

**Example:**
A right triangle has legs of length 5 and 12. Find the hypotenuse.

c² = 5² + 12² = 25 + 144 = 169
c = 13

### Circles

**Key Concepts:**
- Circumference: C = 2πr = πd
- Area: A = πr²
- Arc length: s = (θ/360) * 2πr (where θ is the central angle in degrees)
- Sector area: A = (θ/360) * πr²
- Equation of a circle: (x - h)² + (y - k)² = r², center (h, k), radius r
- A tangent line is perpendicular to the radius at the point of tangency
- Inscribed angle = (1/2) * central angle subtending the same arc

**Example:**
A circle has center (3, -2) and passes through the point (7, 1). What is its equation?

r = √((7-3)² + (1-(-2))²) = √(16 + 9) = √25 = 5
Equation: (x - 3)² + (y + 2)² = 25

### Polygons and Solids

**Rectangles:**
- Area: A = lw
- Perimeter: P = 2l + 2w

**Parallelograms:**
- Area: A = bh

**Trapezoids:**
- Area: A = (1/2)(b1 + b2)h

**Regular polygons:**
- Sum of interior angles: (n - 2) * 180°
- Each interior angle of a regular polygon: (n - 2) * 180° / n

**3D Solids:**
- Rectangular prism: V = lwh, SA = 2(lw + lh + wh)
- Cylinder: V = πr²h, SA = 2πr² + 2πrh
- Cone: V = (1/3)πr²h
- Sphere: V = (4/3)πr³, SA = 4πr²
- Pyramid: V = (1/3)Bh (where B is the area of the base)

### Trigonometry

**Right Triangle Trig Ratios (SOH CAH TOA):**
- sin θ = opposite / hypotenuse
- cos θ = adjacent / hypotenuse
- tan θ = opposite / adjacent

**Key Relationships:**
- sin θ = cos(90° - θ) and cos θ = sin(90° - θ) (complementary angle relationship)
- tan θ = sin θ / cos θ
- sin²θ + cos²θ = 1

**Unit Circle Values to Know:**
| Angle | sin | cos | tan |
|---|---|---|---|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 | √3/3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |
| 90° | 1 | 0 | undefined |

**Radians and Degrees:**
- 180° = π radians
- To convert degrees to radians: multiply by π/180
- To convert radians to degrees: multiply by 180/π

**Example:**
In a right triangle, the side opposite a 30° angle is 7. Find the hypotenuse.

sin 30° = 7 / hypotenuse
1/2 = 7 / hypotenuse
hypotenuse = 14

### Coordinate Geometry

**Key Formulas:**
- Distance formula: d = √((x2-x1)² + (y2-y1)²)
- Midpoint formula: M = ((x1+x2)/2, (y1+y2)/2)
- Slope: m = (y2-y1) / (x2-x1)

**Transformations:**
- Translation: shifts a figure without changing size or orientation
- Reflection: flips a figure over a line
- Rotation: turns a figure around a point
- Dilation: scales a figure by a factor k (center of dilation)

---

## Complete Formula Reference Sheet

### Algebra
| Formula | Description |
|---|---|
| y = mx + b | Slope-intercept form |
| y - y1 = m(x - x1) | Point-slope form |
| m = (y2-y1)/(x2-x1) | Slope formula |
| Ax + By = C | Standard form |

### Quadratics
| Formula | Description |
|---|---|
| x = (-b ± √(b²-4ac)) / 2a | Quadratic formula |
| b² - 4ac | Discriminant |
| x = -b/(2a) | x-coordinate of vertex |
| a² - b² = (a+b)(a-b) | Difference of squares |

### Exponents and Radicals
| Formula | Description |
|---|---|
| a^m * a^n = a^(m+n) | Product rule |
| a^m / a^n = a^(m-n) | Quotient rule |
| (a^m)^n = a^(mn) | Power rule |
| a^(-n) = 1/a^n | Negative exponent |
| a^(1/n) = nth root of a | Fractional exponent |

### Geometry
| Formula | Description |
|---|---|
| A = (1/2)bh | Triangle area |
| a² + b² = c² | Pythagorean theorem |
| C = 2πr | Circle circumference |
| A = πr² | Circle area |
| V = lwh | Rectangular prism volume |
| V = πr²h | Cylinder volume |
| V = (4/3)πr³ | Sphere volume |
| V = (1/3)πr²h | Cone volume |
| (x-h)² + (y-k)² = r² | Circle equation |
| d = √((x2-x1)² + (y2-y1)²) | Distance formula |

### Trigonometry
| Formula | Description |
|---|---|
| sin θ = opp/hyp | Sine ratio |
| cos θ = adj/hyp | Cosine ratio |
| tan θ = opp/adj | Tangent ratio |
| sin²θ + cos²θ = 1 | Pythagorean identity |
| 180° = π radians | Radian conversion |

### Statistics and Probability
| Formula | Description |
|---|---|
| Mean = Σx / n | Average |
| P(A or B) = P(A) + P(B) - P(A and B) | Addition rule |
| P(A and B) = P(A) * P(B|A) | Multiplication rule |
| Percent change = (new-old)/old * 100 | Percent change |

---

## General Test-Taking Strategies for SAT Math

1. **Read carefully.** Many wrong answers come from misreading the question. Pay attention to units, what the question actually asks for, and words like "must," "could," or "approximately."

2. **Use Desmos.** The built-in graphing calculator can solve equations, graph functions, find intersections, and compute statistics. Practice using it before test day.

3. **Backsolve.** On multiple choice questions, try plugging in each answer choice to see which one works. Start with choice B or C (the middle values).

4. **Pick numbers.** When a problem uses variables and no specific numbers, substitute simple numbers (like 2, 3, or 10) to make the problem concrete.

5. **Estimate.** If you can tell an answer should be "a little more than 5," and only one choice is near 5, pick it.

6. **Check your work.** If you have time, plug your answer back into the original equation or re-read the problem to make sure your answer makes sense.

7. **Do not spend too long on one question.** Flag it and move on. Every question is worth the same, so answer the easy ones first.

8. **Always answer every question.** There is no penalty for guessing.

---

*Master these concepts and formulas, practice consistently, and you will be well prepared for SAT Math.*

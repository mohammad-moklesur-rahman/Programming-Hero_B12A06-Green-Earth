# <a href="https://mohammad-moklesur-rahman.github.io/Programming-Hero_B12A06-Green-Earth/">Live Link</a>

## 1. What is the difference between var, let, and const?

Answer: var হলো variable ডিক্লেয়ার করার পুরনো পদ্ধতি। এর scope হলো function scoped। এটি দিয়ে ডিক্লেয়ার করলে re-declare এবং update করা যায়। এটি Hoisting হয় অর্থাৎ ডিক্লেয়ার করার আগেও ব্যবহার করা যায়, কিন্তু মান undefined থাকবে।

বর্তমানে var আর ব্যবহার করা হয় না এর পরিবর্তে let এবং const ব্যবহার করা হয়। let এবং const হলো block scoped। let এবং const এর মধ্যে প্রধান পার্থক্য হলো let দিয়ে variable ডিক্লেয়ার করলে re-declare করা যায় না, তবে update করা যায়। আর const দিয়ে variable ডিক্লেয়ার করলে update বা re-declare কোনটিই করা যায় না। let এবং const দুটই Hoisting হয়, কিন্তু ডিক্লেয়ার করার আগে ব্যবহার করলে Error দিবে।

## 2. What is the difference between map(), forEach(), and filter()?

Answer: map() একটি অ্যারের প্রতিটি element এর উপর function চালিয়ে নতুন একটা array return করে। যা মূল array এর পরিবর্তন হয় না।

forEach() শুধু array এর প্রতিটি element এর উপর loop চালায়। কিন্তু map() এর মতো কিছু return করে না তবে undefined return করে।

আর filter() কোনো শর্তের উপর ভিত্তি করে নতুন একটা array return করে। এটিও map() এর মতো মূল array তে কোনো পরিবর্তন হয় না।

## 3. What are arrow functions in ES6?

Answer: Arrow function হলো ES6 এ function লেখার নতুন পদ্ধতি, যা function লেখার জন্য ছোট এবং সহজ syntax দেয়। এখানে function keyword লিখতে হয় না। এটি সাধারণ function এর মতো কাজ করে, তবে এর মধ্যে কিছু আলাদা বৈশিষ্ট্য আছে।

## 4. How does destructuring assignment work in ES6?

Answer: Destructuring assignment হলো ES6 এ এমন একটি ফিচার যেখানে আমরা array বা object থেকে আলাদা আলাদা ভ্যালু বের করে সরাসরি ভ্যারিয়েবল এ রাখতে পারি। Array থেকে মান বের করার জন্য index অনুযায়ী ভ্যারিয়েবল assign করা হয়। আর Object থেকে key অনুযায়ী ভ্যালু বের করা হয়। এতে কোড ছোট হয়, সহজ হয় এবং পড়তেও সুবিধা হয়।

## 5. Explain template literals in ES6. How are they different from string concatenation?

Answer: Template Literals হল ES6 এ নতুনভাবে string লেখার একটা পদ্ধতি। এটি লেখার সময় backtick (`) চিহ্ন ব্যবহার করা হয়। আমরা খুব সহজে এটির মধ্যে ${} ব্যবহার করে variable বা expression বসাতে পারি। আর string concatenation করতে + চিহ্ন ব্যবহার করতে হয়। এতে Multiline string লেখা খুব কষ্টের কাজ। কিন্তু template literals এর মাধ্যমে Multiline string একাধিক লাইনে খুব সহজে লেখা যায়। এটি ব্যবহার করে কোড লিখলে কোড clean, readable, maintainable হয়।
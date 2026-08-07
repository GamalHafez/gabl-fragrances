# Gabal Fragrances Database Design

## Goals

- Sell perfume products
- Manage inventory
- Allow customer accounts
- Process orders
- Admin dashboard
- Contact messages

---

## User

Fields:

- id
- name
- email
- password
- role
- addresses
- orders
- phoneNumber (?)
- createdAt
- updatedAt

---

## Product

Fields:

- id
- name
- slug
- images (?)
- description
- price
- stock
- inStock
- inspiredBy
- size
- collection ("Men" | "Women")
- topNotes
- midNotes
- baseNotes
- vibes
- bestWeather
- isNew
- isBestSeller
- reviews
- orders

---

## ProductImage

Fields:
- id
- slug
- alt?
- Product
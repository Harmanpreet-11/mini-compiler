# 🧠 Lisp-Like Expression Compiler in JavaScript

![Status](https://img.shields.io/badge/project-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Language](https://img.shields.io/badge/made_with-JavaScript-yellow)

A simple, educational compiler that transforms Lisp-style expressions (e.g., `(add 2 (subtract 4 2))`) into valid JavaScript code (`add(2, subtract(4, 2));`). Built with pure JavaScript, this project demonstrates how compilers work—through tokenization, parsing, transformation, and code generation.

---

## 🚀 Features

- Fully functional tokenizer, parser, AST transformer, and code generator
- Converts nested Lisp-like expressions into clean JavaScript
- Includes support for:
  - Number literals
  - String literals
  - Call expressions
- Clear error handling for unsupported input
- Modular and easy to extend

---

## 📁 Project Structure

 - compiler.js # Main compiler logic (tokenizer, parser, transformer, generator)
 - index.js # Sample runner (executes compiler on test inputs)
 - README.md # Project documentation


---

## 📦 Installation

```bash
git clone https://github.com/your-username/mini-compiler.git
cd mini-compiler
